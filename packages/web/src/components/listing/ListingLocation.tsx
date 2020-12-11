import { createUseStyles } from "react-jss";
import GoogleMapReact from "google-map-react";
import { Marker } from "./Marker";

const useStyles = createUseStyles({
  mapcontainer: {
    width: "100%",
    height: 480,
  },
});

interface Props {
  location?: any;
}

const zoom = 11;

export const ListingLocation = (props: Props) => {
  const styles = useStyles();
  return (
    <div className={styles.mapcontainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyApADs6lsYxImhYSXsc9yR5CS9xQbsUXUM" }}
        defaultCenter={{ lat: props.location.lat, lng: props.location.lon }}
        defaultZoom={zoom}
      >
        <Marker lat={props.location.lat} lng={props.location.lon} />
      </GoogleMapReact>
    </div>
  );
};
