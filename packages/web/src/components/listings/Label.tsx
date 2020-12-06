import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  label: {
    fontFamily: "poppins",
    fontSize: 17,
    marginBottom: 10,
  },
  lblbold: {
    fontWeight: "500",
  },
})
interface Props {
  label: string
  bold?: boolean
  size?: number
  style?: React.CSSProperties | undefined
}

export const Label = (props: Props) => {
  const styles = useStyles()
  return (
    <p
      className={`${styles.label} ${props.bold ? styles.lblbold : ""}`}
      style={{ ...props.style, fontSize: props.size }}
    >
      {props.label}
    </p>
  )
}
