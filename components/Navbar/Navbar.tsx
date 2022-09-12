import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import styles from "./Navbar.module.scss"
import { AnimatePresence, motion, useCycle } from "framer-motion"

const Navbar = ({ itemIds, handleLink, selected }) => {
  return (
    <div className={styles.navbar_container}>
      <motion.ul className={styles.navbar_wrapper}>
        {itemIds.map((item, index) => {
          return (
            <motion.li
              /*   className={item.link === selected && styles.navbar_item_active} */
              onClick={() => handleLink(item)}
            >
              {item.id}
              {item.link === selected.current ? (
                <motion.span
                  className={styles.navbar_item_arrow}
                  layoutId="arrow"
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
