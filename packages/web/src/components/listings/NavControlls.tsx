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
    if (props.listingArgs)
      save({ listingargs: { ...listing, ...props.listingArgs } });
    if (props.getValues) {
      save({ listingargs: { ...listing, ...props.getValues() } });
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
      {props.continueLink && (
        <Link
          to={props.continueLink}
          style={{ textDecoration: "none" }}
          className={styles.continuebtn}
        >
          <Button onClick={() => handleContinue()} title={"Continue"} />
        </Link>
      )}
      {props.last && (
        <Button
          style={{ marginLeft: "auto" }}
          onClick={() =>
            save({
              callback: () =>
                props.history.push("/become-a-host/" + listing?.id),
            })
          }
          title={"Finish"}
        />
      )}
    </div>
  );
});
