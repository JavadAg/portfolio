import dynamic from "next/dynamic"
import React, { forwardRef, useEffect } from "react"
import styles from "./About.module.scss"
import Image from "next/future/image"
import aboutPic from "../../public/my_photo.jpg"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div id="about" className={styles.about_container}>
      <span>About</span>
      <div className={styles.about_me}>
        <p>
          Front-end web developer passionate about creating web applications and
          experiences on the web . currently learning and improving my skills,
          excited to work alongside other amazing programmers and learn so much
          more. In my free time, I enjoy playing video games and watching
          movies. Anyway enough about me, you are probably more interested in
          the work I am capable of. Take a look at my projects. Make sure you
          click on each project to see the tools I used and other interesting
          information.
        </p>
        <motion.div
          whileHover={{
            scale: 1.02
          }}
          transition={{ type: "spring", duration: 1, stiffness: 300 }}
          className={styles.about_photo}
        >
          <Image src={aboutPic} />
        </motion.div>
      </div>
    </div>
  )
}

export default About
