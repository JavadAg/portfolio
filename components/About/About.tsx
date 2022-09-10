import React from "react"
import styles from "./About.module.scss"
import Image from "next/future/image"
import aboutPic from "../../public/my_photo.jpg"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div id="about" className={styles.about_container}>
      <span>About</span>
      <div className={styles.about_me}>
        <motion.div
          whileHover={{
            scale: 1.02
          }}
          transition={{ type: "spring", duration: 1, stiffness: 300 }}
          className={styles.about_photo}
        >
          <Image src={aboutPic} alt="about_photo" />
        </motion.div>
        <p>
          Front-end web developer passionate about creating web applications and
          experiences on the web . I started web development since 2021 and
          currently learning and improving my skills, excited to work alongside
          other amazing programmers and learn so much more. when confronted with
          a challenge, may it be technical or not, I never give up until I found
          a solution. In my free time, I enjoy playing video games and watching
          movies. Anyway enough about me, you are probably more interested in
          the work I am capable of. Take a look at my projects. Make sure you
          click on each project to see the tools I used and other interesting
          information.
        </p>
      </div>
    </div>
  )
}

export default About
