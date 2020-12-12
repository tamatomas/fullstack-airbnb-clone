import { SEARCH } from "@airbnb/controller";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Map } from "../../components/search/Map";
import { SearchResults } from "../../components/search/SearchResults";
import { useSearchStore } from "../../utils/store/searchstore";
import { createUseStyles } from "react-jss";
import { Listing } from "@airbnb/common";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    width: "100%",
    height: "calc(100% - 70px)",
    paddingTop: 70,
    position: "absolute",
    zIndex: 999,
  },
});
interface Props {}

export const Search = (props: Props) => {
  const styles = useStyles();
  const [hoveredListing, setListing] = useState<Partial<Listing>>({});
  const listing = useSearchStore((state) => state.searchArgs);
  const { data, refetch } = useQuery<{ search: Listing[] }>(SEARCH, {
    variables: { ...listing },
  });
  useEffect(() => {
    refetch();
  }, [listing, refetch]);
  return (
    <div className={styles.container}>
      <SearchResults
        listings={data?.search}
        setListing={(id: string) => setListing({ id })}
      />
      <Map listing={hoveredListing} listings={data?.search} />
    </div>
  );
};
