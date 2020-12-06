import { Listing } from "@airbnb/common";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useListingStore } from "../../utils/store/listingstore";
import { InputSimple } from "./InputSimple";

const useStyles = createUseStyles({
  listcont: {
    backgroundColor: "#fafafa",
    position: "relative",
    width: "100%",
    top: 8,
    left: 0,
    borderRadius: 4,
    boxShadow: "0px 0px 4px 0px #000000",
    display: "flex",
    zIndex: 1000,
  },
  list: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingTop: 6,
    paddingBottom: 6,
  },
  listitem: {
    padding: 4,
    width: "calc(100% - 8px)",
    display: "flex",
    alignItems: "center",
    fontFamily: "poppins",
    fontSize: 15,
    justifyContent: "flex-start",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
});

export const LocationAutoComplete = () => {
  const styles = useStyles();
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
  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <div>
          <InputSimple
            {...(getInputProps({
              placeholder: "Search Places ...",
              className: "location-search-input",
            }) as any)}
          />
          {suggestions.length > 0 && (
            <div className={styles.listcont}>
              <div className={styles.list}>
                {suggestions.map((suggestion) => (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className: styles.listitem,
                    })}
                  >
                    {suggestion.description}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </PlacesAutocomplete>
  );
};

const getListingLocationFromGResults = (result: google.maps.GeocoderResult) => {
  let newlisting: Partial<Listing> = {};

  result.address_components.forEach((components) => {
    if (components.types.find((type) => type === "route" || type === "street"))
      newlisting!.street = components.long_name;
    if (components.types.find((type) => type === "locality"))
      newlisting!.city = components.long_name;
    if (components.types.find((type) => type === "country"))
      newlisting!.country = components.long_name;
    if (components.types.find((type) => type === "administrative_area_level_1"))
      newlisting!.state = components.long_name;
  });
  getLatLng(result).then((res) => {
    newlisting!.location = { lat: res.lat, lon: res.lng };
  });

  return newlisting;
};
