import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Skills from "../components/Skills/Skills"
import Works from "../components/Works/Works"
import styles from "../styles/Home.module.scss"
import { motion } from "framer-motion"
import { FC, ReactComponentElement, useEffect, useRef, useState } from "react"
import CustomCursor from "../components/CustomCursor/CustomCursor"
import dynamic from "next/dynamic"
import Hero from "../components/Hero/Hero"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import SocialMenu from "../components/SocialMenu/SocialMenu"
import Navbar from "../components/Navbar/Navbar"

export default function Home() {
  const Canvas = dynamic(() => import("../components/Canvas/Canvas"), {
    ssr: false
  })

  /* const [mousePosition, setMousePosition] = useState({
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
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <SocialMenu />
        {/*  onMouseEnter={textEnter}
        onMouseLeave={textLeave} */}
        {/* <CustomCursor /> */}
        <Canvas />
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
        {/*  <motion.div
        className={styles.cursor}
        variants={variants}
        animate={cursorVariant}
      /> */}
        <Navbar />
      </main>
      <Footer />
    </div>
  )
}
