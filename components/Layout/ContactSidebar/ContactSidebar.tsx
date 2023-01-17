import React from "react"
import styles from "./ContactSidebar.module.scss"
import { motion } from "framer-motion"

const ContactSidebar = () => {
  const list = {
    initial: { opacity: 0 },
    inView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
        duration: 0.4,
        type: "spring"
      }
    }
  }

  const items = {
    initial: { x: -400 },
    inView: { x: 0 }
  }

  return (
    <div className={`section ${styles.contact_sidebar_container}`}>
      <motion.ul
        variants={list}
        initial="initial"
        animate="inView"
        className={styles.contact_sidebar_wrapper}
      >
        <motion.li
          variants={items}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/JavadAg"
          >
            Git
          </a>
        </motion.li>
        <motion.li
          variants={items}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.linkedin.com/in/javad-aghebati/"
          >
            Linkedin
          </a>
        </motion.li>
        <motion.li
          variants={items}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <a
            target={"_blank"}
            rel="noreferrer"
            href="mailto:j.aghebati93@gmail.com?Subject=Hello"
          >
            Gmail
          </a>
        </motion.li>
      </motion.ul>
    </div>
  )
}

export default ContactSidebar
