import React, { useRef } from "react"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Skills from "../components/Skills/Skills"
import Works from "../components/Works/Works"
import styles from "../styles/Home.module.scss"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import Hero from "../components/Hero/Hero"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ContactSidebar from "../components/ContactSidebar/ContactSidebar"
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll"

export default function Home() {
  const Canvas = dynamic(() => import("../components/Canvas/Canvas"), {
    ssr: false
  })

  const handleSetActive = (to: string) => {
    console.log(to)
  }

  return (
    <div className={styles.layout}>
      <Header />
      <ContactSidebar />
      <Canvas />
      <main className={styles.main}>
        <Link
          activeClass="active"
          style={{ zIndex: 99999999 }}
          to="works"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={handleSetActive}
        >
          Test 1
        </Link>

        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
