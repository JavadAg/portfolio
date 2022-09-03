import React from "react"
import styles from "./Navbar.module.scss"

const menus = [
  {
    text: "About"
  },
  {
    text: "Skills"
  },
  {
    text: "Home"
  },
  {
    text: "Works"
  },
  {
    text: "Contact"
  }
]

const Navbar = () => {
  return (
    <div className={styles.navbar_wrapper}>
      <ul className={styles.navbar}>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
