import Geocode from "react-geocode";

export const useLatLng = (street: string) => {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY!);
  Geocode.enableDebug();
  return Geocode.fromAddress(street).then(
    (response) => response.results[0].geometry.location,
    (error) => console.log(error)
  );
};
