import { RouteComponentProps, withRouter } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { AmenityList } from "../../utils/consts/Amenities";
import { Fragment, ReactNode } from "react";
import { ListingLocation } from "../../components/listing/ListingLocation";
import { BookListing } from "../../components/listing/BookListing";
import { useQuery } from "@apollo/client";
import { FIND } from "@airbnb/controller";
import { Listing } from "@airbnb/common";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "absolute",
    zIndex: 999,
    alignSelf: "center",
    padding: "0 10%",
    paddingTop: 100,
    boxSizing: "border-box",
  },
  title: {
    fontSize: 26,
    fontWeight: 500,
    margin: "12px 0px",
  },
  imgcontainer: {
    height: 336,
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 24,
    margin: "24px 0",
  },
  datacontainer: {
    display: "flex",
  },
  data: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    boxSizing: "border-box",
    paddingLeft: 24,
  },
  titleinfocontainer: {
    display: "flex",
  },
  text: {
    fontSize: 17,
    fontWeight: 400,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    marginLeft: "auto",
    backgroundColor: "grey",
  },
  bar: {
    width: "100%",
    height: 1,
    backgroundColor: "#d2d2d2",
    margin: "24px 0px",
    boxSizing: "border-box",
  },
  amenitylist: {
    display: "flex",
    flexDirection: "column",
    maxHeight: 240,
    flexFlow: "wrap",
    "& svg": {
      width: 20,
      height: 20,
      margin: 10,
      color: "#222222",
    },
  },
  amenity: {
    display: "flex",
    height: 40,
    width: "49%",
    alignItems: "center",
    margin: 4,
    boxSizing: "border-box",
  },
});
interface Props extends RouteComponentProps<{ id: string }> {}

const AmenityItem = ({ name, icon }: { name: string; icon: ReactNode }) => {
  const styles = useStyles();
  return (
    <div className={styles.amenity}>
      {icon}
      <p className={styles.text}>{name}</p>
    </div>
  );
};

export const ListingView = withRouter((props: Props) => {
  const styles = useStyles();
  const { data, loading } = useQuery<{ find: Listing }>(FIND, {
    variables: { id: parseInt(props.match.params.id) },
  });
  const listing = data?.find;
  if (loading) {
    return <div></div>;
  }
  return (
    <div className={styles.container}>
      <p className={styles.title}>{listing?.title}</p>
      <div className={styles.imgcontainer}></div>
      <div className={styles.datacontainer}>
        <div className={styles.data}>
          <div className={styles.titleinfocontainer}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className={styles.title} style={{ fontSize: 22 }}>
                {"Room hosted by " + listing?.owner.firstname}
              </p>
              <p className={styles.text}>
                {`${listing?.nguests} guests · ${listing?.bedrooms} bedroom`}
              </p>
            </div>
            <div className={styles.avatar}></div>
          </div>
          <div className={styles.bar}></div>
          <p>{listing?.description}</p>
          {/*<Link to="">Contact host</Link>*/}
          {listing?.amenities && (
            <Fragment>
              <div className={styles.bar}></div>
              <p className={styles.title} style={{ fontSize: 22 }}>
                Amenities
              </p>
              <div className={styles.amenitylist}>
                {listing?.amenities?.map((elem) =>
                  AmenityList.forEach((amenity) => {
                    if (amenity.name === elem)
                      return (
                        <AmenityItem name={amenity.name} icon={amenity.icon} />
                      );
                  })
                )}
              </div>
            </Fragment>
          )}
        </div>
        <BookListing />
      </div>
      <div className={styles.bar}></div>
      <p className={styles.title} style={{ fontSize: 22 }}>
        Location
      </p>
      <ListingLocation location={{ lat: -31.399947, lon: -64.49908 }} />
    </div>
  );
});
