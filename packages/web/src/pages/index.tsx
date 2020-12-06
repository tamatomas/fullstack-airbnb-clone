import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { BsHouse } from "react-icons/bs";
import { AccountMenu } from "../components/home/AccountMenu";
import { useIsAuth } from "../utils/helpers/useIsAuth";
import { USER_DATA } from "@airbnb/controller";
import { User } from "@airbnb/common";
import { useQuery } from "@apollo/client";
import { HeaderButton } from "../components";

const MSG_HEIGHT = 50;

const useStyles = createUseStyles({
  msg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: MSG_HEIGHT,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  navbar: {
    position: "absolute",
    top: MSG_HEIGHT,
    width: "100%",
    justifyContent: "center",
    display: "flex",
  },
  fixednavbar: {
    backgroundColor: "white",
    position: "fixed",
    top: 0,
  },
  view: {
    height: 500,
  },
  nav: {
    width: "46%",
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    width: "46%",
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cvdtxt: {
    fontFamily: "poppins",
  },
});

export const Main = () => {
  const styles = useStyles();
  const [fixed, setFixed] = useState(false);
  const { data } = useQuery<{ data: User }>(USER_DATA);
  const scroll = () => {
    if (window.scrollY > MSG_HEIGHT) setFixed(true);
    else setFixed(false);
  };
  useIsAuth();
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, []);
  return (
    <div className={styles.background}>
      <div className={styles.msg}>
        <p className={styles.cvdtxt}>Get the latest on our Covid-19 response</p>
      </div>
      <img className={styles.img} src={"./airbnbphoto.webp"} alt={"bckg"} />
      <div className={`${styles.navbar} ${fixed ? styles.fixednavbar : ""}`}>
        <div className={styles.icon}>{<BsHouse />}</div>
        <div className={styles.nav}>
          {data?.data?.listings?.length && data?.data?.listings?.length > 1 ? (
            <HeaderButton label={"Switch to hosting"} to={"/hosting"} />
          ) : (
            <HeaderButton label={"Become a host"} to={"/become-a-host"} />
          )}
          <AccountMenu />
        </div>
      </div>
      <div className={styles.view}></div>
    </div>
  );
};
