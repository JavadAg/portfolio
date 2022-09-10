import React from "react"
import styles from "./Work.module.scss"
import { AnimatePresence, motion } from "framer-motion"
import Img from "next/future/image"

const Work = ({ work, cards, index, works, moveToEnd }) => {
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
    },
    changeColor: {
      stroke: "#3cf"
    }
  }

  /*  const coverImage = {
    open: {
      height: "100%",
      width: "100%"
    },
    close: { width: "40%" },
    filter: {
      filter: `grayscale(1) blur(4px)`,
      height: "100%",
      width: "100%"
    },
    hover: {
      filter: `grayscale(0) blur(0px)`
    }
  }
 */
  return (
    <motion.div
      /* layout */
      key={work.id}
      className={styles.single_item}
      /* style={{ flexDirection: index % 2 === 0 ? "row-reverse" : "row" }} */
    >
      <AnimatePresence>
        <motion.div
          /*  layout */
          key={`content${work.id}`}
          /*  initial="close"
          animate="open"
          exit="close"
          variants={{
            open: {
              opacity: 1,
              
              transition: {
                duration: 1,
                type: "tween",
                when: "beforeChildren",
                staggerChildren: 0.2
              }
            },
            close: {
              opacity: 0,
             
              transition: { duration: 1, type: "tween" }
            }
          }} */
          className={styles.item_info}
        >
          <motion.span layout>{work.title}</motion.span>
          <motion.svg
            layout
            width={300}
            height={10}
            whileHover="changeColor"
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
            /* variants={{
              open: {
                opacity: 1,
                x: 0
              },
              close: {
                opacity: 0,
                x: 200
              }
            }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }} */
          >
            {work.description}
          </motion.span>
          <motion.div
          /*  layout
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
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }} */
          >
            {work.techs.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          /*  layout
        initial="filter"
        whileHover="hover"
        animate={["close", "hover"]}
        transition={{ duration: 1 }}
        variants={coverImage} */
          className={styles.item_image_wrapper}
        >
          <Img alt="work_img" src={work.imgSrc} />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

export default Work
