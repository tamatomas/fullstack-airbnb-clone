import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  button: {
    width: 120,
    height: 42,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#008489",
    borderRadius: 6,
    color: "white",
    transitionProperty: "background, border-color, color",
    transitionDuration: "0.2s",
    transitionTimingFunction: "ease-out",
    fontFamily: "poppins",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    "&:active": {
      backgroundColor: "#006a70",
    },
  },
})
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Button = (props: Props) => {
  const styles = useStyles()
  return (
    <div {...props} className={`${styles.button} ${props.className}`}>
      {props.title}
    </div>
  )
}
