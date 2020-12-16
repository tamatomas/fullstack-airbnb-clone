import React, { useRef, useState } from "react";
import { createUseStyles } from "react-jss";
import { useOutside } from "../../utils/helpers/useOutside";
import { FiAlertCircle } from "react-icons/fi";
const InputColor = { border: "#afafaf", label: "#717171" };

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    marginTop: 24,
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
    width: "100%",
    height: "100%",
    left: 0,
    display: "flex",
    alignItems: "center",
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
  labelcont: {
    position: "relative",
  },
  label: {
    fontFamily: "poppins",
    fontSize: 16,
    margin: 0,
    position: "absolute",
    top: -30,
    color: "#484848",
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
  date?: boolean;
  pswd?: boolean;
  contStyle?: React.CSSProperties;
}

export const InputSimple = (props: Props) => {
  const styles = useStyles();
  const [focused, setFocused] = useState(false);
  const [pswd, showPswd] = useState(true);
  const inptRef = useRef(null);
  useOutside(inptRef, () => setFocused(false));
  return (
    <React.Fragment>
      <div
        className={`${styles.container} ${focused && styles.containerFocus} ${
          props.error && styles.containerError
        }`}
        onClick={() => setFocused(true)}
        ref={inptRef}
        style={{
          ...props.contStyle,
          outlineColor: props.error && focused ? "#c13515" : "",
          marginTop: props.label ? 50 : 24,
        }}
      >
        {props.label && (
          <div className={styles.labelcont}>
            <p className={styles.label}>{props.label}</p>
          </div>
        )}
        <div className={styles.inptcontainer}>
          <input
            {...props}
            type={!props.type && pswd && props.pswd ? "password" : "text"}
            className={styles.input}
            style={{ opacity: focused || props.value ? 1 : 0 }}
          />
          {props.pswd && (
            <p className={styles.passwordHide} onClick={() => showPswd(!pswd)}>
              {!pswd ? "hide" : "show"}
            </p>
          )}
        </div>
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
