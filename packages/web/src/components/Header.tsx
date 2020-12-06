import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  header: {
    width: "calc(100% - 40px)",
    height: 64,
    display: "flex",
    alignItems: "center",
    padding: "0px 20px",
  },
})

interface Props {
  children: React.ReactNode
}

export const Header = (props: Props) => {
  const styles = useStyles()
  return <div className={styles.header}>{props.children}</div>
}
