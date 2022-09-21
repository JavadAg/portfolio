import React from "react"
import styles from "./Navbar.module.scss"
import { motion } from "framer-motion"
import { Item } from "../../../types/navmenu.types"

interface IProps {
  handleLink: (item: Item) => void
  itemIds: Item[]
}

const Navbar: React.FC<IProps> = ({ itemIds, handleLink }) => {
  const list = {
    initial: { opacity: 0 },
    inView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
        duration: 0.5,
        type: "spring"
      }
    }
  }

  const items = {
    initial: { x: 400 },
    inView: { x: 0 }
  }

  return (
    <div id="navbar" className={styles.navbar_container}>
      <motion.ul
        variants={list}
        id="nav_menu"
        initial="initial"
        animate="inView"
        className={styles.navbar_wrapper}
      >
        {itemIds.map((item: Item) => {
          return (
            <motion.li
              key={item.id}
              data-menuanchor={item.link}
              variants={items}
              transition={{ duration: 0.5, type: "tween" }}
              onClick={() => handleLink(item)}
            >
              {item.id}
            </motion.li>
          )
        })}
      </motion.ul>
      <motion.div />
    </div>
  )
}

export default Navbar
