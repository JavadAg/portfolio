import dynamic from "next/dynamic"
import React, { forwardRef, useEffect } from "react"
import styles from "./About.module.scss"

const About = () => {
  return (
    <div id="about" className={styles.about_container}>
      <div className={styles.about_me}>
        <p>Hi, I'm</p>
        <p>Javad Aghebati</p>
        <p>I'm</p>
        <p>
          I'm a Software Engineer 
        </p>
      </div>
    </div>
  )
}

export default About
