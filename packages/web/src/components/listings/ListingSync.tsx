import { createUseStyles } from "react-jss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useSaveListing } from "../../utils/helpers/useSaveListing";

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
  const { save, listing } = useSaveListing();

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
