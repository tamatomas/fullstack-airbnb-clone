import { Listing } from "@airbnb/common";
import { CREATE, UPDATE } from "@airbnb/controller";
import { useMutation } from "@apollo/client";
import { useListingStore } from "../store/listingstore";

export const useSaveListing = () => {
  const listing = useListingStore((state) => state.listing);
  const updateListing = useListingStore((state) => state.updateListing);

  const [saveListing] = useMutation(listing?.id ? UPDATE : CREATE);
  const save = ({
    callback,
    listingargs,
  }: {
    callback?: () => void;
    listingargs?: Partial<Listing>;
  }) => {
    saveListing({
      variables: { data: { ...listing, ...listingargs } },
    }).then((data) => {
      if (!listing?.id) {
        delete data.data?.createListing.__typename;
        updateListing(data.data.createListing);
      } else {
        delete data.data?.updateListing.__typename;
        updateListing(data.data.updateListing);
      }
      if (callback) callback();
    });
  };

  return { save, listing };
};
