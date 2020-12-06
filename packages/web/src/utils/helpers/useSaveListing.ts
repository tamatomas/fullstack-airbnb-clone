import { Listing } from "@airbnb/common";
import { CREATE, UPDATE } from "@airbnb/controller";
import { useMutation } from "@apollo/client";
import { useListingStore } from "../store/listingstore";

export const useSaveListing = () => {
  const listing = useListingStore((state) => state.listing);
  const [save, data] = useMutation<Partial<Listing>>(
    listing?.id ? UPDATE : CREATE,
    {
      variables: { data: listing },
    }
  );
  return { save, listing };
};
