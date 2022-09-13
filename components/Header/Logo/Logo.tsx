import { useRouter } from "next/router"
import React from "react"
import styles from "./Logo.module.scss"
import { motion } from "framer-motion"

const Logo = ({ handleLink }) => {
  const logo_variants = {
    animate: {
      opacity: [0, 1],
      transition: {
        duration: 1
      },
      pathLength: [0, 1]
    }
  }

  const handleClick = () => {
    handleLink({ link: "" })
  }

  return (
    <motion.a
      className={styles.logo_wrapper}
      initial={false}
      animate="animate"
      whileTap="animate"
      onClick={handleClick}
    >
      <motion.svg
        layout
        width="44"
        height="28"
        viewBox="-7 0 80 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          layout
          variants={logo_variants}
          stroke="currentColor"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M1.9,15.4c0.2,0.8,0.5,1.8,1.1,2.9c0.3,0.7,1,1.8,2.1,3c0.6,0.6,1.7,1.7,3.6,2.4c1.8,0.7,3.4,0.6,4.1,0.6
      c0.4,0,1.9-0.2,3.6-1.1c0.6-0.3,1.6-0.8,2.6-1.9c0.2-0.2,0.9-1,1.4-2.2c0.4-1,0.6-2,0.7-2.8c0.2-2.1,0.2-8-0.1-16.1"
        />
        <motion.ellipse
          layout
          variants={logo_variants}
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="40.6"
          cy="23.3"
          rx="0.1"
          ry="0.1"
        />
        <motion.line
          layout
          variants={logo_variants}
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="51.7"
          y1="0.1"
          x2="65.5"
          y2="24.3"
        />
      </motion.svg>
    </motion.a>
  )
}

export default Logo
