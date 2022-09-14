import React from "react"
import styles from "./Work.module.scss"
import { motion } from "framer-motion"
import Img from "next/future/image"

const Work = ({ work }) => {
  const single_work_variantss = {
    hidden: (custom) => ({
      opacity: 0,
      x: custom === 0 ? -200 : 200
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeInOut",
        when: "beforeChildren"
      }
    }
  }

  const item_info_wrapper = {
    hidden: (custom) => ({
      opacity: 0,
      x: custom === 0 ? -200 : 200
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0,
        delay: 0,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const item_info_variants = {
    hidden: (custom) => ({
      opacity: 0,
      x: custom === 0 ? -400 : 400
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      layout
      initial="hidden"
      whileInView="visible"
      custom={work.id & 1}
      variants={single_work_variantss}
      key={work.id}
      className={styles.single_item}
    >
      <motion.div
        layout
        variants={item_info_wrapper}
        className={styles.item_info}
      >
        <motion.span custom={work.id & 1} variants={item_info_variants}>
          {work.title}
        </motion.span>
        <motion.span custom={work.id & 1} variants={item_info_variants}>
          {work.description}
        </motion.span>
        <motion.div custom={work.id & 1} variants={item_info_variants}>
          {work.techs.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </motion.div>
      </motion.div>
      <motion.div className={styles.item_image_wrapper}>
        <Img alt="work_img" src={work.imgSrc} />
      </motion.div>
    </motion.div>
  )
}

export default Work
