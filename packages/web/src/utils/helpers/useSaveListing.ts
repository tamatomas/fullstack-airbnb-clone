import { CREATE, UPDATE } from "@airbnb/controller";
import { useMutation } from "@apollo/client";
import { useListingStore } from "../store/listingstore";

export const useSaveListing = () => {
  const listing = useListingStore((state) => state.listing);
  const updateListing = useListingStore((state) => state.updateListing);

  const [save, data] = useMutation(listing?.id ? UPDATE : CREATE, {
    variables: { data: listing },
  });

  const saveListing = () => {
    save().then(() => {
      if (!listing?.id) {
        updateListing(data.data.createListing);
      } else {
        updateListing(data.data.updateListing);
      }
    });
  };

  return { saveListing, listing };
};
