import { User } from "@airbnb/common";
import { USER_LISTINGS } from "@airbnb/controller";
import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { Redirect, withRouter, RouteComponentProps } from "react-router-dom";
import { Button, Layout, RadioButton } from "../../components";
import { useListingStore } from "../../utils/store/listingstore";

const useStyles = createUseStyles({
  view: {
    width: 385,
    maxWidth: "50%",
    paddingTop: 40,
    paddingBottom: 40,
    marginLeft: 32,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontWeight: 500,
    fontSize: 27,
    color: "#484848",
  },
  subtitle: {
    fontWeight: 500,
    fontSize: 18,
    color: "#484848",
    marginTop: 24,
  },
  text: {
    color: "#484848",
  },
  item: {
    display: "flex",
    alignItems: "center",
    height: 112,
    borderBottom: "1px solid #ebebeb",
    cursor: "pointer",
  },
  itemradio: {
    width: "8%",
  },
  itemimg: {
    width: 96,
    height: 64,
    backgroundColor: "grey",
    marginRight: 20,
  },
  bottomcontainer: {
    width: "100%",
    display: "flex",
    borderTop: "1px solid #ebebeb",
    paddingTop: 20,
    backgroundColor: "#fff",
  },
});

interface Props extends RouteComponentProps {}

interface ItemProps {
  title: string;
  id?: string;
  selected: string | null;
  onChange(): void;
}
const Item = ({ title, id, onChange, selected }: ItemProps) => {
  const styles = useStyles();
  return (
    <div className={styles.item} onClick={() => onChange()}>
      <RadioButton
        contClassName={styles.itemradio}
        selected={selected === id}
        onChange={() => onChange()}
        color={"#008489"}
        size={16}
      />
      <div className={styles.itemimg}></div>
      <p className={styles.text}>{title}</p>
    </div>
  );
};

export const Duplicate = withRouter((props: Props) => {
  const styles = useStyles();
  const { data, loading } = useQuery<{ data: User }>(USER_LISTINGS);
  const [selected, setSelected] = useState<string | null>(null);
  const resetListing = useListingStore((state) => state.resetListing);
  const updateListing = useListingStore((state) => state.updateListing);
  const handleNext = () => {
    resetListing();
    if (selected === "0") {
      props.history.push("/become-a-host");
    }
    if (selected !== "0") {
      const { id, ...listing } = data?.data.listings.find(
        (listing) => listing.id === selected
      )!;
      if (
        data?.data.listings.find((listing) => listing.id === selected)?.finished
      ) {
        updateListing(listing);
        props.history.push("/become-a-host/room");
      } else {
        props.history.push("/become-a-host/" + id);
      }
    }
  };
  if (!data?.data?.listings?.length && !loading) {
    return <Redirect to="/become-a-host" />;
  }
  return (
    <Fragment>
      <div className={styles.view}>
        <p className={styles.title}>{"How would you like to start?"}</p>
        <Item
          title={"Create a new listing"}
          selected={selected}
          id={"0"}
          onChange={() => setSelected("0")}
        />
        <p className={styles.subtitle}>{"Finish a listing in progress"}</p>
        {data?.data.listings
          .filter((listing) => !listing.finished)
          .map((listing) => (
            <Item
              title={listing.title!}
              id={listing.id}
              selected={selected}
              onChange={() => setSelected(listing.id)}
            />
          ))}
        <p className={styles.subtitle}>{"Duplicate an existing listing"}</p>
        <p className={styles.text}>
          {"You’ll get to review the duplicated listing before publishing."}
        </p>
        {data?.data.listings
          .filter((listing) => listing.finished)
          .map((listing) => (
            <Item
              title={listing.title!}
              id={listing.id}
              selected={selected}
              onChange={() => setSelected(listing.id)}
            />
          ))}
      </div>
      <Layout style={{ position: "fixed", bottom: 0 }}>
        <div className={styles.bottomcontainer}>
          <Button
            title={"Next"}
            style={{ marginLeft: "auto" }}
            onClick={() => handleNext()}
          />
        </div>
      </Layout>
    </Fragment>
  );
});
