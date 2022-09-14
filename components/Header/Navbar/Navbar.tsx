import React from "react"
import styles from "./Navbar.module.scss"
import { motion } from "framer-motion"

const Navbar = ({ itemIds, handleLink, selected }) => {
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
    <div className={styles.navbar_container}>
      <motion.ul
        variants={list}
        initial="initial"
        animate="inView"
        className={styles.navbar_wrapper}
      >
        {itemIds.map((item) => {
          return (
            <motion.li
              variants={items}
              transition={{ duration: 0.5, type: "tween" }}
              className={
                item.link === selected.current && styles.navbar_item_active
              }
              onClick={() => handleLink(item)}
            >
              {item.id}
              {item.link === selected.current ? (
                <motion.span
                  layoutId="nav_arrow"
                  className={styles.navbar_item_arrow}
                />
              ) : null}
            </motion.li>
          )
        })}
      </motion.ul>
      <motion.div />
    </div>
  )
}

export default Navbar
