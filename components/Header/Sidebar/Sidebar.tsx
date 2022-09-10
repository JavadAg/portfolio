import React, { useRef, useState } from "react"
import styles from "./Sidebar.module.scss"
import { AnimatePresence, motion, useCycle } from "framer-motion"
import { Toggle } from "./Toggle/Toggle"
import { useRouter } from "next/router"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 35px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(2px at 100% 35px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
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

const itemIds = [
  { id: "Home", link: "#home" },
  { id: "About", link: "#about" },
  { id: "Skills", link: "#skills" },
  { id: "Works", link: "#works" },
  { id: "Contact", link: "#contact" }
]

const Sidebar = () => {
  const router = useRouter()

  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <>
      <Toggle toggle={() => toggleOpen()} isOpen={isOpen} />
      <AnimatePresence>
        <motion.div
          initial="close"
          animate={isOpen ? "open" : "closed"}
          className={styles.sidebar_container}
          variants={sidebar}
        >
          <motion.ul className={styles.sidebar_items} variants={variants}>
            {itemIds.map((item, index) => {
              return (
                <motion.li
                  onClick={() => router.push(item.link)}
                  variants={variants1}
                  whileHover={{ scale: 1.1, origin: "center" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.id}
                </motion.li>
              )
            })}
          </motion.ul>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Sidebar
