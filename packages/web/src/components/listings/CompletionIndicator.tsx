import { Button } from "../../components";
import React from "react";
import { createUseStyles } from "react-jss";
import { BiCheck } from "react-icons/bi";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "6px 4px",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  inline: {
    display: "flex",
    alignItems: "center",
    margin: "6px 4px",
  },
  icon: {
    width: 50,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconcont: {},
  label: {
    fontFamily: "poppins",
    fontSize: 17,
    color: "black",
  },
});

interface Props {
  label: string;
  to: string;
  completed?: boolean;
}

export const CompletionIndicator = (props: Props) => {
  const styles = useStyles();
  console.log(props);
  return (
    <div className={styles.container}>
      <div className={styles.inline}>
        <div className={styles.icon}>
          {props.completed ? (
            <BiCheck size={32} color={"#008489"} />
          ) : (
            <RiErrorWarningFill size={18} color={"#008489"} />
          )}
        </div>
        <Link className={styles.label} to={props.to}>
          {props.label}
        </Link>
      </div>
      <Button title={"Continue"} style={{ fontWeight: 500 }} />
    </div>
  );
};
