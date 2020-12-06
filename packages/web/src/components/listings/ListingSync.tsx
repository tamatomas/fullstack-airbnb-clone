import { UPDATE, CREATE } from "@airbnb/controller";
import { useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useListingStore } from "../../utils/store/listingstore";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Listing } from "@airbnb/common";
import { useSync } from "../../utils/helpers/useSync";

const useStyles = createUseStyles({
  container: {
    height: "100%",
    padding: "6px 0px",
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: 10,
  },
  savelabel: {
    fontFamily: "poppins",
    fontSize: 18,
  },
  savenexitbtn: {
    cursor: "pointer",
  },
  savenexit: {
    fontFamily: "poppins",
    fontSize: 18,
    color: "#008489",
  },
});
interface Props extends RouteComponentProps {}

export const ListingSync = withRouter((props: Props) => {
  const styles = useStyles();
  const { save, listing } = useSync();
  const handleSave = () => {
    save()
      .then(() => props.history.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      {listing?.id && <p className={styles.savelabel}>{"Saved"}</p>}
      <div className={styles.savenexitbtn} onClick={() => handleSave()}>
        <p className={styles.savenexit}>Save and exit</p>
      </div>
    </div>
  );
});
