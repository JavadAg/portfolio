import React from "react"
import styles from "./Sidebar.module.scss"
import { motion, useCycle } from "framer-motion"
import { SidebarToggle } from "./SidebarToggle/SidebarToggle"
import { Item } from "../../../types/navmenu.types"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 35px)`,
    transition: {
      type: "tween",
      duration: 0.7
    }
  }),
  closed: {
    clipPath: "circle(2px at 100% 35px)",
    transition: {
      delay: 0.5,
      duration: 0.7,
      type: "tween"
    }
  }
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const variants1 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

interface IProps {
  handleLink: (item: Item) => void
  itemIds: Item[]
  selected: React.MutableRefObject<string>
}

const Sidebar: React.FC<IProps> = ({ itemIds, handleLink, selected }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const navHandler = (item: Item) => {
    handleLink(item)
    toggleOpen()
  }

  return (
    <>
      <SidebarToggle toggle={() => toggleOpen()} isOpen={isOpen} />

      <motion.div
        initial="close"
        animate={isOpen ? "open" : "closed"}
        className={styles.sidebar_container}
        variants={sidebar}
      >
        <motion.ul className={styles.sidebar_items} variants={variants}>
          {itemIds.map((item) => {
            return (
              <motion.li
                key={item.id}
                onClick={() => navHandler(item)}
                variants={variants1}
                whileHover={{ scale: 1.1 }}
              >
                {item.id}
                {item.link === selected.current && (
                  <motion.div
                    layoutId="navbar_arrow"
                    className={styles.sliding_gradient}
                  />
                )}
              </motion.li>
            )
          })}
        </motion.ul>
      </motion.div>
    </>
  )
}

export default Sidebar
