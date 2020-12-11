import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  div: {
    width: 124,
    height: 42,
    borderRadius: 42 / 2,
    display: "flex",
    marginRight: 20,
    "&:hover": {
      backgroundColor: "#ffffff45",
    },
  },
  link: {
    margin: "auto",
    color: "white",
    textDecoration: "none",
    fontFamily: "poppins",
    fontSize: 14,
  },
});

interface Props {
  label?: string;
  to: string;
  color?: string;
}

export const HeaderButton = (props: Props) => {
  const styles = useStyles();
  return (
    <div className={styles.div}>
      <Link
        to={props.to}
        className={styles.link}
        style={{ color: props.color }}
      >
        {props.label}
      </Link>
    </div>
  );
};
