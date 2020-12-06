import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  view: {
    display: "block",
    width: "100%",
  },
  container: {
    display: "flex",
    maxWidth: 912,
    margin: "0px auto",
  },
  formview: {
    position: "relative",
    boxSizing: "border-box",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    padding: "30px 30px 16px",
  },
})
interface Props {
  children: React.ReactNode
  style?: React.CSSProperties | undefined
  formstyle?: React.CSSProperties | undefined
}

export const Layout = (props: Props) => {
  const styles = useStyles()
  return (
    <div className={styles.view} style={props.style}>
      <div className={styles.container}>
        <div className={styles.formview} style={props.formstyle}>
          {props.children}
        </div>
      </div>
    </div>
  )
}
