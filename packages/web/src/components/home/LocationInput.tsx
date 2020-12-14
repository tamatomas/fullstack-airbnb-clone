import { Listing } from "@airbnb/common";
import React, { useState } from "react";
import { SearchBarBtn } from "./SearchBarButton";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import { createUseStyles } from "react-jss";
import { RelativeModal } from "../RelativeModal";
import { getListingLocationFromGResults } from "../../utils/helpers/locationFromGoogleResults";
import { ImLocation } from "react-icons/im";

const useStyles = createUseStyles({
  modal: {
    width: 480,
    height: "auto",
    maxHeight: 500,
    borderRadius: 30,
    top: 20,
    left: -20,
    boxShadow: "0px 0px 4px 0px #000000",
    backgroundColor: "#fafafa",
    zIndex: 1000,
    overflow: "hidden",
  },
  list: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingTop: 6,
    paddingBottom: 6,
  },
  listitem: {
    width: "calc(100% - 8px)",
    display: "flex",
    boxSizing: "border-box",
    padding: "10px 12px",
    alignItems: "center",
    fontFamily: "poppins",
    fontSize: 15,
    justifyContent: "flex-start",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 6,
    backgroundColor: "#ebebeb",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginRight: 10,
  },
});
interface Props {
  listing?: Partial<Listing> | null;
  onChange: (listing: Partial<Listing>) => void;
}

export const LocationInput = (props: Props) => {
  const styles = useStyles();
  const [address, setAddress] = useState<any>();
  const handleChange = (address: any) => {
    setAddress(address);
  };

  const handleSelect = (address: any) => {
    geocodeByAddress(address).then(async (results) => {
      setAddress(results[0].formatted_address);
      props.onChange({
        ...props.listing,
        ...(await getListingLocationFromGResults(results[0])),
      });
    });
  };
  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      searchOptions={{ types: ["(cities)"] }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <SearchBarBtn
          label={"Location"}
          inputProps={{
            ...(getInputProps({
              placeholder: "Where are you going?",
              className: "location-search-input",
            }) as any),
          }}
        >
          <RelativeModal className={styles.modal}>
            {suggestions.length > 0 && (
              <div className={styles.list}>
                {suggestions.map((suggestion) => (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className: styles.listitem,
                    })}
                  >
                    <div className={styles.icon}>
                      <ImLocation size={24} />
                    </div>
                    {suggestion.description}
                  </div>
                ))}
              </div>
            )}
          </RelativeModal>
        </SearchBarBtn>
      )}
    </PlacesAutocomplete>
  );
};
