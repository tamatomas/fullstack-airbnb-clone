import { FaHome } from "react-icons/fa";
import { createUseStyles } from "react-jss";

const K_WIDTH = 48;
const K_HEIGHT = 48;

const useStyles = createUseStyles({
  container: {
    position: "absolute",
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,
    borderRadius: K_HEIGHT / 2,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
interface Props {
  lat: number;
  lng: number;
}

export const Marker = (props: Props) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <FaHome size={24} color={"white"} />
    </div>
  );
};
