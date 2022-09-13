import Link from "next/link"
import React from "react"
import styles from "./ContactSidebar.module.scss"

const ContactSidebar = () => {
  return (
    <div className={styles.contact_sidebar_container}>
      <ul className={styles.contact_sidebar_wrapper}>
        <li>
          <a target={"_blank"} href="https://github.com/JavadAg">
            Git
          </a>
        </li>
        <li>
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/javad-aghebati/"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            target={"_blank"}
            href="mailto:j.aghebati93@gmail.com?Subject=Hello"
          >
            Gmail
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ContactSidebar
