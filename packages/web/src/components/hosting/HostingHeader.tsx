import { Header } from "../Header";
import React from "react";
import { createUseStyles } from "react-jss";
import { BsHouse } from "react-icons/bs";
import { Button } from "../../components";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  btn: {
    height: "100%",
    boxSizing: "border-box",
    fontFamily: "poppins",
    fontSize: 15,
    textDecoration: "none",
    fontWeight: 500,
    color: "#484848",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0px 20px",
    "&:hover": {
      borderTop: "3px solid transparent",
      borderBottom: "3px solid #008489",
    },
  },
});
interface Props {}

export const HostingHeader = (props: Props) => {
  const styles = useStyles();

  return (
    <Header>
      <BsHouse size={32} />
      <Link className={styles.btn} to={"/hosting"}>
        Home
      </Link>
      <Link to="/hosting/listings" className={styles.btn}>
        Listings
      </Link>
      <Link
        to="/become-a-host"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Button
          title={"Create new listing"}
          style={{
            marginLeft: "auto",
            fontWeight: 400,
            width: 180,
          }}
        />
      </Link>
    </Header>
  );
};
