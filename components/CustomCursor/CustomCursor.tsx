import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import styles from "./CustomCursor.module.scss"

const icons = [
  {
    iconClass: "fa-facebook-f",
    cursorStyle: "fb"
  },
  {
    iconClass: "fa-instagram",
    cursorStyle: "insta"
  },
  {
    iconClass: "fa-twitter",
    cursorStyle: "twitter"
  }
]
const CustomCursor = () => {
  //if user is hovering an icon, cursor locks at it
  const [hoveringIcon, setHoveringIcon] = useState("")

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [[rotateX, rotateY, scaleX, scaleY], setMovementAnimation] = useState([
    0, 0, 1, 1
  ])
  const containerRef = useRef(null)
  const iconRefs = useRef(new Array())

  const onMouseMove = (e: any) => {
    if (hoveringIcon) return
    const { left, top } = containerRef.current.getBoundingClientRect()
    const newX = e.clientX - left
    const newY = e.clientY - top
    const absDeltaX = Math.abs(mousePosition.x - newX)
    const absDeltaY = Math.abs(mousePosition.y - newY)
    setMovementAnimation([
      absDeltaX * 0.5,
      absDeltaY * 0.5,
      1 - absDeltaY * 0.005,
      1 - absDeltaX * 0.005
    ])
    setMousePosition({ x: newX, y: newY })
  }

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const hoverIcon = (
    iconRef: { getBoundingClientRect: () => { left: any; top: any } },
    cursorStyle: React.SetStateAction<string>
  ) => {
    const { left, top } = iconRef.getBoundingClientRect()
    const { left: leftContainer, top: topContainer } =
      containerRef.current.getBoundingClientRect()
    setHoveringIcon(cursorStyle)

    setMousePosition({
      x: left - leftContainer + 24,
      y: top - topContainer + 24
    })
  }
  return (
    <div
      className={styles.custom_cursor}
      ref={containerRef}
      onMouseMove={onMouseMove}
    >
      <motion.div
        className={`${styles.cursor} ${
          hoveringIcon ? styles[hoveringIcon] : ""
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
        animate={{
          translateX: hoveringIcon ? -30 : -16,
          translateY: hoveringIcon ? -30 : -16,
          rotateX,
          rotateY,
          scaleX,
          scaleY
        }}
      />
      <div className={styles.icons_wrapper}>
        {icons.map(({ cursorStyle, iconClass }, i) => (
          <span
            className={`${styles.fab} ${iconClass}`}
            key={i}
            ref={(el) => iconRefs.current.push(el)}
            onMouseEnter={() => hoverIcon(iconRefs.current[i], cursorStyle)}
            onMouseLeave={() => setHoveringIcon(null)}
          >
            x
          </span>
        ))}
      </div>
    </div>
  )
}

export default CustomCursor
