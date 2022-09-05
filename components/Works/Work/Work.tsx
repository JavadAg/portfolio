import React, { useEffect, useRef } from "react"
import styles from "./Work.module.scss"
import { motion } from "framer-motion"
import Img from "next/future/image"

const Work = ({ work, isExpanded, setIsExpanded }) => {
  return (
    <>
      {isExpanded == work.id ? (
        <div key={work.id} className={styles.single_item_expanded}>
          <div className={styles.left_column}>
            <span>{work.title}</span>
            <p>{work.description}</p>
            <span>Created using:</span>
            {work.techs.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
          <motion.div
            onClick={() => setIsExpanded(0)}
            className={styles.right_column}
          >
            <Img src={work.imgSrc} />
          </motion.div>
        </div>
      ) : (
        <motion.div
          onClick={() => setIsExpanded(work.id)}
          className={styles.single_item}
        >
          <Img src={work.imgSrc} />
        </motion.div>
      )}
    </>
  )
}

export default Work
