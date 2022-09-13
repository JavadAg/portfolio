import React, { useState } from "react"
import styles from "./Work.module.scss"
import { AnimatePresence, motion, useCycle } from "framer-motion"
import Img from "next/future/image"

const Work = ({ work }) => {
  return (
    <motion.div layout key={work.id} className={styles.single_item}>
      <motion.div key={`content${work.id}`} className={styles.item_info}>
        <motion.span layout>{work.title}</motion.span>
        <motion.span layout>{work.description}</motion.span>
        <motion.div>
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
