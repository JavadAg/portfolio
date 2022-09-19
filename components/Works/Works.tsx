import React, { useState } from "react"
import works from "../../data/works_data"
import styles from "./Works.module.scss"
import { AnimatePresence, motion } from "framer-motion"
/* import Work from "./Work/Work" */
import Link from "next/link"
import { wrap } from "popmotion"
import Img, { StaticImageData } from "next/future/image"
import { FiGithub, FiExternalLink } from "react-icons/fi"

const works_title_variants = {
  initial: { scale: 0, opacity: 0 },
  inView: { scale: 1, opacity: 1 }
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
}

const single_work_variantss = {
  hidden: (custom: number) => ({
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
  hidden: (custom: number) => ({
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
  hidden: (custom: number) => ({
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

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const Works = () => {
  const [[page, direction], setPage] = useState([0, 0])

  const cardIndex = wrap(0, works.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <div className="section">
      <div id="works" className={`${styles.works_container}`}>
        <motion.span
          viewport={{ once: true }}
          initial="initial"
          whileInView="inView"
          variants={works_title_variants}
          transition={{ duration: 1, type: "tween" }}
        >
          Works
        </motion.span>

        <div className={styles.works_wrapper}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className={styles.work_card}
            >
              <motion.div
                variants={item_info_wrapper}
                className={styles.item_info}
              >
                <motion.span
                  className={styles.work_title}
                  variants={item_info_variants}
                >
                  {works[cardIndex].title}
                </motion.span>
                <motion.span
                  className={styles.work_desc}
                  variants={item_info_variants}
                >
                  {works[cardIndex].description}
                </motion.span>
                <motion.div
                  variants={item_info_variants}
                  className={styles.work_links}
                >
                  <a
                    href={works[cardIndex].website_href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink />
                  </a>
                  <a
                    href={works[cardIndex].git_href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub />
                  </a>
                </motion.div>
                <motion.div
                  className={styles.work_techs}
                  variants={item_info_variants}
                >
                  {works[cardIndex].techs.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </motion.div>
                <motion.div className={styles.item_image_wrapper}>
                  <Img alt="work_img" src={works[cardIndex].imgSrc} />
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.next} onClick={() => paginate(1)}>
          {"‣"}
        </div>
        <div className={styles.prev} onClick={() => paginate(-1)}>
          {"‣"}
        </div>
        <Link href="https://github.com/JavadAg">{"--> Explore more"}</Link>
      </div>
    </div>
  )
}

export default Works
