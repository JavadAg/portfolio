import React, { useEffect, useRef } from "react"
import styles from "./Work.module.scss"
import { AnimatePresence, motion } from "framer-motion"
import Img from "next/future/image"
import ExpandToggle from "./ExpandToggle/ExpandToggle"

const Work = ({ work, isExpanded, setIsExpanded }) => {
  const draw = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 2,
        ease: "easeInOut"
      }
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 2,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      transition={{ duration: 1 }}
      initial={{ height: "auto" }}
      animate={{ height: "auto" }}
      layout
      onClick={() =>
        setIsExpanded((prev: any) => (prev === work.id ? 0 : work.id))
      }
      className={styles.single_item}
    >
      <motion.div
        layout
        initial={false}
        animate={isExpanded === work.id ? "close" : "open"}
        transition={{ duration: 1 }}
        variants={{
          open: {
            height: "100%",
            width: "100%"
          },
          close: { width: "40%" }
        }}
        className={styles.item_image_wrapper}
      >
        <ExpandToggle />
        <Img src={work.imgSrc} />
      </motion.div>
      <AnimatePresence initial={false}>
        {isExpanded == work.id && (
          <motion.div
            layout
            key={`content${work.id}`}
            initial="close"
            animate="open"
            exit="close"
            variants={{
              open: {
                opacity: 1,
                /* scale: 1, */
                transition: {
                  duration: 1,
                  type: "tween",
                  when: "beforeChildren",
                  staggerChildren: 0.2
                }
              },
              close: {
                opacity: 0,
                /*scale: 0,*/
                transition: { duration: 1, type: "tween" }
              }
            }}
            className={styles.item_info}
          >
            <motion.span layout>{work.title}</motion.span>
            <motion.svg
              layout
              width={300}
              height={10}
              viewBox="5 5 300 10"
              initial="hidden"
              animate="visible"
              exit="hidden"
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
            <motion.span
              layout
              variants={{
                open: {
                  opacity: 1,
                  x: 0
                },
                close: {
                  opacity: 0,
                  x: 200
                }
              }}
              transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            >
              {work.description}
            </motion.span>
            <motion.span
              layout
              variants={{
                open: {
                  opacity: 1,
                  x: 0
                },
                close: {
                  opacity: 0,
                  x: 200
                }
              }}
              transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            >
              Created using:
            </motion.span>
            <motion.div
              layout
              variants={{
                open: {
                  opacity: 1,
                  x: 0
                },
                close: {
                  opacity: 0,
                  x: 200
                }
              }}
              transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            >
              {work.techs.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Work
