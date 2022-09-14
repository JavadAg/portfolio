import React from "react"
import { motion } from "framer-motion"
import styles from "./Contact.module.scss"

const Contact = () => {
  const contact_title_variants = {
    initial: { scale: 0, opacity: 0 },
    inView: { scale: 1, opacity: 1 }
  }

  const contact_variants = {
    initial: { y: 500, opacity: 0 },
    inView: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      id="contact"
      className={styles.contact_container}
    >
      <motion.span
        transition={{ duration: 1, type: "tween" }}
        variants={contact_title_variants}
      >
        Contact
      </motion.span>
      <motion.div
        transition={{ duration: 1, type: "tween", ease: "easeOut" }}
        variants={contact_variants}
        layout
        className={styles.contact_wrapper}
      >
        <motion.span>
          At present, I am in search of new opportunities. If you have any
          questions, want to collaborate, or just want to say hello, feel free
          to reach out. I’ll try my best to get back to you!
        </motion.span>

        <a
          target={"_blank"}
          rel="noreferrer"
          href="mailto:j.aghebati93@gmail.com?Subject=Hello"
        >
          SAY HELLO
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Contact
