import React from "react";
import { createUseStyles } from "react-jss";
import { User } from "@airbnb/common";
import { USER_DATA } from "@airbnb/controller";
import { useQuery } from "@apollo/client";
import { HostingHeader, Layout } from "../../components";

const useStyles = createUseStyles({
  view: {
    width: 385,
    maxWidth: "50%",
    paddingTop: 40,
    paddingBottom: 40,
    marginLeft: "10%",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontFamily: "poppins",
    fontSize: 29,
  },
  subtitle: {
    fontFamily: "poppins",
    fontSize: 23,
    margin: 0,
  },
  selectCont: {
    width: "100%",
    display: "flex",
  },
});

interface Props {}

export const Hosting = (props: Props) => {
  const { data } = useQuery<{ data: User }>(USER_DATA);
  const styles = useStyles();

  return (
    <React.Fragment>
      <HostingHeader />
      <Layout>
        <p className={styles.title}>Dashboard</p>
      </Layout>
    </React.Fragment>
  );
};
