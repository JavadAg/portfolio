import React, { MutableRefObject } from 'react'
import ReactQuery_logo from '../../public/assets/skills/logo1.svg'
import NextJS_logo from '../../public/assets/skills/logo2.svg'
import TailwindCSS_logo from '../../public/assets/skills/logo3.svg'
import React_logo from '../../public/assets/skills/logo4.svg'
import Js_logo from '../../public/assets/skills/logo5.svg'
import TS_logo from '../../public/assets/skills/logo6.svg'
import Html_logo from '../../public/assets/skills/logo7.svg'
import Css_logo from '../../public/assets/skills/logo8.svg'
import BootS_logo from '../../public/assets/skills/logo9.svg'
import Sass_logo from '../../public/assets/skills/logo10.svg'
import Rtk_logo from '../../public/assets/skills/logo11.svg'
import Git_logo from '../../public/assets/skills/logo12.svg'
import { motion } from 'framer-motion'
import styles from './Skills.module.scss'

const skills_title_variants = {
  initial: { scale: 0, opacity: 0 },
  inView: { scale: 1, opacity: 1 }
}

const icons_wrapper = {
  hidden: {},
  visible: {
    transition: {
      when: 'beforeChildren'
    }
  }
}

const skill_icons_variantss = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: (custom: number) => ({
    opacity: [0, 0.1, 0.3, 1],
    scale: 1,
    transition: {
      delay: custom,
      duration: 1,
      type: 'tween'
    }
  })
}

const Skills = ({
  sectionRefs
}: {
  sectionRefs: MutableRefObject<HTMLDivElement>[]
}) => {
  return (
    <motion.div
      id='skills'
      className={`${styles.skills_container}`}
    >
      <motion.span
        initial='initial'
        viewport={{ once: true }}
        whileInView='inView'
        variants={skills_title_variants}
        transition={{ duration: 1, type: 'tween' }}
      >
        Skills
      </motion.span>
      <div
        ref={sectionRefs[2]}
        className={styles.skills_wrapper}
      >
        <motion.div
          variants={icons_wrapper}
          viewport={{ once: true }}
          whileInView='visible'
          initial='hidden'
          className={styles.skills}
        >
          <motion.div
            custom={Math.random() * 1}
            variants={skill_icons_variantss}
            className={styles.skill_js}
          >
            <Js_logo className={styles.skill_item} />
          </motion.div>
          <motion.div
            custom={Math.random() * 1}
            variants={skill_icons_variantss}
            className={styles.skill_ts}
          >
            <TS_logo className={styles.skill_item} />
          </motion.div>
          <motion.div
            custom={Math.random() * 1}
            variants={skill_icons_variantss}
            className={styles.skill_react}
          >
            <React_logo className={styles.skill_item} />
          </motion.div>
          <motion.div
            custom={Math.random() * 1}
            variants={skill_icons_variantss}
            className={styles.skill_next}
          >
            <NextJS_logo
              className={`${styles.skill_item} ${styles.custom_color_svg}`}
            />
          </motion.div>
          <motion.div
            custom={Math.random() * 1}
            variants={skill_icons_variantss}
            className={styles.skill_html}
          >
            <Html_logo className={styles.skill_item} />
          </motion.div>
          <motion.div
            custom={Math.random() * 1}
            variants={skill_icons_variantss}
            className={styles.skill_css}
          >
            <Css_logo className={styles.skill_item} />
          </motion.div>
          <motion.div
            custom={Math.random() * 1}
            variants={skill_icons_variantss}
            className={styles.skill_tw}
          >
            <TailwindCSS_logo className={styles.skill_item} />
          </motion.div>
          <motion.div
            custom={Math.random() * 1}
            variants={skill_icons_variantss}
            className={styles.skill_bs}
          >
            <BootS_logo className={styles.skill_item} />
          </motion.div>
          <motion.div
            custom={Math.random() * 1}
            variants={skill_icons_variantss}
            className={styles.skill_sass}
          >
            <Sass_logo className={styles.skill_item} />
          </motion.div>
          <motion.div
            custom={Math.random() * 1}
            variants={skill_icons_variantss}
            className={styles.skill_rtk}
          >
            <Rtk_logo className={styles.skill_item} />
          </motion.div>
          <motion.div
            custom={Math.random() * 1}
            variants={skill_icons_variantss}
            className={styles.skill_rq}
          >
            <ReactQuery_logo className={styles.skill_item} />
          </motion.div>
          <motion.div
            custom={Math.random() * 1}
            variants={skill_icons_variantss}
            className={styles.skill_git}
          >
            <Git_logo
              className={`${styles.skill_item} ${styles.custom_color_svg}`}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Skills
