import React from "react"
import works from "../../data/works_data"
import styles from "./Works.module.scss"
import { motion } from "framer-motion"
import Work from "./Work/Work"
import Link from "next/link"

const Works = () => {
  const works_title_variants = {
    initial: { scale: 0, opacity: 0 },
    inView: { scale: 1, opacity: 1 }
  }

  return (
    <motion.div id="works" className={styles.works_container}>
      <motion.span
        initial="initial"
        whileInView="inView"
        variants={works_title_variants}
        transition={{ duration: 1, type: "tween" }}
      >
        Works
      </motion.span>

      <motion.div className={styles.works}>
        {works.map((work) => {
          return <Work key={work.id} work={work} />
        })}
      </motion.div>
      <Link href="https://github.com/JavadAg">{"--> Explore more"}</Link>
    </motion.div>
  )
}

export default Works
