import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { BsHouse } from "react-icons/bs";
import { AccountMenu } from "../components/home/AccountMenu";
import { useIsAuth } from "../utils/helpers/useIsAuth";
import { USER_DATA } from "@airbnb/controller";
import { User } from "@airbnb/common";
import { useQuery } from "@apollo/client";
import { HeaderButton } from "../components";
import { SearchBar } from "../components/home/SearchBar";

const useStyles = createUseStyles({
  navbar: {
    position: "absolute",
    top: 0,
    width: "100%",
    justifyContent: "center",
    display: "flex",
    transition: "background-color .15s ease",
    zIndex: 1001,
  },
  fixednavbar: {
    backgroundColor: "white",
    position: "fixed",
    top: 0,
    borderBottom: "1px solid #d2d2d2",
  },
  view: {
    height: 500,
  },
  nav: {
    paddingRight: 40,
    width: "calc(46% - 40px)",
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
    paddingLeft: 48,
  },
  cvdtxt: {
    fontFamily: "poppins",
  },
});

interface Props {
  fixed?: boolean;
}

export const NavBar = (props: Props) => {
  const styles = useStyles();
  const [fixed, setFixed] = useState(props.fixed);
  const { data } = useQuery<{ data: User }>(USER_DATA);
  useIsAuth();
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 0) setFixed(true);
      else if (!props.fixed) setFixed(false);
    };
    window.addEventListener("scroll", scroll);
  }, [props.fixed]);
  return (
    <div className={`${styles.navbar} ${fixed ? styles.fixednavbar : ""}`}>
      <div className={styles.icon}>
        {<BsHouse size={24} style={{ cursor: "pointer" }} />}
      </div>
      <SearchBar fixed={fixed} />
      <div className={styles.nav}>
        {data?.data?.listings?.length && data?.data?.listings?.length > 1 ? (
          <HeaderButton
            label={"Switch to hosting"}
            to={"/hosting"}
            color={fixed ? "black" : "white"}
          />
        ) : (
          <HeaderButton
            label={"Become a host"}
            to={
              data?.data?.listings?.length && data?.data?.listings?.length > 0
                ? "/become-a-host/duplicate"
                : "/become-a-host"
            }
            color={fixed ? "black" : "white"}
          />
        )}
        <AccountMenu />
      </div>
    </div>
  );
};
