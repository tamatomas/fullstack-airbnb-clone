import React from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  container: {
    width: "100%",
    display: "flex",
    padding: "10px 6px",
    alignItems: "center",
    height: 52,
  },
  label: {
    fontFamily: "poppins",
    fontSize: 17,
    marginRight: "auto",
  },
  roundbtn: {
    height: 32,
    width: 32,
    borderRadius: 32 / 2,
    border: "1px solid #008489",
    color: "#008489",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    cursor: "pointer",
  },
  count: {
    margin: "6px 12px",
    fontFamily: "poppins",
    fontSize: 17,
    fontWeight: 500,
    width: 40,
    textAlign: "center",
  },
  disabledbtn: {
    borderColor: "#0084894d",
    color: "#0084894d",
  },
})
interface Props {
  label: string
  count: number
  onChange: (count: number) => void
  max?: number
  min?: number
}

export const InlineCounter = (props: Props) => {
  const styles = useStyles()
  const handleAdd = () => {
    if (props.max) {
      if (props.count < props.max) props.onChange(props.count + 1)
    } else props.onChange(props.count + 1)
  }
  const handleSubstract = () => {
    if (props.min) {
      if (props.count > 1) props.onChange(props.count - 1)
    } else props.onChange(props.count - 1)
  }
  return (
    <div className={styles.container}>
      <p className={styles.label}>{props.label}</p>
      <div
        onClick={handleSubstract}
        className={`${styles.roundbtn} ${
          props.min && props.count <= props.min ? styles.disabledbtn : ""
        }`}
      >
        <AiOutlineMinus size={16} />
      </div>
      <div className={styles.count}>{props.count}</div>
      <div
        onClick={handleAdd}
        className={`${styles.roundbtn} ${
          props.max && props.count >= props.max ? styles.disabledbtn : ""
        }`}
      >
        <AiOutlinePlus size={16} />
      </div>
    </div>
  )
}
