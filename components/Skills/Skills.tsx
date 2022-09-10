import React, { useRef } from "react"
import ReactQuery_logo from "../../public/assets/skills/logo1.svg"
import NextJS_logo from "../../public/assets/skills/logo2.svg"
import TailwindCSS_logo from "../../public/assets/skills/logo3.svg"
import React_logo from "../../public/assets/skills/logo4.svg"
import Js_logo from "../../public/assets/skills/logo5.svg"
import TS_logo from "../../public/assets/skills/logo6.svg"
import Html_logo from "../../public/assets/skills/logo7.svg"
import Css_logo from "../../public/assets/skills/logo8.svg"
import BootS_logo from "../../public/assets/skills/logo9.svg"
import Sass_logo from "../../public/assets/skills/logo10.svg"
import Rtk_logo from "../../public/assets/skills/logo11.svg"
import Git_logo from "../../public/assets/skills/logo12.svg"
import { motion } from "framer-motion"
import styles from "./Skills.module.scss"

const Skills = () => {
  const dragContainerRef = useRef()
  return (
    <motion.div id="skills" className={styles.skills_container}>
      <span>Skills</span>
      <motion.div ref={dragContainerRef} className={styles.skills_wrapper}>
        <motion.div drag dragConstraints={dragContainerRef}>
          <Js_logo className={`${styles.carousel_item} ${styles.carouse_1}`} />
        </motion.div>
        <motion.div drag dragConstraints={dragContainerRef}>
          <TS_logo className={styles.carousel_item} />
        </motion.div>
        <motion.div drag dragConstraints={dragContainerRef}>
          <React_logo className={styles.carousel_item} />
        </motion.div>
        <motion.div drag dragConstraints={dragContainerRef}>
          <NextJS_logo className={styles.carousel_item} />
        </motion.div>
        <motion.div drag dragConstraints={dragContainerRef}>
          <Html_logo className={styles.carousel_item} />
        </motion.div>
        <motion.div drag dragConstraints={dragContainerRef}>
          <Css_logo className={styles.carousel_item} />
        </motion.div>
        <motion.div drag dragConstraints={dragContainerRef}>
          <TailwindCSS_logo className={styles.carousel_item} />
        </motion.div>
        <motion.div drag dragConstraints={dragContainerRef}>
          <BootS_logo className={styles.carousel_item} />
        </motion.div>
        <motion.div drag dragConstraints={dragContainerRef}>
          <Sass_logo className={styles.carousel_item} />
        </motion.div>
        <motion.div drag dragConstraints={dragContainerRef}>
          <Rtk_logo className={styles.carousel_item} />
        </motion.div>
        <motion.div drag dragConstraints={dragContainerRef}>
          <ReactQuery_logo className={styles.carousel_item} />
        </motion.div>
        <motion.div drag dragConstraints={dragContainerRef}>
          <Git_logo className={styles.carousel_itemn} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Skills
