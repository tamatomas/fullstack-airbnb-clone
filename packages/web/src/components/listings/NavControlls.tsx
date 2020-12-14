import { Button } from "../Button";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import React from "react";
import { createUseStyles } from "react-jss";
import { IoIosArrowBack } from "react-icons/io";
import { Listing } from "@airbnb/common";
import { useSaveListing } from "../../utils/helpers/useSaveListing";

const useStyles = createUseStyles({
  container: {
    width: "100%",
    display: "flex",
    borderTop: "1px solid #ebebeb",
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  backbtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 52,
  },
  icon: {
    color: "#008489",
  },
  backtxt: {
    color: "#008489",
    fontFamily: "poppins",
    fontSize: 16,
    fontWeight: 500,
    textDecoration: "none",
  },
  continuebtn: {
    marginLeft: "auto",
    height: 52,
  },
});

interface Props extends RouteComponentProps {
  backLink?: string;
  continueLink?: string;
  listingArgs?: Partial<Listing>;
  getValues?(): Partial<Listing>;
  last?: boolean;
}

export const NavControlls = withRouter((props: Props) => {
  const styles = useStyles();
  const { save, listing } = useSaveListing();
  const handleContinue = () => {
    if (props.listingArgs && props.continueLink)
      save({
        callback: () => props.history.push(props.continueLink!),
        listingargs: { ...listing, ...props.listingArgs },
      });
    if (props.getValues && props.continueLink) {
      save({
        callback: () => props.history.push(props.continueLink!),
        listingargs: { ...listing, ...props.getValues() },
      });
    }
    if (props.last) {
      save({
        callback: () => props.history.push("/become-a-host/" + listing?.id),
        listingargs: { ...listing, ...props.getValues!() },
      });
    }
  };
  return (
    <div className={styles.container}>
      {props.backLink && (
        <Link to={props.backLink} style={{ textDecoration: "none" }}>
          <div className={styles.backbtn}>
            <IoIosArrowBack className={styles.icon} size={24} />
            <p className={styles.backtxt}>{"Back"}</p>
          </div>
        </Link>
      )}
      {(props.last || props.continueLink) && (
        <Button
          style={{ marginLeft: "auto" }}
          onClick={() => handleContinue()}
          title={props.last ? "Finish" : "Continue"}
        />
      )}
    </div>
  );
});
