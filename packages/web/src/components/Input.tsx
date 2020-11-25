import React, { useRef, useState } from "react"
import { createUseStyles } from "react-jss"
import { useOutside } from "../utils/helpers/useOutside"
import { FiAlertCircle } from "react-icons/fi"
const InputColor = { border: "#afafaf", label: "#717171" }

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
    top: -56,
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
    marginTop: 22,
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
})

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
  error?: boolean
  errmsg?: string
  date?: boolean
  pswd?: boolean
}

export const Input = (props: Props) => {
  const styles = useStyles()
  const [focused, setFocused] = useState(false)
  const [pswd, showPswd] = useState(true)
  const inptRef = useRef(null)
  useOutside(inptRef, () => setFocused(false))
  return (
    <React.Fragment>
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
            className={`${styles.lbl} ${
              (focused || props.value) && styles.visited
            } ${props.error && styles.lblerrr}`}
          >
            {props.label}
          </div>
        </div>
        <div className={styles.inptcontainer}>
          <input
            {...props}
            className={styles.input}
            style={{ opacity: focused || props.value ? 1 : 0 }}
            type={pswd && props.pswd ? "password" : "text"}
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
  )
}
