import React, { useRef, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useOutside } from "../utils/helpers/useOutside";
import DatePicker from "react-datepicker";

const InputColor = { border: "#afafaf", label: "#717171" };

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    border: `1px solid ${InputColor.border}`,
    marginTop: 24,
  },
  containerFocus: {
    outline: "auto",
  },
  containerError: {
    borderColor: "#c13515",
  },
  lblcont: {
    position: "relative",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    display: "flex",
  },
  lbl: {
    marginTop: 16,
    marginLeft: 24,
    color: InputColor.label,
    fontSize: 16,
    fontFamily: "poppins",
    transitionProperty: "margin-top, margin-left, font-size",
    transitionDuration: "0.3s",
  },
  lblerrr: {
    color: "#c23718",
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
    top: -56,
    left: 0,
  },
  input: {
    border: "none transparent",
    color: "#222222",
    borderRadius: 16,
    fontSize: 17,
    fontFamily: "poppins",
    marginTop: 22,
    marginLeft: 16,
    transitionProperty: "opacity",
    transitionDuration: "0.3s",
    width: "90%",
    "&:focus": {
      outline: "none",
    },
  },
});

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: boolean;
  errmsg?: string;
  date?: boolean;
  onChange: (arg: any) => void;
}

export const DateInput = (props: Props) => {
  const styles = useStyles();
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(new Date());
  const inptRef = useRef(null);
  useEffect(() => {
    if (value) {
      props.onChange(value);
    }
  }, [value, props]);
  useOutside(inptRef, () => setFocused(false));
  const Input = ({ value, onClick }: { value?: any; onClick?: any }) => (
    <p
      className={styles.input}
      onClick={onClick}
      style={{ opacity: focused || value ? 1 : 0 }}
    >
      {value}
    </p>
  );
  return (
    <div
      className={`${styles.container} ${focused && styles.containerFocus} ${
        props.error && styles.containerError
      }`}
      onClick={() => setFocused(true)}
      ref={inptRef}
      style={{ outlineColor: props.error && focused ? "#c13515" : "" }}
    >
      <div className={styles.lblcont}>
        <div
          className={`${styles.lbl} ${(focused || value) && styles.visited} ${
            props.error && styles.lblerrr
          }`}
        >
          {props.label}
        </div>
      </div>
      <div className={styles.inptcontainer}>
        <DatePicker
          selected={value}
          onChange={(date) => setValue(date as Date)}
          customInput={<Input />}
        />
      </div>
    </div>
  );
};
