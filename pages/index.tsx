import React, { useRef } from "react"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Skills from "../components/Skills/Skills"
import Works from "../components/Works/Works"
import styles from "../styles/Home.module.scss"
import dynamic from "next/dynamic"
import Hero from "../components/Hero/Hero"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ContactSidebar from "../components/ContactSidebar/ContactSidebar"
import ReactFullpage from "@fullpage/react-fullpage" // will return static version on server and "live" version on client

export default function Home() {
  const Canvas = dynamic(() => import("../components/Canvas/Canvas"), {
    ssr: false
  })

  return (
    <div className={styles.layout}>
      <Header />
      <ContactSidebar />
      <Canvas />
      <main className={styles.main}>
        <ReactFullpage
          licenseKey="gplv3-license"
          verticalCentered={false}
          scrollOverflow={false}
          render={() => {
            return (
              <>
                <Hero />
                <About />
                <Skills />
                <Works />
                <Contact />
              </>
            )
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
