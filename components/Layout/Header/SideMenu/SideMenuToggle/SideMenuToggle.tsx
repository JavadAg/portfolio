import * as React from 'react'
import { motion } from 'framer-motion'
import styles from './SideMenuToggle.module.scss'

export const SideMenuToggle = ({ toggle, isOpen }) => (
  <motion.button
    animate={isOpen ? 'open' : 'closed'}
    className={styles.toggle_sidebar_button}
    onClick={toggle}
  >
    <motion.svg
      width='28'
      height='28'
      viewBox='0 0 25 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        transition={{ duration: 0.3 }}
        variants={{
          closed: { d: 'M12.7,4.8h11.6', pathLength: [0, 1] },
          open: { d: 'M6.2,22.1l16-16.6', pathLength: [0, 1] }
        }}
      />
      <motion.path
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        variants={{
          closed: { d: 'M3.7,14h20.6', opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.path
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        transition={{ duration: 0.3 }}
        variants={{
          closed: { d: 'M15.1,23.2H3.7', pathLength: [0, 1] },
          open: { d: 'M5.9,6l16.3,16.1', pathLength: [0, 1] }
        }}
      />
    </motion.svg>
  </motion.button>
)
