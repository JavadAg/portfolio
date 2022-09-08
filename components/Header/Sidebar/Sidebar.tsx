import React, { useState } from "react"
import styles from "./Sidebar.module.scss"
import { motion } from "framer-motion"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.sidebar_container}>
      <button onClick={() => setIsOpen((prev) => !prev)}>x</button>
      {isOpen && (
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  )
}

export default Sidebar
