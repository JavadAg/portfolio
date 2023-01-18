import React, { MutableRefObject, useState } from 'react'
import works from '../../data/works_data'
import styles from './Works.module.scss'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import Link from 'next/link'
import { wrap } from 'popmotion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const works_title_variants = {
  initial: { scale: 0, opacity: 0 },
  inView: { scale: 1, opacity: 1 }
}

const container_variants = {
  initial: { opacity: 1 },
  inView: { opacity: 1 }
}

const work_wrapper_variants = {
  initial: { y: 1000, opacity: 0 },
  inView: { y: 0, opacity: 1 }
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

const item_info_wrapper = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -200 : 200
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0,
      delay: 0,
      when: 'beforeChildren',
      staggerChildren: 0.2
    }
  }
}

const item_info_variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? -400 : 400
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeInOut'
    }
  }
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const Works = ({
  sectionRefs
}: {
  sectionRefs: MutableRefObject<HTMLDivElement>[]
}) => {
  const [[card, direction], setPage] = useState([0, 0])

  const cardIndex = wrap(0, works.length, card)

  const paginate = (newDirection: number) => {
    setPage([card + newDirection, newDirection])
  }

  return (
    <motion.div
      id='works'
      viewport={{ once: true }}
      initial='initial'
      whileInView='inView'
      variants={container_variants}
      className={`${styles.works_container}`}
    >
      <motion.span
        viewport={{ once: true }}
        initial='initial'
        whileInView='inView'
        variants={works_title_variants}
        transition={{ duration: 1, type: 'tween' }}
      >
        Works
      </motion.span>
      <motion.div
        variants={work_wrapper_variants}
        viewport={{ once: true }}
        transition={{ duration: 1, type: 'tween' }}
        ref={sectionRefs[3]}
        className={styles.works_wrapper}
      >
        <AnimatePresence
          initial={false}
          custom={direction}
        >
          <LayoutGroup>
            <motion.div
              key={card}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)
                if (swipe < -swipeConfidenceThreshold) {
                  cardIndex !== works.length - 1 && paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  cardIndex !== 0 && paginate(-1)
                }
              }}
              className={styles.work_card}
            >
              <motion.div
                initial='hidden'
                custom={direction}
                whileInView='visible'
                variants={item_info_wrapper}
                className={styles.item_info}
              >
                <motion.span
                  className={styles.work_title}
                  custom={direction}
                  variants={item_info_variants}
                >
                  {works[cardIndex].title}
                </motion.span>
                <motion.span
                  className={styles.work_desc}
                  custom={direction}
                  variants={item_info_variants}
                >
                  {works[cardIndex].description}
                </motion.span>
                <motion.div
                  variants={item_info_variants}
                  custom={direction}
                  className={styles.work_links}
                >
                  <a
                    href={works[cardIndex].website_href}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FiExternalLink />
                  </a>
                  <a
                    href={works[cardIndex].git_href}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FiGithub />
                  </a>
                </motion.div>
                <motion.div
                  className={styles.work_techs}
                  custom={direction}
                  variants={item_info_variants}
                >
                  {works[cardIndex].techs.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </LayoutGroup>
        </AnimatePresence>
      </motion.div>
      <div className={styles.works_bottom}>
        <div className={styles.card_arrow}>
          {works.map((item, index) => (
            <div
              key={item.id}
              className={`${card === index ? styles.active_dot : undefined} ${
                styles.dot
              }`}
            />
          ))}
        </div>
        <Link href='https://github.com/JavadAg'>{'--> Explore more'}</Link>
      </div>
    </motion.div>
  )
}

export default Works
