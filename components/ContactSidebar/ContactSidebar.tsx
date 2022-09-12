import React from "react"
import styles from "./ContactSidebar.module.scss"

const ContactSidebar = () => {
  return (
    <div className={styles.contact_sidebar_container}>
      <ul className={styles.contact_sidebar_wrapper}>
        <li>Git</li>
        <li>Linkedin</li>
        <li>Gmail</li>
      </ul>
    </div>
  )
}

export default ContactSidebar
