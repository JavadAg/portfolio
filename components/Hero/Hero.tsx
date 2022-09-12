import React, { useEffect, useRef, useState } from "react"
import styles from "./Hero.module.scss"
import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"
import Cv from "../../public/assets/cv.svg"

const Hero = () => {
  const router = useRouter()

  const [scrollDownBtn, setScrollDownBtn] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrollDownBtn(false)
      } else {
        setScrollDownBtn(true)
      }
    })
  }, [])

  let textRef = useRef<HTMLSpanElement>()

  let words = ["Web Developer", "Gamer", "Photographer"],
    part,
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
      textRef.current!.textContent = part
    }, speed)
  }

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
    hidden: {
      opacity: 0,
      x: -400
    },
    visible: {
      opacity: [0, 0.1, 0.3, 1],
      x: 0,
      transition: { type: "tween", duration: 1.5, ease: "easeOut" }
    }
  }

  useEffect(() => {
    typing()
  }, [])

  return (
    <div id="home" className={styles.hero_container}>
      <div className={styles.hero_texts}>
        <motion.div
          variants={sentence}
          animate="visible"
          initial="hidden"
          layout
          className={styles.line_1_wrapper}
        >
          {line1.split("").map((char, index) => (
            <motion.span
              layout
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
          layout
          className={styles.line_2_wrapper}
        >
          {line2.split("").map((char, index) => (
            <motion.span
              layout
              custom={Math.random() * 1}
              className={styles.line_2}
              key={char + "_" + index}
              variants={letter}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            layout
            initial="hidden"
            animate="visible"
            variants={sliding_gradient}
            className={styles.sliding_gradient}
          />
        </motion.div>

        <div className={styles.typing_slider_wrapper}>
          <span>I'm</span>
          <span className={styles.typing_slider} ref={textRef}></span>
        </div>
      </div>
      <div className={styles.cv_button}>
        <span>
          <Cv />
        </span>
        <button>Download Resume</button>
      </div>

      <AnimatePresence>
        {scrollDownBtn && (
          <motion.div
            layout
            variants={{
              show: { opacity: [0, 0.2, 0.4, 0.7, 1] },
              hidden: { opacity: [1, 0.7, 0.5, 0.3, 0] }
            }}
            transition={{ duration: 1, type: "tween" }}
            animate={scrollDownBtn ? "show" : "hidden"}
            exit="hidden"
            initial="show"
            className={styles.arrows}
            onClick={() => router.push("#about")}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Hero
