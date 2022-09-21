import React, { useRef, useState } from "react"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Skills from "../components/Skills/Skills"
import Works from "../components/Works/Works"
import styles from "../styles/Home.module.scss"
import dynamic from "next/dynamic"
import Hero from "../components/Hero/Hero"
import Header from "../components/Header/Header"
import ContactSidebar from "../components/ContactSidebar/ContactSidebar"
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage" // will return static version on server and "live" version on client

export default function Home() {
  const Canvas = dynamic(() => import("../components/Canvas/Canvas"), {
    ssr: false
  })
  const anchors = ["home", "about", "skills", "works", "contact"]

  let fpApi = useRef<fullpageApi>(null)

  return (
    <div className={styles.layout}>
      <ContactSidebar />
      <Canvas />
      <Header fullpageApi={fpApi} />
      <ReactFullpage
        menu="#nav_menu"
        anchors={anchors}
        licenseKey="cN1NI4_2-CkOcZFbI-ckoMNyom-QH6elxTD"
        verticalCentered={false}
        scrollOverflow={true}
        render={({ fullpageApi }) => {
          fpApi.current = fullpageApi
          return (
            <ReactFullpage.Wrapper>
              <main className={styles.main}>
                <Hero />
                <About />
                <Skills />
                <Works />
                <Contact />
              </main>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}
