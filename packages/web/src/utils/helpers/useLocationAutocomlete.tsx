import { useState } from "react";
import { geocodeByAddress } from "react-places-autocomplete";
import { useListingStore } from "../store/listingstore";
import { getListingLocationFromGResults } from "./locationFromGoogleResults";

export const useLocationAutocomplete = () => {
  const [address, setAddress] = useState<any>();
  const updateListing = useListingStore((state) => state.updateListing);
  const handleChange = (address: any) => {
    setAddress(address);
  };

  const handleSelect = (address: any) => {
    geocodeByAddress(address).then((results) => {
      setAddress(results[0].formatted_address);
      updateListing(getListingLocationFromGResults(results[0]));
    });
  };
  return { address, handleChange, handleSelect };
};
