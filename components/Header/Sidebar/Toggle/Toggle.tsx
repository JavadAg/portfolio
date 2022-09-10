import * as React from "react"
import { motion } from "framer-motion"
import styles from "./Toggle.module.scss"

const Path = (props) => (
  <motion.path strokeWidth="2.5" strokeLinecap="round" {...props} />
)

export const Toggle = ({ toggle, isOpen }) => (
  <motion.button
    animate={isOpen ? "open" : "closed"}
    className={styles.toggle_sidebar_button}
    onClick={toggle}
  >
    <svg width="23" height="23" viewBox="0 0 25 19">
      <Path
        variants={{
          closed: { d: "M 22 2.5 L 12 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1, pathLength: [0, 1] },
          open: { opacity: 0, pathLength: [0, 1] }
        }}
        transition={{
          duration: 0.1
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 12 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </motion.button>
)
