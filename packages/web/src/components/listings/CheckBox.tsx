import React from "react"
import { BiCheck } from "react-icons/bi"
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
  check: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: "white",
    border: "1px solid black",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    backgroundColor: "black",
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

export const CheckBox = (props: Props) => {
  const styles = useStyles()
  return (
    <div className={styles.container} onClick={() => props.onChange()}>
      <div
        className={`${styles.check} ${props.selected ? styles.selected : ""}`}
      >
        {props.selected && <BiCheck size={24} color={"white"} />}
      </div>
      <p className={styles.label}>{props.label}</p>
    </div>
  )
}
