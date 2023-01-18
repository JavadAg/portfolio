import React, { MutableRefObject, useRef } from 'react'
import styles from './Hero.module.scss'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Cv from '../../public/assets/cv.svg'

const line1 = "Hi, I'm"
const line2 = 'Javad Aghebati'

const sentence = {
  hidden: {},
  visible: {
    transition: {
      when: 'beforeChildren'
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
      type: 'tween',
      ease: 'easeInOut'
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
    transition: { type: 'tween', duration: 1.5, ease: 'easeOut' }
  }
}

const Hero = ({
  sectionRefs
}: {
  sectionRefs: MutableRefObject<HTMLDivElement>[]
}) => {
  let textRef = useRef<HTMLSpanElement>(null)

  return (
    <div
      ref={sectionRefs[0]}
      id='home'
      className={`${styles.hero_container}`}
    >
      <div className={styles.hero_texts}>
        <motion.div
          variants={sentence}
          animate='visible'
          initial='hidden'
          className={styles.line_1_wrapper}
        >
          {line1.split('').map((char, index) => (
            <motion.span
              custom={Math.random() * 1}
              className={styles.line_1}
              key={char + '_' + index}
              variants={letter}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={sentence}
          animate='visible'
          initial='hidden'
          className={styles.line_2_wrapper}
        >
          {line2.split('').map((char, index) => (
            <motion.span
              custom={Math.random() * 1}
              className={styles.line_2}
              key={char + '_' + index}
              variants={letter}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial='initial'
            animate='inView'
            variants={sliding_gradient}
            className={styles.sliding_gradient}
          />
        </motion.div>

        <motion.div className={styles.line_3_wrapper}>
          <motion.span
            transition={{ type: 'tween', duration: 1, ease: 'easeInOut' }}
            variants={{
              initial_right: { x: 600, opacity: 0 },
              inView: { x: 0, opacity: 1 }
            }}
            initial='initial_right'
            animate='inView'
            className={styles.line_3}
            ref={textRef}
          >
            I craft things for web
          </motion.span>
        </motion.div>
      </div>

      <motion.a
        variants={{
          initial: { x: -400, opacity: 0 },
          inView: { x: 0, opacity: 1 }
        }}
        transition={{ type: 'tween', duration: 1, ease: 'easeInOut' }}
        initial='initial'
        animate='inView'
        href='https://www.dropbox.com/s/yzks6yx4wvfcgyq/%D8%B1%D8%B2%D9%88%D9%85%D9%87%20%D8%AC%D9%88%D8%A7%D8%AF%20%D8%B9%D8%A7%D9%82%D8%A8%D8%AA%DB%8C%20%28Frontend-Developer%29.pdf?dl=0'
        className={styles.cv_button}
      >
        <span>
          <Cv />
        </span>
        <button>My Resume</button>
      </motion.a>
    </div>
  )
}

export default Hero
