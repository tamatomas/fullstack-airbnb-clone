import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  img: {
    width: "100%",
    height: "100%",
  },
});

export const Main = () => {
  const styles = useStyles();
  return (
    <React.Fragment>
      <img className={styles.img} src={"./airbnbphoto.webp"} alt={"bckg"} />
    </React.Fragment>
  );
};
