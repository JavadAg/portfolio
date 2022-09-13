import React from "react"
import works from "../../data/works_data"
import styles from "./Works.module.scss"
import { motion } from "framer-motion"
import Work from "./Work/Work"
import Link from "next/link"

const Works = () => {
  return (
    <div id="works" className={styles.works_container}>
      <span>Works</span>

      <motion.div className={styles.works}>
        {works.map((work) => {
          return <Work key={work.id} work={work} />
        })}
      </motion.div>
      <Link href="https://github.com/JavadAg">{"--> Explore more"}</Link>
    </div>
  )
}

export default Works
