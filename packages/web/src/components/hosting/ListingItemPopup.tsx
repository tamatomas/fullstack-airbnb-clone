import React, { useRef } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { useOutside } from "../../utils/helpers/useOutside";

const useStyles = createUseStyles({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 180,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    zIndex: 1001,
    boxShadow: "0px 0px 7px 0px rgba(50, 50, 50, 0.75)",
  },
  relative: {
    position: "relative",
  },
  item: {
    width: "calc(100% - 16px)",
    height: 36,
    fontFamily: "poppins",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 16,
    fontWeight: 400,
    cursor: "pointer",
    color: "#787878",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
  },
});

interface Props {
  show: boolean;
  hide(): void;
  id?: string;
}

export const ListingItemPopup = (props: Props) => {
  const styles = useStyles();
  const contRef = useRef(null);
  useOutside(contRef, props.hide);
  return (
    <div className={styles.relative} ref={contRef}>
      {props.show && (
        <div className={styles.container}>
          <Link
            to={"/become-a-host/" + props.id}
            className={styles.item}
            onClick={() => props.hide()}
          >
            Edit
          </Link>
          <Link
            to={"/become-a-host/delete/" + props.id}
            className={styles.item}
            onClick={() => props.hide()}
          >
            Deactivate
          </Link>
        </div>
      )}
    </div>
  );
};
