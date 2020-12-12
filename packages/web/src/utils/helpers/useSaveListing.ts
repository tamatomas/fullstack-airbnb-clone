import { CREATE, UPDATE } from "@airbnb/controller";
import { useMutation } from "@apollo/client";
import { useListingStore } from "../store/listingstore";

export const useSaveListing = () => {
  const listing = useListingStore((state) => state.listing);

  const [save] = useMutation(listing?.id ? UPDATE : CREATE, {
    variables: { data: listing },
  });
  return { save, listing };
};
