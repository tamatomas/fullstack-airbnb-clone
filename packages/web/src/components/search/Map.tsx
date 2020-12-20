import { createUseStyles } from "react-jss";
import GoogleMapReact from "google-map-react";
import { Listing } from "@airbnb/common";
import { ListingIndicator } from "../../components/search/map/ListingIndicator";

const useStyles = createUseStyles({
  mapcontainer: {
    width: "44%",
    height: "100%",
  },
});

interface Props {
  listings: Partial<Listing>[] | undefined;
  listing: Partial<Listing>;
}

const center = {
  lat: 59.95,
  lng: 30.33,
};
const zoom = 11;

export const Map = (props: Props) => {
  const styles = useStyles();
  console.log(process.env.REACT_APP_GOOGLE_API_KEY);
  return (
    <div className={styles.mapcontainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY! }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {props.listings &&
          props.listings.map((list) => (
            <ListingIndicator
              price={list.price}
              lat={list.location.lat}
              lng={list.location.lon}
              focused={props.listing.id === list.id}
            />
          ))}
      </GoogleMapReact>
    </div>
  );
};
