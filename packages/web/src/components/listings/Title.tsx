import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  title: {
    fontFamily: "poppins",
    fontSize: 22,
    fontWeight: 600,
    margin: 0,
    marginBottom: 10,
    color: "#4c4c4c",
  },
  subtitle: {
    fontFamily: "poppins",
    fontSize: 19,
    margin: 0,
    marginBottom: 10,
    color: "#949494",
  },
})
interface Props {
  title: string
  subtitle?: string
}

export const Title = (props: Props) => {
  const styles = useStyles()
  return (
    <div>
      <p className={styles.title}>{props.title}</p>
      {props.subtitle && <p>{props.subtitle}</p>}
    </div>
  )
}
