import React, { useState } from "react"
import works from "../../data/works_data"
import styles from "./Works.module.scss"
import { AnimatePresence, motion } from "framer-motion"
import Work from "./Work/Work"

const Works = () => {
  const [isExpanded, setIsExpanded] = useState(0)

  console.log(isExpanded, "1232")

  return (
    <div className={styles.works_wrapper}>
      <span>Works</span>
      <motion.div className={styles.works}>
       
          {works.map((work, index) => (
            <Work
              key={work.id}
              work={work}
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          ))}
       
      </motion.div>
    </div>
  )
}

export default Works
