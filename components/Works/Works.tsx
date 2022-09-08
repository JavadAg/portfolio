import React, { useState } from "react"
import works from "../../data/works_data"
import styles from "./Works.module.scss"
import { motion } from "framer-motion"
import Work from "./Work/Work"

const Works = () => {
  const [isExpanded, setIsExpanded] = useState(0)

  const container = {
    inView: {
      x: 0,
      transition: {
        delay: 1
      }
    },
    initial: {
      x: 400
    }
  }

  return (
    <div className={styles.works_container}>
      <span>Works</span>
      <motion.div layout className={styles.works}>
        {works.map((work) => (
          <Work
            key={work.id}
            work={work}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        ))}
        <button>Explore more</button>
      </motion.div>
    </div>
  )
}

export default Works
