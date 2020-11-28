import React, { useRef, useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { FcMenu } from "react-icons/fc"
import { createUseStyles } from "react-jss"
import { useOutsideWState } from "../utils/helpers/useOutsideWState"
import { Popup } from "./Popup"
//import { LoginForm } from "./auth/LoginForm"
//import { SignupForm } from "./auth/SignupForm"
//import { GrClose } from "react-icons/gr"

interface Props {}

const useStyles = createUseStyles({
  btn: {
    border: "1px solid #DDDDDD",
    backgroundColor: "#fff",
    width: 77,
    height: 42,
    borderRadius: 42 / 2,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },
  layer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: 10,
    left: -180,
    borderRadius: 24,
    backgroundColor: "#fff",
    overflow: "hidden",
    paddingTop: 8,
    paddingBottom: 8,
  },
  menubtn: {
    display: "flex",
    justifyContent: "flex-start",
    cursor: "pointer",
    alignItems: "center",
    paddingLeft: 20,
    width: 240,
    height: 48,
    fontFamily: "poppins",
    fontSize: 16,
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#F4F4F4",
    },
  },
  popupContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 568,
    width: "100%",
    position: "relative",
    backgroundColor: "#fefefe",
  },
  titleView: {
    display: "flex",
    width: "100%",
    minHeight: 64,
    borderBottom: "1px solid #eaeaea",
  },
  titleText: {
    margin: "auto",
    fontFamily: "poppins",
    fontWeight: 500,
    fontSize: 19,
  },
  titleIcon: {
    position: "absolute",
    left: 20,
    top: 24,
    cursor: "pointer",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 24,
    overflow: "scroll",
  },
})

export const AccountMenu = (props: Props) => {
  const styles = useStyles()
  const [showPopup, setShowPopup] = useState(true)
  const [login, setLogin] = useState(true)
  const [signup, setSignup] = useState(true)
  const [title, setTitle] = useState("")
  const authBtn = useRef(null)
  const { active: authBtnShow, setActive } = useOutsideWState(authBtn)

  const handleSignup = () => {
    setActive(false)
    setShowPopup(true)
    setSignup(true)
    setLogin(false)
    setTitle("Sign up")
  }

  const handleLogin = () => {
    setActive(false)
    setShowPopup(true)
    setSignup(false)
    setLogin(true)
    setTitle("Log in")
  }
  return (
    <React.Fragment>
      <div ref={authBtn}>
        <div className={styles.btn}>
          <FcMenu size={16} />
          <FaUserCircle size={30} style={{ marginLeft: 10 }} />
        </div>
        {authBtnShow && (
          <div style={{ position: "relative" }}>
            <div className={styles.layer}>
              <div className={styles.menubtn} onClick={() => handleLogin()}>
                Log in
              </div>
              <div className={styles.menubtn} onClick={() => handleSignup()}>
                Sign up
              </div>
            </div>
          </div>
        )}
      </div>
      {showPopup && (
        <Popup onHide={() => setShowPopup(false)} style={styles.popupContainer}>
          {/*<React.Fragment>
            <div className={styles.titleView}>
              <GrClose
                size={16}
                className={styles.titleIcon}
                onClick={() => setShowPopup(false)}
              />
              <p className={styles.titleText}>{title}</p>
            </div>
            <div className={styles.formContainer}>
              {signup && <SignupForm />}
              {login && <LoginForm />}
            </div>
          </React.Fragment>*/}
        </Popup>
      )}
    </React.Fragment>
  )
}
