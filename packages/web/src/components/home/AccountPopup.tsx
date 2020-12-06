import React from "react";
import { Popup } from "../Popup";
import { createUseStyles } from "react-jss";
import { GrClose } from "react-icons/gr";
import { LoginForm, SignupForm } from "../auth";

const useStyles = createUseStyles({
  btn: {
    border: "1px solid #DDDDDD",
    backgroundColor: "#fff",
    width: 77,
    height: 42,
    borderRadius: 42 / 2,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },
  layer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: 10,
    left: -180,
    borderRadius: 24,
    backgroundColor: "#fff",
    overflow: "hidden",
    paddingTop: 8,
    paddingBottom: 8,
  },
  menubtn: {
    display: "flex",
    justifyContent: "flex-start",
    cursor: "pointer",
    alignItems: "center",
    paddingLeft: 20,
    width: 240,
    height: 48,
    fontFamily: "poppins",
    fontSize: 16,
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#F4F4F4",
    },
  },
  popupContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 568,
    width: "100%",
    position: "relative",
    backgroundColor: "#fefefe",
  },
  titleView: {
    display: "flex",
    width: "100%",
    minHeight: 64,
    borderBottom: "1px solid #eaeaea",
  },
  titleText: {
    margin: "auto",
    fontFamily: "poppins",
    fontWeight: 500,
    fontSize: 19,
  },
  titleIcon: {
    position: "absolute",
    left: 20,
    top: 24,
    cursor: "pointer",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 24,
    overflow: "scroll",
  },
});
interface Props {
  setShowPopup: (show: boolean) => void;
  title: string;
  signup: boolean;
  login: boolean;
}

export const AccountPopup = (props: Props) => {
  const styles = useStyles();
  return (
    <Popup
      onHide={() => props.setShowPopup(false)}
      style={styles.popupContainer}
    >
      <React.Fragment>
        <div className={styles.titleView}>
          <GrClose
            size={16}
            className={styles.titleIcon}
            onClick={() => props.setShowPopup(false)}
          />
          <p className={styles.titleText}>{props.title}</p>
        </div>
        <div className={styles.formContainer}>
          {props.signup && <SignupForm />}
          {props.login && <LoginForm />}
        </div>
      </React.Fragment>
    </Popup>
  );
};
