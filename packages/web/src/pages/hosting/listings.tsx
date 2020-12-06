import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Listing } from "@airbnb/common";
import { USER_LISTINGS } from "@airbnb/controller";
import { useQuery } from "@apollo/client";
import { Button } from "../../components/Button";
import { HostingHeader, ListingItemPopup } from "../../components";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";

const useStyles = createUseStyles({
  "@global": {
    "th, td": {
      borderBottom: "1px solid #f2f2f2",
    },
  },
  container: {
    width: "calc(100% - 48px)",
    padding: "8px 24px",
    display: "flex",
    flexDirection: "column",
  },
  table: {
    display: "table",
    borderCollapse: "separate",
    borderSpacing: "2px",
    borderColor: "gray",
    wdith: "100%",
  },
  topinfo: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  toplabel: {
    fontFamily: "poppins",
    fontSize: 21,
    fontWeight: 600,
    color: "#484848",
    marginLeft: 24,
  },
  columnTitle: {
    fontFamily: "poppins",
    fontSize: 16,
    fontWeight: 400,
    color: "#484848",
  },
  txtAlingStart: {
    textAlign: "start",
  },
  item: {},
  infotxt: {
    fontFamily: "poppins",
    fontSize: 16,
    fontWeight: 400,
  },
  morebtn: {
    width: 32,
    height: 32,
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    cursor: "pointer",
    "&:hover": {
      backroundColor: "#f2f2f2",
    },
  },
});

interface Props {}

interface itemProps extends Partial<Listing> {
  finished?: boolean;
}

export const Listings = (props: Props) => {
  const styles = useStyles();
  const { data } = useQuery<{ data: Listing[] }>(USER_LISTINGS);
  return (
    <React.Fragment>
      <HostingHeader />
      <div className={styles.container}>
        <div className={styles.topinfo}>
          <p className={styles.toplabel}>{"2 Listings"}</p>
        </div>
        <table className={styles.table} cellSpacing={0}>
          <tr>
            <th
              className={`${styles.columnTitle} ${styles.txtAlingStart}`}
              style={{ width: "30%" }}
            >
              Listing
            </th>
            <th className={styles.columnTitle}>To do</th>
            <th className={styles.columnTitle}>Bedrooms</th>
            <th className={styles.columnTitle}>Beds</th>
            <th className={`${styles.columnTitle} ${styles.txtAlingStart}`}>
              Location
            </th>
            <th style={{ width: 64 }}>
              <div>
                <AiOutlineSetting />
              </div>
            </th>
          </tr>
          {data?.data.map((listing) => (
            <ListingItem
              {...listing}
              finished={Object.entries(listing)
                .map(([_, v]) => v)
                .find((e) => e === null)}
            />
          ))}
        </table>
      </div>
    </React.Fragment>
  );
};

const ListingItem = (props: itemProps) => {
  const styles = useStyles();
  const [show, setShow] = useState(false);
  return (
    <tr>
      <td>
        <p className={styles.infotxt}>{props.title}</p>
      </td>
      <td>
        {!props.finished && (
          <Button
            title={"Finish"}
            style={{
              margin: "0px auto",
              fontWeight: 400,
              backgroundColor: "white",
              border: "1px solid #008489",
              color: "#008489",
              width: 70,
              height: 32,
            }}
          />
        )}
      </td>
      <td style={{ textAlign: "center" }}>
        <p className={styles.infotxt}>{props.bedrooms}</p>
      </td>
      <td style={{ textAlign: "center" }}>
        <p className={styles.infotxt}>{props.beds}</p>
      </td>
      <td style={{ width: "10%" }}>
        <p className={styles.infotxt}>{`${props.city}, ${props.country}`}</p>
      </td>
      <td style={{ textAlign: "center" }}>
        <div className={styles.morebtn} onClick={() => setShow(true)}>
          <FiMoreHorizontal color={"#767676"} size={18} />
        </div>
        <ListingItemPopup show={show} hide={() => setShow(false)} />
      </td>
    </tr>
  );
};
