import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    position: "absolute",
  },
  view: {
    transform: "translate(-50%, -50%) scale(1)",
    width: "fit-content",
    height: 28,
    borderRadius: 28 / 2,
    backgroundColor: "white",
    boxShadow: ".5px .5px 3px .5px #585858",
    display: "flex",
    padding: "0px 2px",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    transition: "transform .3s ease",
    "&:hover": {
      transform: "translate(-50%, -50%) scale(1.077)",
    },
  },
  focused: {
    backgroundColor: "black",
    color: "white",
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
  },
});

interface Props {
  price?: string | number | null;
  lat: number;
  lng: number;
  focused?: boolean;
}

export const ListingIndicator = (props: Props) => {
  const styles = useStyles();
  return (
    <div className={`${styles.view} ${props.focused ? styles.focused : ""}`}>
      <p className={styles.text}>{props.price}</p>
    </div>
  );
};
