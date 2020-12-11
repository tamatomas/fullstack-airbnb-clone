import { ReactNode, useRef, useState } from "react";
import { createUseStyles } from "react-jss";
import { useOutside } from "../../utils/helpers/useOutside";

const useStyles = createUseStyles({
  btn: {
    width: "50%",
    minWidth: "30%",
    height: 60,
    borderRadius: 60 / 2,
    boxSizing: "border-box",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 20,
    "&:hover": {
      backgroundColor: "#ebebeb",
    },
  },
  btnlabel: {
    marginTop: 4,
    marginBottom: 2,
    fontFamily: "poppins",
    fontSize: 14,
    fontWeight: 500,
  },
  input: {
    fontFamily: "poppins",
    fontSize: 14,
    fontWeight: 500,
    backgroundColor: "transparent",
    border: 0,
    width: "90%",
    "&:focus": {
      outline: "none",
    },
  },
});

interface BtnProps {
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label?: string;
  active?: boolean;
  children?: ReactNode;
}

export const SearchBarBtn = (props: BtnProps) => {
  const styles = useStyles();
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  useOutside(ref, () => setActive(false), false);
  return (
    <div
      className={styles.btn}
      ref={ref}
      onClick={() => setActive(true)}
      style={active ? { backgroundColor: "white" } : {}}
    >
      <p className={styles.btnlabel}>{props.label}</p>
      <input {...props.inputProps} className={styles.input} />
      {active && props.children}
    </div>
  );
};
