import React from "react"
import { motion } from "framer-motion"
import styles from "./Contact.module.scss"

const Contact = () => {
  return (
    <div id="contact" className={styles.contact_container}>
      <span>Contact</span>
      <motion.div layout className={styles.contact}>
        <span>Get In Touch</span>
        <span>
          At present, I am in search of new opportunities. If you have any
          questions, want to collaborate, or just want to say hello, feel free
          to reach out. I’ll try my best to get back to you!
        </span>

        <button>SAY HELLO</button>
      </motion.div>
    </div>
  )
}

export default Contact
