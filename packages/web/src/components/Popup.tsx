import React from "react";
import { createUseStyles } from "react-jss";

interface Props {
  onHide(): void;
  children: JSX.Element;
  style?: string;
}

const useStyles = createUseStyles({
  screen: {
    position: "fixed",
    width: "100%",
    height: "calc(100vh - 80px)",
    zIndex: 1000,
    top: 0,
    left: 0,
    backgroundColor: "#4242427a",
    padding: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export const Popup = (props: Props) => {
  const styles = useStyles();
  const stopProp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  return (
    <div className={styles.screen} onClick={() => props.onHide()}>
      <div className={`${styles.container} ${props.style}`} onClick={stopProp}>
        {props.children}
      </div>{" "}
    </div>
  );
};
