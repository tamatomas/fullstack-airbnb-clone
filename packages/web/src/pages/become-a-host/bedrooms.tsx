import React, { useEffect, useState } from "react";
import { User } from "@airbnb/common";
import { USER_DATA } from "@airbnb/controller";
import { useQuery } from "@apollo/client";
import {
  Title,
  Layout,
  NavControlls,
  Label,
  InlineCounter,
  Select,
} from "../../components";
import { useListingStore } from "../../utils/store/listingstore";

interface Props {}

export function Bedrooms(props: Props) {
  useQuery<{ data: User }>(USER_DATA);
  const nguests = useListingStore((state) => state.listing)?.nguests;
  useEffect(() => {
    if (nguests) setGuests(nguests);
  }, [nguests]);
  const [guests, setGuests] = useState(1);
  const [bedCount, setBedCount] = useState(1);
  const [bedRoomCount, setBedRoomCount] = useState(1);
  const roomArray = Array.from(Array(50).keys()).map(
    (i) => `${i + 1} bedrooms`
  );
  return (
    <React.Fragment>
      <Layout formstyle={{ paddingBottom: 100 }}>
        <React.Fragment>
          <Title title={"How many guests can your place accommodate?"} />
          <Label
            label={
              "Check that you have enough beds to accommodate all your guests comfortably."
            }
            size={16}
          />
          <InlineCounter
            count={guests}
            onChange={(count: number) => setGuests(count)}
            label={"Guests"}
            max={16}
            min={1}
          />
          <Label label={"How many bedrooms can guests use?"} size={16} />
          <Select
            data={roomArray}
            selected={bedRoomCount}
            setSelected={(count) => setBedRoomCount(count)}
          />
          <Label label={"How many beds can guests use?"} size={16} />
          <InlineCounter
            count={bedCount}
            onChange={(count: number) => setBedCount(count)}
            label={"Beds"}
            min={1}
          />
        </React.Fragment>
      </Layout>
      <Layout style={{ position: "fixed", bottom: 0 }}>
        <NavControlls
          continueLink={"/become-a-host/location"}
          backLink={"/become-a-host/room"}
          listingArgs={{
            nguests: guests,
            beds: bedCount,
            bedrooms: bedRoomCount,
          }}
        />
      </Layout>
    </React.Fragment>
  );
}
