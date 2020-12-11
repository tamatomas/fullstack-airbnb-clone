import { ButtonWithGradient } from "../ButtonWithGradient";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    width: "32%",
    boxSizing: "border-box",
    padding: 24,
    height: "fit-content",
    borderRadius: 16,
    border: "1px solid #dddddd",
    boxShadow: "0px 7px 16px 2px #a0a0a08f",
    position: "sticky",
    top: 80,
    marginLeft: "5%",
  },
  price: {
    fontSize: 18,
    fontWeight: 500,
  },
  per: {
    fontSize: 16,
  },
});
interface Props {}

export const BookListing = (props: Props) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <p className={styles.price}>$30</p>
        <p className={styles.per}>/ night</p>
      </div>
      <div>Guests dropdown</div>
      <ButtonWithGradient
        child={
          <p style={{ width: "max-content", fontSize: 19 }}>{"Reserve"}</p>
        }
      />
    </div>
  );
};
