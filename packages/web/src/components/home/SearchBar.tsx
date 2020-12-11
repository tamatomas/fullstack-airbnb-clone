import { Listing } from "@airbnb/common";
import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { createUseStyles } from "react-jss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useOutside } from "../../utils/helpers/useOutside";
import { useSearchStore } from "../../utils/store/searchstore";
import { ButtonWithGradient } from "../ButtonWithGradient";
import { GuestsInput } from "./GuestsInput";
import { LocationInput } from "./LocationInput";

const useStyles = createUseStyles({
  bar: {
    width: "100%",
    height: 60,
    borderRadius: 60 / 2,
    alignSelf: "center",
    position: "absolute",
    left: "50%",
    transition: "transform .1s ease",
    transform: "translate(-50%, 120%)",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },
  searchbtn: {
    display: "flex",
    heigth: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  fixed: {
    transform: "translate(-50%, 10%)",
    border: "1px solid #c3c3c3",
  },
});

interface Props extends RouteComponentProps {
  fixed?: boolean;
}

export const SearchBar = withRouter((props: Props) => {
  const styles = useStyles();
  const [focus, setFocus] = useState(false);
  const [searchArgs, setSearchArgs] = useState<Partial<Listing> | null>(null);
  const divref = useRef(null);
  useOutside(divref, () => setFocus(false));
  const setArgs = useSearchStore((state) => state.setArgs);
  const handleSearch = () => {
    setArgs({ ...searchArgs });
    props.history.push("/search");
  };

  return (
    <div
      style={{ position: "relative", width: "100%" }}
      onClick={() => setFocus(true)}
      ref={divref}
    >
      <div
        className={`${styles.bar} ${props.fixed ? styles.fixed : ""}`}
        style={{ backgroundColor: focus ? "#f7f7f7" : "white" }}
      >
        <LocationInput listing={searchArgs} onChange={setSearchArgs} />
        <GuestsInput listing={searchArgs} onChange={setSearchArgs} />
        <ButtonWithGradient
          onClick={() => handleSearch()}
          style={{
            width: focus ? "30%" : "46px",
            height: 42,
            margin: 6,
            marginLeft: "auto",
          }}
          contstyle={{ borderRadius: 42 / 2 }}
          child={
            <div className={styles.searchbtn}>
              <BiSearch size={24} />
              {focus && <p style={{ marginLeft: 10 }}>Search</p>}
            </div>
          }
        />
      </div>
    </div>
  );
});
