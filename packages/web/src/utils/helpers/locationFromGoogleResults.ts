import { Listing } from "@airbnb/common";
import { getLatLng } from "react-places-autocomplete";

export const getListingLocationFromGResults = async (
  result: google.maps.GeocoderResult
) => {
  let newlisting: Partial<Listing> = {};

  result.address_components.forEach((components) => {
    if (components.types.find((type) => type === "locality"))
      newlisting!.city = components.long_name;
    if (components.types.find((type) => type === "country"))
      newlisting!.country = components.long_name;
    if (components.types.find((type) => type === "administrative_area_level_1"))
      newlisting!.state = components.long_name;
  });
  await getLatLng(result).then((res) => {
    newlisting!.location = { lat: res.lat, lon: res.lng };
  });

  return newlisting;
};
