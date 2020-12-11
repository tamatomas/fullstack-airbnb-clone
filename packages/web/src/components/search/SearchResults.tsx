import { Listing } from "@airbnb/common";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { ListingItem } from "./searchresults/ListingItem";

const useStyles = createUseStyles({
  listcontainer: {
    width: "56%",
    height: "100%",
    display: "flex",
    boxSizing: "border-box",
    padding: 18,
    paddingTop: 26,
    flexDirection: "column",
    overflow: "scroll",
    " -ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
      width: 0,
    },
  },
  title: {
    fontWeight: 600,
    fontSize: 26,
    marginBottom: 24,
  },
  subtitle: {
    fontWeight: 400,
    fontSize: 13,
  },
});

interface Props {
  listings?: Listing[];
}

export const SearchResults = (props: Props) => {
  const styles = useStyles();
  const [hoveredListing, setListing] = useState<Partial<Listing>>({});
  return (
    <div className={styles.listcontainer}>
      <p className={styles.subtitle}>{props.listings?.length} stays</p>
      <p className={styles.title}>
        Stays in {props.listings && props.listings[0].city}
      </p>
      {props.listings &&
        props.listings.map((listing) => (
          <ListingItem
            listing={listing}
            setCurrentListing={(id: string) => setListing({ id })}
          />
        ))}
    </div>
  );
};
