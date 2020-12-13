import React from "react";
import { Listing, User } from "@airbnb/common";
import { FIND, USER_DATA } from "@airbnb/controller";
import { useQuery } from "@apollo/client";
import { Layout, Label, CompletionIndicator } from "../../components";
import { RouteComponentProps, useParams, withRouter } from "react-router-dom";
import { useListingStore } from "../../utils/store/listingstore";

interface Props extends RouteComponentProps {}

export const ViewListing = withRouter((props: Props) => {
  useQuery<{ data: User }>(USER_DATA);
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery<{ find: Listing }>(FIND, {
    variables: { id: parseInt(id) },
  });

  const setListing = useListingStore((state) => state.setListing);

  const handleClick = (to: string) => {
    setListing(data?.find!);
    props.history.push(to + data?.find.id);
  };

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
            label={"Room"}
            completed={
              !!data?.find.proptype &&
              data?.find.dedicated !== null &&
              data?.find.dedicated !== undefined
            }
            onClick={() => handleClick("/become-a-host/room/")}
          />
          <CompletionIndicator
            label={"Bedrooms"}
            completed={
              !!data?.find.nguests && !!data?.find.bedrooms && !!data?.find.beds
            }
            onClick={() => handleClick("/become-a-host/bedrooms/")}
          />
          <CompletionIndicator
            label={"Location"}
            completed={
              !!data?.find.country &&
              !!data?.find.street &&
              !!data?.find.city &&
              !!data?.find.state &&
              !!data?.find.zip
            }
            onClick={() => handleClick("/become-a-host/location/")}
          />
          <CompletionIndicator
            label={"Amenities"}
            completed={
              !!data?.find.amenities && data?.find.amenities?.length > 1
            }
            onClick={() => handleClick("/become-a-host/amenities/")}
          />
          <CompletionIndicator
            label={"Description"}
            completed={
              !!data?.find.title &&
              !!data?.find.description &&
              !!data?.find.price
            }
            onClick={() => handleClick("/become-a-host/description/")}
          />
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
});
