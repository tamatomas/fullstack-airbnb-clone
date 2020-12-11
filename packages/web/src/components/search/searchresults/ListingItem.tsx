import { Listing } from "@airbnb/common";
import { BsHeart } from "react-icons/bs";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  item: {
    width: "100%",
    height: 280,
    borderTop: "1px solid #d2d2d2",
    padding: 12,
    boxSizing: "border-box",
    alignItems: "center",
  },
  itemcont: {
    width: "100%",
    height: 220,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    color: "inherit",
    textDecoration: "none",
  },
  img: {
    width: 300,
    height: 200,
    backgroundColor: "grey",
    borderRadius: 26,
  },
  data: {
    paddingLeft: 8,
    display: "flex",
    flexDirection: "column",
    height: "80%",
  },
  subtitle: {
    fontSize: 12,
  },
  title: {
    fontSize: 17,
    color: "#222222",
  },
  bar: {
    width: 26,
    height: 1,
    backgroundColor: "#d2d2d2",
    margin: 8,
  },
  smalldata: {
    fontSize: 13,
    color: "#717171",
  },
  pricecont: {
    display: "flex",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  price: {
    fontWeight: 600,
    fontSize: 15,
  },
  per: {
    fontSize: 15,
  },
  save: {
    display: "flex",
    position: "absolute",
    top: -200,
    right: 10,
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    "&:focus": {
      outline: "none",
    },
  },
});
interface Props {
  setCurrentListing: (id: string) => void;
  listing?: Partial<Listing>;
  id?: number;
}

export const ListingItem = (props: Props) => {
  const styles = useStyles();
  return (
    <div className={styles.item}>
      <Link
        className={styles.itemcont}
        to={"/listing/" + props.id}
        onMouseEnter={() => props.setCurrentListing(props.listing?.id!)}
      >
        <div className={styles.img}></div>
        <div className={styles.data}>
          <p className={styles.subtitle}>Hotel room in Hell's kitchen</p>
          <p className={styles.title}>Best Hotel Ne York Times, King Room #1</p>
          <div className={styles.bar}></div>
          <p className={styles.smalldata}>
            2 guests - 1 bedroom - 1 private bath
          </p>
          <p className={styles.smalldata}>
            Wifi Breakfast Hot tub Indoor fireplace
          </p>
        </div>
      </Link>
      <div style={{ position: "relative" }}>
        <button className={styles.save}>
          <BsHeart size={24} />
        </button>
      </div>
      <div style={{ position: "relative" }}>
        <div className={styles.pricecont}>
          <p className={styles.price}>$27</p>
          <p className={styles.per}>/ night</p>
        </div>
      </div>
    </div>
  );
};
