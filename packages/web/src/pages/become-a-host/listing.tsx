import React from "react";
import { User } from "@airbnb/common";
import { USER_DATA } from "@airbnb/controller";
import { useQuery } from "@apollo/client";
import { Layout, Label, CompletionIndicator } from "../../components";

interface Props {}

export const ViewListing = (props: Props) => {
  useQuery<{ data: User }>(USER_DATA);

  /*const { data: listing } = useQuery<{ data: Listing }>(FIND, {
    variables: { id: props.id },
  });*/
  console.log(props);
  return (
    <React.Fragment>
      <Layout formstyle={{ paddingBottom: 100 }}>
        <React.Fragment>
          <Label label={"Finish your listing to start earning "} size={25} />
          <Label
            label={"You can always edit your listing after you publish it."}
            size={16}
          />
          <CompletionIndicator
            label={"Property and Guests"}
            completed
            to={"/asd"}
          />
          <CompletionIndicator
            to={"/asd"}
            label={"Property and Guests"}
            completed={false}
          />
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};
