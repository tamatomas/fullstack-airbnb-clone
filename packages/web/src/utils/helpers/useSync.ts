import { Listing } from "@airbnb/common";
import { useEffect } from "react";
import { useListingStore } from "../store/listingstore";
import { useSaveListing } from "./useSaveListing";

export const useSync = () => {
  const { save, listing } = useSaveListing();
  const updateListing = useListingStore((state) => state.updateListing);
  useEffect(() => {
    if (!listing?.id)
      save()
        .then((data) => {
          delete data.data.createListing!.__typename;
          updateListing(data.data.createListing!);
        })
        .catch((err) => console.log(err));
  }, [listing, save, updateListing]);

  useEffect(() => {
    if (listing?.id)
      save()
        .then((data) => {
          delete data.data.updateListing!.__typename;
          updateListing(data.data.updateListing!);
        })
        .catch((err) => console.log(err));
  }, [listing, save, updateListing]);
  return { save, listing };
};
