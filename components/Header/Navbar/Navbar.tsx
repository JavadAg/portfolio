import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import styles from "./Navbar.module.scss"
import { AnimatePresence, motion, useCycle } from "framer-motion"

const Navbar = ({ itemIds, handleLink, selected }) => {
  return (
    <div className={styles.navbar_container}>
      <motion.ul className={styles.navbar_wrapper}>
        {itemIds.map((item) => {
          return (
            <motion.li
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
