import React from "react"
import styles from "./Work.module.scss"
import { motion } from "framer-motion"
import Img, { StaticImageData } from "next/future/image"
import { CgWebsite } from "react-icons/cg"
import { FiGithub } from "react-icons/fi"

interface IProps {
  work: {
    id: number
    imgSrc: StaticImageData
    title: string
    description: string
    website_href: string
    git_href: string
    techs: string[]
  }
}

const Work: React.FC<IProps> = ({ work }) => {
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

  return (
    <motion.div
      layout
      initial="hidden"
      whileInView="visible"
      custom={work.id & 1}
      variants={single_work_variantss}
      key={work.id}
      className={styles.single_item}
    >
      <motion.div
        layout
        variants={item_info_wrapper}
        className={styles.item_info}
      >
        <motion.span
          className={styles.work_title}
          custom={work.id & 1}
          variants={item_info_variants}
        >
          {work.title}
        </motion.span>
        <motion.span
          className={styles.work_desc}
          custom={work.id & 1}
          variants={item_info_variants}
        >
          {work.description}
        </motion.span>
        <motion.div className={styles.work_links}>
          <a>
            <CgWebsite />
          </a>
          <a>
            <FiGithub />
          </a>
        </motion.div>
        <motion.div
          className={styles.work_techs}
          custom={work.id & 1}
          variants={item_info_variants}
        >
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
