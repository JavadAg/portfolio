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
      <motion.div className={styles.skills_wrapper}>
        <motion.div>
          <Js_logo className={`${styles.skill_item}`} />
        </motion.div>
        <motion.div>
          <TS_logo className={styles.skill_item} />
        </motion.div>
        <motion.div>
          <React_logo className={styles.skill_item} />
        </motion.div>
        <motion.div>
          <NextJS_logo className={styles.skill_item} />
        </motion.div>
        <motion.div>
          <Html_logo className={styles.skill_item} />
        </motion.div>
        <motion.div>
          <Css_logo className={styles.skill_item} />
        </motion.div>
        <motion.div>
          <TailwindCSS_logo className={styles.skill_item} />
        </motion.div>
        <motion.div>
          <BootS_logo className={styles.skill_item} />
        </motion.div>
        <motion.div>
          <Sass_logo className={styles.skill_item} />
        </motion.div>
        <motion.div>
          <Rtk_logo className={styles.skill_item} />
        </motion.div>
        <motion.div>
          <ReactQuery_logo className={styles.skill_item} />
        </motion.div>
        <motion.div>
          <Git_logo className={styles.skill_item} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Skills
