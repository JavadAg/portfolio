import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Skills from "../components/Skills/Skills"
import Works from "../components/Works/Works"
import styles from "../styles/Home.module.scss"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import CustomCursor from "../components/CustomCursor/CustomCursor"

export default function Home() {
  /*   const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  const [cursorVariant, setCursorVariant] = useState("default") */

  /* useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, []) */

  /*  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      height: 145,
      width: 145,
      x: mousePosition.x - 22,
      y: mousePosition.y - 22,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  } */

  /*  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default") */

  return (
    <div
      className={styles.home}
      /* onMouseEnter={textEnter}
      onMouseLeave={textLeave} */
    >
      <CustomCursor />
      <Header />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      {/* <motion.div
        className={styles.cursor}
        variants={variants}
        animate={cursorVariant}
      /> */}
    </div>
  )
}
