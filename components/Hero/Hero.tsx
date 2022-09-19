import React, { useEffect, useRef, useState } from "react"
import styles from "./Hero.module.scss"
import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"
import Cv from "../../public/assets/cv.svg"

const line1 = "Hi, I'm"
const line2 = "Javad Aghebati"

const sentence = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren"
    }
  }
}

const letter = {
  hidden: {
    opacity: [0],
    y: -200
  },
  visible: (custom) => ({
    opacity: [0, 0.1, 0.3, 1],
    y: 0,
    transition: {
      delay: custom,
      duration: 1,
      type: "tween",
      ease: "easeInOut"
    }
  })
}

const sliding_gradient = {
  initial: {
    opacity: 0,
    x: -400
  },
  inView: {
    opacity: [0, 0.1, 0.3, 1],
    x: 0,
    transition: { type: "tween", duration: 1.5, ease: "easeOut" }
  }
}

const Hero = () => {
  const router = useRouter()

  let textRef = useRef<HTMLSpanElement>(null)

  let words = ["Web Developer", "Gamer", "Photographer"],
    part: string,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 5,
    speed = 100

  const typing = () => {
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          skip_count = skip_count + 1
          if (skip_count == skip_delay) {
            forwards = false
            skip_count = 0
          }
        }
      } else {
        if (offset == 0) {
          forwards = true
          i = i + 1
          offset = 0
          if (i >= len) {
            i = 0
          }
        }
      }

      if (skip_count == 0) {
        if (forwards) {
          offset = offset + 1
        } else {
          offset = offset - 1
        }
      }

      part = words[i].slice(0, offset)
      textRef!.current!.textContent = part
    }, speed)
  }

  useEffect(() => {
    typing()
  }, [])

  return (
    <div className="section">
      <div id="home" className={`${styles.hero_container}`}>
        <div className={styles.hero_texts}>
          <motion.div
            variants={sentence}
            animate="visible"
            initial="hidden"
            className={styles.line_1_wrapper}
          >
            {line1.split("").map((char, index) => (
              <motion.span
                custom={Math.random() * 1}
                className={styles.line_1}
                key={char + "_" + index}
                variants={letter}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={sentence}
            animate="visible"
            initial="hidden"
            className={styles.line_2_wrapper}
          >
            {line2.split("").map((char, index) => (
              <motion.span
                custom={Math.random() * 1}
                className={styles.line_2}
                key={char + "_" + index}
                variants={letter}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              initial="initial"
              animate="inView"
              variants={sliding_gradient}
              className={styles.sliding_gradient}
            />
          </motion.div>

          <motion.div className={styles.typing_slider_wrapper}>
            <motion.span
              transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
              variants={{
                initial_left: { x: -600, opacity: 0 },

                inView: { x: 0, opacity: 1 }
              }}
              initial="initial_left"
              animate="inView"
            >
              I&apos;m
            </motion.span>
            <motion.span
              transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
              variants={{
                initial_right: { x: 600, opacity: 0 },
                inView: { x: 0, opacity: 1 }
              }}
              initial="initial_right"
              animate="inView"
              className={styles.typing_slider}
              ref={textRef}
            ></motion.span>
          </motion.div>
        </div>

        <motion.div
          variants={{
            initial: { y: 200, opacity: 0 },
            inView: { y: 0, opacity: 1 }
          }}
          transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
          initial="initial"
          animate="inView"
          onClick={() =>
            router.push(
              "https://www.dropbox.com/s/yzks6yx4wvfcgyq/%D8%B1%D8%B2%D9%88%D9%85%D9%87%20%D8%AC%D9%88%D8%A7%D8%AF%20%D8%B9%D8%A7%D9%82%D8%A8%D8%AA%DB%8C%20%28Frontend-Developer%29.pdf?dl=0"
            )
          }
          className={styles.cv_button}
        >
          <span>
            <Cv />
          </span>
          <button>Download Resume</button>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
