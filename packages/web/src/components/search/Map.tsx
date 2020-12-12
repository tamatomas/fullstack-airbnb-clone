import { createUseStyles } from "react-jss";
import GoogleMapReact from "google-map-react";
import { Listing } from "@airbnb/common";

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
  return (
    <div className={styles.mapcontainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyApADs6lsYxImhYSXsc9yR5CS9xQbsUXUM" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};
