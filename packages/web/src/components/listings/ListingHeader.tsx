import { Header } from "../Header";
import React from "react";
import { BsHouse } from "react-icons/bs";
import { createUseStyles } from "react-jss";
import { FormTitleParam } from "../../utils/consts/FormTitleParam";
import { ListingSync } from "./ListingSync";
import { useListingStore } from "../../utils/store/listingstore";

const useStyles = createUseStyles({
  icon: {
    marginLeft: 16,
    color: "#484848",
  },
  title: {
    fontFamily: "poppins",
    fontSize: 18,
    fontWeight: 300,
    marginLeft: 16,
    color: "#484848",
  },
});

interface Props {
  routename?: string;
}

export const ListingHeader = (props: Props) => {
  const styles = useStyles();
  const listingId = useListingStore((state) => state.listing)?.id;
  const showSync =
    props.routename === "location" ||
    props.routename === "amenities" ||
    props.routename === "description";
  return (
    <Header>
      <BsHouse className={styles.icon} size={32} />
      <p className={styles.title}>
        {FormTitleParam.find((i) => i.route === props.routename)?.title}
      </p>
      {listingId && (
        <p className={styles.title} style={{ color: "#ababab" }}>
          {"Listing#" + listingId}
        </p>
      )}
      {showSync && <ListingSync />}
    </Header>
  );
};
