import { motion } from "framer-motion"

import { useEffect, useState } from "react"
import styles from "./ExpandToggle.module.scss"

const ExpandToggle = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const duration = 0.7

  const sunVariants = {
    checked: {
      pathLength: 1,
      scale: 1,
      type: "tween",
      transition: { repeat: Infinity, duration: 1, repeatType: "loop" }
    },
    unchecked: {
      pathLength: 0,
      scale: 0,
      type: "tween"
    }
  }

  return (
    <motion.button
      className={styles.toggle_button}
      data-testid="click-switch"
      aria-describedby="clickswitch"
      transition={{ duration }}
      initial="unchecked"
      exit="unchecked"
      animate="checked"
    >
      <motion.svg
        width="50"
        height="50"
        viewBox="0 0 90 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M23,68.9V36.2c0-6.3,2.8-10.3,6.4-12.1c2.9-1.5,6.3-1.5,9.2,0c3.6,1.8,6.4,5.9,6.4,12V47
         c0.2-0.1,0.4-0.1,0.6-0.1h3.3c0.2,0,0.4,0,0.5,0.1c3.6,0.3,6.5,3,7.1,6.5c0.3-0.1,0.7-0.2,1-0.2h3.3c0.2,0,0.4,0,0.5,0.1
         c4.7,0.7,6.6,3.6,7.2,7.2c0.1,0,0.2,0,0.4,0h3.3c0.2,0,0.4,0,0.5,0.1c9,1.4,8.8,10.3,8.8,17.5c0,3.4,0.1,6.8,0.2,10.1
         c0,0.1,0,0.2,0,0.3c-0.4,8.1-4.1,14.5-7.9,21l-0.3,0.6c-1.4,2.6-3.4,4.9-5.8,6.7c-2.2,1.5-4.8,2.4-7.5,2.4H32
         c-2.7,0.1-5.2-1.3-6.6-3.6c-1.5-2.5-2.4-5.2-2.6-8.1L5.1,80.7c-1.4-1.9-2.6-3.9-3.5-6C0.8,72.9,0.2,71,0.1,69
         c-0.2-1.9,0-3.8,0.8-5.6c0.7-1.6,2-2.9,3.6-3.6c1.5-0.6,3.2-0.7,4.7-0.3c2.1,0.5,4.1,1.4,5.8,2.8c1.4,1.2,3.8,3.1,6.1,5L23,68.9
         L23,68.9z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M-15.1-12.7"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={"close"}
          transition={{ duration }}
        />
        <motion.path
          d="M18.5,32c0,0-0.6,0-1.3,0h-6.7c-0.7,0-1.3,0-1.3,0l0,0c0,0,0.6,0,1.3,0h6.7C17.9,32,18.5,32,18.5,32L18.5,32z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={"close"}
          transition={{ duration }}
        />

        <motion.path
          d="M60.6,32c0,0-0.7,0-1.5,0h-7.4c-0.8,0-1.5,0-1.5,0v0c0,0,0.7,0,1.5,0h7.4C59.9,32,60.6,32,60.6,32L60.6,32z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={"close"}
          transition={{ duration }}
        />

        <motion.path
          d="M23,22.7c0,0-0.5-0.4-1.1-1l-5.6-4.8c-0.6-0.5-1.1-1-1.1-1l0,0c0,0,0.5,0.4,1.1,1l5.6,4.8C22.5,22.3,23,22.7,23,22.7
          L23,22.7z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={"close"}
          transition={{ duration }}
        />
        <motion.path
          d="M33.7,18.5c0,0,0-0.6,0-1.4l0-7.2c0-0.8,0-1.4,0-1.4l0,0c0,0,0,0.6,0,1.4l0,7.2C33.7,17.9,33.7,18.5,33.7,18.5L33.7,18.5z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={"close"}
          transition={{ duration }}
        />

        <motion.path
          d="M45,23c0,0,0.5-0.4,1-0.9l5-4.4c0.6-0.5,1-0.9,1-0.9l0,0c0,0-0.5,0.4-1,0.9l-5,4.4C45.5,22.6,45,23,45,23L45,23z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sunVariants}
          custom={"close"}
          transition={{ duration }}
        />
      </motion.svg>
    </motion.button>
  )
}

export default ExpandToggle
