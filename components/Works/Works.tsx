import React, { useState } from "react"
import works from "../../data/works_data"
import styles from "./Works.module.scss"
import { LayoutGroup, motion } from "framer-motion"
import Work from "./Work/Work"

const CARD_OFFSET = 10
const SCALE_FACTOR = 0.06

const Works = () => {
  const [cards, setCards] = React.useState<any>(works)

  const moveToEnd = () => {
    cards.push(cards.shift())
    setCards([...cards])
  }

  return (
    <div id="works" className={styles.works_container}>
      <span>Works</span>

      <motion.div className={styles.works}>
        {cards.map((work, index) => {
          return (
            <Work
              key={work.id}
              work={work}
              cards={cards}
              index={index}
              works={works}
              moveToEnd={moveToEnd}
            />
          )
        })}
      </motion.div>
      <button>Explore more</button>
    </div>
  )
}

export default Works
