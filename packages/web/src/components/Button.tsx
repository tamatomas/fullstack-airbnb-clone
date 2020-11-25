import React, { RefObject, useEffect, useRef, useState } from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  btnContainer: {
    width: "100%",
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginTop: 24,
  },
  btn: {
    width: "100%",
    position: "relative",
    height: "100%",
    transitionProperty: "transform",
    transitionDuration: "0.3s",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontFamily: "poppins",
    fontSize: 18,
    overflow: "hidden",
    background:
      "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)",
  },
  mousedown: {
    transform: "scale(0.96)",
  },
  btnspan: {
    display: "block",
    width: "100%",
    height: "100%",
    backgroundImage:
      "radial-gradient(circle at center center, rgb(255, 56, 92) 0%, rgb(230, 30, 77) 27.5%, rgb(227, 28, 95) 40%, rgb(215, 4, 102) 57.5%, rgb(189, 30, 89) 75%, rgb(189, 30, 89) 100%) ",
    opacity: 0,
    transition: "opacity 1.25s ease 0s",
    backgroundSize: "200% 200%",
    "&:hover": {
      opacity: 1,
    },
  },
  radientcontainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  title: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50% ,-50%)",
    margin: 0,
    pointerEvents: "none",
  },
})

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string
}

const mousePositionPercent = (ref: RefObject<HTMLSpanElement>) => {
  const [mousePosition, setMousePosition] = useState<{
    x: null | number
    y: null | number
  }>({ x: null, y: null })
  const [positionPercent, setPositionPercent] = useState<{
    x: null | number
    y: null | number
  }>({ x: null, y: null })
  const mouseMove = (ev: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setMousePosition({ x: ev.nativeEvent.offsetX, y: ev.nativeEvent.offsetY })
  }
  useEffect(() => {
    setPositionPercent({
      x: (mousePosition.x! / ref.current!.offsetWidth) * 100,
      y: (mousePosition.x! / ref.current!.offsetHeight) * 100,
    })
  }, [mousePosition])
  return { x: positionPercent.x, y: positionPercent.y, mouseMove }
}

export const Button = (props: Props) => {
  const styles = useStyles()
  const [mouseDown, setMouseDown] = useState(false)
  const spanRef = useRef<HTMLSpanElement>(null)
  const { x, y, mouseMove } = mousePositionPercent(spanRef)
  return (
    <div
      {...props}
      className={styles.btnContainer}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
    >
      <div className={`${styles.btn} ${mouseDown && styles.mousedown}`}>
        <span className={styles.radientcontainer}>
          <span
            className={styles.btnspan}
            onMouseMove={mouseMove}
            ref={spanRef}
            style={
              {
                backgroundPosition:
                  "calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)",
                "--mouse-x": x,
                "--mouse-y": y,
              } as any
            }
          ></span>
        </span>
        <div className={styles.title}>{props.title}</div>
      </div>
    </div>
  )
}
