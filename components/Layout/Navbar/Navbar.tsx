import React, { createRef, useRef } from 'react'
import styles from './Navbar.module.scss'
import { motion } from 'framer-motion'
import { Item } from '../../../types/navmenu.types'
import ScrollSpy from 'react-scrollspy-navigation'
import { Scrollspy } from '@makotot/ghostui'

interface IProps {
  itemIds: Item[]
  sectionRefs: any
}

const Navbar: React.FC<IProps> = ({ itemIds, sectionRefs }) => {
  const list = {
    initial: { opacity: 0 },
    inView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: 'beforeChildren',
        duration: 0.5,
        type: 'spring'
      }
    }
  }

  const items = {
    initial: { x: 400 },
    inView: { x: 0 }
  }

  return (
    <div
      id='navbar'
      className={styles.navbar_container}
    >
      <Scrollspy sectionRefs={sectionRefs}>
        {({ currentElementIndexInViewport }) => (
          <motion.ul
            variants={list}
            id='nav_menu'
            initial='initial'
            animate='inView'
            className={styles.navbar_wrapper}
          >
            {itemIds.map((item: Item, i: number) => {
              return (
                <li
                  key={item.id}
                  className={
                    currentElementIndexInViewport === i
                      ? `${styles.active_link}`
                      : ''
                  }
                >
                  <a href={item.link}>{item.id}</a>
                </li>
              )
            })}
          </motion.ul>
        )}
      </Scrollspy>
      <motion.div />
    </div>
  )
}

export default Navbar
