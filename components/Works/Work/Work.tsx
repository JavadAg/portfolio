import React, { useEffect, useRef } from "react"
import styles from "./Work.module.scss"
import { AnimatePresence, motion } from "framer-motion"
import Img from "next/future/image"

const Work = ({ work, isExpanded, setIsExpanded }) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 4 },
        opacity: 1
      }
    }
  }

  return (
    <motion.div
      transition={{ duration: 1 }}
      layout
      onClick={() => setIsExpanded((prev) => (prev === work.id ? 0 : work.id))}
      /* className={`${
        isExpanded == work.id ? styles.single_item_expanded : styles.single_item
      }`} */
      className={styles.single_item_expanded}
    >
      <AnimatePresence initial={false}>
        {/*  <motion.div
          key="image"
          layout
          initial={false}
          exit={{ width: "100%", height: "100%" }}
          transition={{ duration: 1 }}
          className={styles.item_image_wrapper}
        >
          <Img src={work.imgSrc} />
        </motion.div> */}

        {isExpanded == work.id && (
          <motion.div
            layout
            key="content"
            initial={false}
            animate="open"
            exit="close"
            variants={{
              open: { opacity: 1 },
              close: { opacity: 0 }
            }}
            transition={{ duration: 1 }}
            className={styles.item_info}
          >
            <motion.span>{work.title}</motion.span>
            <motion.svg
              width={300}
              height={10}
              viewBox="5 5 300 10"
              initial="hidden"
              animate="visible"
            >
              <motion.line
                x1="10"
                y1="10"
                x2="300"
                y2="10"
                stroke="#4B4D87"
                variants={draw}
              />
            </motion.svg>
            <p>{work.description}</p>
            <span>Created using:</span>
            <div>
              {work.techs.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Work
