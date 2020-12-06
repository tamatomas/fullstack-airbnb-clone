import React, { useEffect, useState } from "react";
import { User } from "@airbnb/common";
import { USER_DATA } from "@airbnb/controller";
import { useQuery } from "@apollo/client";
import {
  Title,
  Layout,
  ListingHeader,
  NavControlls,
  CheckBox,
  Label,
} from "../../components";
import { useListingStore } from "../../utils/store/listingstore";

interface Props {}

export function Amenities(props: Props) {
  const { data } = useQuery<{ data: User }>(USER_DATA);
  const [amenities, setAmenities] = useState<string[]>([]);

  const storeAmenities = useListingStore((state) => state.listing)?.amenities;
  useEffect(() => {
    if (storeAmenities) setAmenities(storeAmenities);
  }, [storeAmenities]);

  const handleSetAmenty = (amenity: string) => {
    if (amenities.find((elem) => elem === amenity)) {
      setAmenities(amenities.filter((elem) => elem !== amenity));
    } else setAmenities(amenities.concat(amenity));
  };

  return (
    <React.Fragment>
      <ListingHeader routename={"amenities"} />
      <Layout formstyle={{ paddingBottom: 100 }}>
        <React.Fragment>
          <Title title={"What amenities do you offer?"} />
          <Label
            label={
              "These are just the amenities guests usually expect, but you can add even more after you publish."
            }
            size={16}
          />
          <CheckBox
            label={"Essentials"}
            selected={!!amenities.find((elem) => elem === "essentials")}
            onChange={() => handleSetAmenty("essentials")}
          />
          <CheckBox
            label={"Wifi"}
            selected={!!amenities.find((elem) => elem === "Wifi")}
            onChange={() => handleSetAmenty("Wifi")}
          />
          <CheckBox
            label={"TV"}
            selected={!!amenities.find((elem) => elem === "TV")}
            onChange={() => handleSetAmenty("TV")}
          />
          <CheckBox
            label={"Heat"}
            selected={!!amenities.find((elem) => elem === "Heat")}
            onChange={() => handleSetAmenty("Heat")}
          />
          <CheckBox
            label={"Air conditioning"}
            selected={!!amenities.find((elem) => elem === "Air conditioning")}
            onChange={() => handleSetAmenty("Air conditioning")}
          />
          <CheckBox
            label={"Iron"}
            selected={!!amenities.find((elem) => elem === "Iron")}
            onChange={() => handleSetAmenty("Iron")}
          />
          <CheckBox
            label={"Shampoo"}
            selected={!!amenities.find((elem) => elem === "Shampoo")}
            onChange={() => handleSetAmenty("Shampoo")}
          />
          <CheckBox
            label={"Hair dryer"}
            selected={!!amenities.find((elem) => elem === "Hair dryer")}
            onChange={() => handleSetAmenty("Hair dryer")}
          />
          <CheckBox
            label={"Breakfast, coffee, tea"}
            selected={
              !!amenities.find((elem) => elem === "Breakfast, coffee, tea")
            }
            onChange={() => handleSetAmenty("Breakfast, coffee, tea")}
          />
          <CheckBox
            label={"Desk/workspace"}
            selected={!!amenities.find((elem) => elem === "Desk/workspace")}
            onChange={() => handleSetAmenty("Desk/workspace")}
          />
          <CheckBox
            label={"Fireplace"}
            selected={!!amenities.find((elem) => elem === "Fireplace")}
            onChange={() => handleSetAmenty("Fireplace")}
          />
          <CheckBox
            label={"Closet/drawers"}
            selected={!!amenities.find((elem) => elem === "Closet/drawers")}
            onChange={() => handleSetAmenty("Closet/drawers")}
          />
          <CheckBox
            label={"Private entrance"}
            selected={!!amenities.find((elem) => elem === "Private entrance")}
            onChange={() => handleSetAmenty("Private entrance")}
          />
        </React.Fragment>
      </Layout>
      <Layout
        style={{ position: "fixed", bottom: 0 }}
        formstyle={{ paddingBottom: 0 }}
      >
        <NavControlls
          backLink={"/become-a-host/location"}
          continueLink={"/become-a-host/description"}
          listingArgs={{ amenities }}
        />
      </Layout>
    </React.Fragment>
  );
}
