import React, { MutableRefObject } from 'react'
import styles from './Navbar.module.scss'
import { motion } from 'framer-motion'
import { Scrollspy } from '@makotot/ghostui'

const Navbar = ({
  itemIds,
  sectionRefs
}: {
  itemIds: {
    id: string
    link: string
  }[]
  sectionRefs: MutableRefObject<HTMLDivElement>[]
}) => {
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
    <motion.div
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
            {itemIds.map((item, i: number) => {
              return (
                <motion.li
                  variants={items}
                  transition={{ duration: 0.5, type: 'tween' }}
                  key={item.id}
                  className={
                    currentElementIndexInViewport === i
                      ? `${styles.active_link}`
                      : ''
                  }
                >
                  <a href={item.link}>{item.id}</a>
                </motion.li>
              )
            })}
          </motion.ul>
        )}
      </Scrollspy>
      <motion.div />
    </motion.div>
  )
}

export default Navbar
