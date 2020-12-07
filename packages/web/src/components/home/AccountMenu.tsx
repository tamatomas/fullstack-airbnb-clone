import React, { useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { createUseStyles } from "react-jss";
import { useOutsideWState } from "../../utils/helpers/useOutsideWState";
import { AccountPopup } from "./AccountPopup";
import { useQuery } from "@apollo/client";
import { User } from "@airbnb/common";
import { USER_DATA } from "@airbnb/controller";
import { Link } from "react-router-dom";

interface Props {}

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

const AuthMenuItems = () => {
  const styles = useStyles();
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.layer}>
        <Link
          to="/hosting/listings"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className={styles.menubtn}>Manage listings</div>
        </Link>
        <Link to="/account" style={{ color: "black", textDecoration: "none" }}>
          <div className={styles.menubtn}>Account</div>
        </Link>
      </div>
    </div>
  );
};

const NotAuthMenuItems = ({
  handleLogin,
  handleSignup,
}: {
  handleLogin(): void;
  handleSignup(): void;
}) => {
  const styles = useStyles();
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.layer}>
        <div className={styles.menubtn} onClick={() => handleLogin()}>
          Log in
        </div>
        <div className={styles.menubtn} onClick={() => handleSignup()}>
          Sign up
        </div>
      </div>
    </div>
  );
};

export const AccountMenu = (props: Props) => {
  const styles = useStyles();
  const { data } = useQuery<{ data: User }>(USER_DATA);
  const [showPopup, setShowPopup] = useState(false);
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(true);
  const [title, setTitle] = useState("");
  const authBtn = useRef(null);
  const { active: authBtnShow, setActive } = useOutsideWState(authBtn);

  const handleSignup = () => {
    setActive(false);
    setShowPopup(true);
    setSignup(true);
    setLogin(false);
    setTitle("Sign up");
  };

  const handleLogin = () => {
    setActive(false);
    setShowPopup(true);
    setSignup(false);
    setLogin(true);
    setTitle("Log in");
  };
  return (
    <React.Fragment>
      <div ref={authBtn}>
        <div className={styles.btn}>
          <FcMenu size={16} />
          <FaUserCircle size={30} style={{ marginLeft: 10 }} />
        </div>
        {authBtnShow &&
          (data?.data.id ? (
            <AuthMenuItems />
          ) : (
            <NotAuthMenuItems
              handleLogin={handleLogin}
              handleSignup={handleSignup}
            />
          ))}
      </div>
      {showPopup && (
        <AccountPopup
          setShowPopup={setShowPopup}
          title={title}
          signup={signup}
          login={login}
        />
      )}
    </React.Fragment>
  );
};
