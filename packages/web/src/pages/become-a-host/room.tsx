import React, { useState } from "react";
import { PropertyType, User } from "@airbnb/common";
import { USER_DATA } from "@airbnb/controller";
import { useQuery } from "@apollo/client";
import {
  Title,
  Layout,
  ListingHeader,
  Select,
  NavControlls,
  RadioButton,
  Label,
} from "../../components";

interface Props {}

const dataFromEnum = Object.entries(PropertyType)
  .filter((e) => !isNaN(e[0] as any))
  .map((e) => ({ name: e[1], id: e[0] }));

export const Room = (props: Props) => {
  useQuery<{ data: User }>(USER_DATA);
  const [dedicated, setDedicated] = useState(false);
  const [propType, setPropType] = useState(PropertyType.House.valueOf());

  return (
    <React.Fragment>
      <ListingHeader routename={"room"} />
      <Layout>
        <React.Fragment>
          <Title title={"What kind of place are you listing?"} />
          <Select
            label={"Choose a property type"}
            data={dataFromEnum.map((i) => i.name)}
            selected={propType}
            setSelected={(select: number) => setPropType(select)}
          />
          <Label label={"Is this set up as a dedicated guest space?"} bold />
          <RadioButton
            selected={dedicated}
            onChange={() => setDedicated(true)}
            label={"Yes, it’s primarily set up for guests"}
          />
          <RadioButton
            selected={!dedicated}
            onChange={() => setDedicated(false)}
            label={"No, I keep my personal belongings here"}
          />
        </React.Fragment>
      </Layout>
      <Layout style={{ position: "fixed", bottom: 0 }}>
        <NavControlls
          continueLink={"/become-a-host/bedrooms"}
          listingArgs={{ proptype: propType, dedicated: dedicated }}
        />
      </Layout>
    </React.Fragment>
  );
};
