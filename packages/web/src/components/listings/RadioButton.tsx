import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: 42,
    padding: "10px 6px",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 22 / 2,
    backgroundColor: "white",
    border: "1px solid black",
    boxSizing: "border-box",
  },
  selected: {
    border: "6px solid black",
  },
  label: {
    paddingLeft: 10,
    fontFamily: "poppins",
    fontSize: 17,
  },
})
interface Props {
  selected: boolean
  onChange(): void
  label: string
}

export const RadioButton = (props: Props) => {
  const styles = useStyles()
  return (
    <div className={styles.container} onClick={() => props.onChange()}>
      <div
        className={`${styles.radio} ${props.selected ? styles.selected : ""}`}
      ></div>
      <p className={styles.label}>{props.label}</p>
    </div>
  )
}
