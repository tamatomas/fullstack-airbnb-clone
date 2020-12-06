import React, { useRef, useState } from "react";
import { createUseStyles } from "react-jss";
import { useOutside } from "../../utils/helpers/useOutside";
import { FiAlertCircle } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";

const InputColor = { border: "#afafaf", label: "#717171" };

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    border: `1px solid ${InputColor.border}`,
  },
  containerFocus: {
    outline: "auto",
  },
  containerError: {
    borderColor: "#c13515",
  },
  passwordHide: {
    cursor: "pointer",
    textDecoration: "underline",
    marginRight: 10,
    fontFamily: "poppins",
    fontSize: 14,
  },
  visited: {
    marginTop: 4,
    marginLeft: 18,
    fontSize: 13,
  },
  inptcontainer: {
    position: "relative",
    width: "calc(100% - 32px)",
    height: "calc(100% - 32px)",
    left: 0,
    display: "flex",
    alignItems: "center",
    padding: 16,
    cursor: "pointer",
  },
  input: {
    border: "none transparent",
    color: "#222222",
    borderRadius: 16,
    fontSize: 17,
    fontFamily: "poppins",
    marginLeft: 16,
    transitionProperty: "opacity",
    transitionDuration: "0.3s",
    width: "90%",
    "&:focus": {
      outline: "none",
    },
  },
  errMsg: {
    fontFamily: "poppins",
    fontSize: 14,
    color: "#c33c1d",
    margin: 0,
    marginLeft: 6,
  },
  errContainer: {
    width: "100%",
    marginTop: 8,
    paddingLeft: 10,
    display: "flex",
    alignItems: "center",
  },
  dropdownicon: {
    marginLeft: "auto",
  },
  defvalue: {
    fontFamily: "poppins",
    fontSize: 16,
    margin: 0,
  },
  listcont: {
    backgroundColor: "#fafafa",
    position: "relative",
    width: "100%",
    top: 8,
    left: 0,
    borderRadius: 4,
    boxShadow: "0px 0px 4px 0px #000000",
    display: "flex",
    zIndex: 1000,
    maxHeight: "30vh",
    overflow: "scroll",
  },
  list: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  listitem: {
    width: "100%",
    height: 40,
    display: "flex",
    alignItems: "center",
    fontFamily: "poppins",
    fontSize: 16,
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
  labelcont: {
    position: "relative",
  },
  label: {
    fontFamily: "poppins",
    fontSize: 16,
    fontWeight: 500,
    margin: 0,
    position: "absolute",
    top: -30,
  },
});

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: boolean;
  errmsg?: string;
  data: any[];
  contStyle?: React.CSSProperties;
  selected: number;
  setSelected: (select: number) => void;
}

export const Select = (props: Props) => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const inptRef = useRef(null);
  useOutside(inptRef, () => setOpen(false));
  return (
    <React.Fragment>
      <div
        className={`${styles.container} ${
          props.error && styles.containerError
        }`}
        onClick={() => setOpen(!open)}
        ref={inptRef}
        style={{
          ...props.contStyle,
          outlineColor: props.error && open ? "#c13515" : "",
          marginTop: props.label ? 50 : 24,
        }}
      >
        {props.label && (
          <div className={styles.labelcont}>
            <p className={styles.label}>{props.label}</p>
          </div>
        )}
        <div className={styles.inptcontainer}>
          <p className={styles.defvalue}>{props.data[props.selected]}</p>
          <AiOutlineDown className={styles.dropdownicon} size={20} />
        </div>
        {open && (
          <div className={styles.listcont}>
            <div className={styles.list}>
              {props.data.map((item, index) => (
                <div
                  className={styles.listitem}
                  onClick={() => props.setSelected(index)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {props.errmsg && (
        <div className={styles.errContainer}>
          <FiAlertCircle size={16} style={{ color: "#c33c1d" }} />
          <p className={styles.errMsg}>{props.errmsg}</p>
        </div>
      )}
    </React.Fragment>
  );
};
