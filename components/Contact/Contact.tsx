import React from "react"
import { motion } from "framer-motion"
import styles from "./Contact.module.scss"
import { useRouter } from "next/router"
import Link from "next/link"

const Contact = () => {
  const router = useRouter()

  return (
    <div id="contact" className={styles.contact_container}>
      <span>Contact</span>
      <motion.div layout className={styles.contact_wrapper}>
        <span>
          At present, I am in search of new opportunities. If you have any
          questions, want to collaborate, or just want to say hello, feel free
          to reach out. I’ll try my best to get back to you!
        </span>

        <a target={"_blank"} href="mailto:j.aghebati93@gmail.com?Subject=Hello">
          SAY HELLO
        </a>
      </motion.div>
    </div>
  )
}

export default Contact
