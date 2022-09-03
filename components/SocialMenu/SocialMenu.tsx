import React from "react"
import styles from "./SocialMenu.module.scss"

const SocialMenu = () => {
  return (
    <div className={styles.social_menu_wrapper}>
      <ul className={styles.social_menu}>
        <li>Git</li>
        <li>Linkedin</li>
        <li>Gmail</li>
      </ul>
    </div>
  )
}

export default SocialMenu
