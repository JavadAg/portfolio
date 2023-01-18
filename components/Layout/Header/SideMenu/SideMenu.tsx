import React, { useEffect } from 'react'
import styles from './SideMenu.module.scss'
import { motion, useCycle } from 'framer-motion'
import { SideMenuToggle } from './SideMenuToggle/SideMenuToggle'

const sidemenu = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 35px)`,
    transition: {
      type: 'tween',
      duration: 0.7
    }
  }),
  closed: {
    clipPath: 'circle(2px at 100% 30px)',
    transition: {
      delay: 0.5,
      duration: 0.7,
      type: 'tween'
    }
  }
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const variants1 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const SideMenu = ({ itemIds }: { itemIds: { id: string; link: string }[] }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset')
  }, [isOpen])

  return (
    <>
      <SideMenuToggle
        toggle={() => toggleOpen()}
        isOpen={isOpen}
      />

      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className={styles.sidebar_container}
        variants={sidemenu}
      >
        <motion.ul
          id='nav_menu'
          className={styles.sidebar_items}
          variants={variants}
        >
          {itemIds.map((item) => {
            return (
              <motion.li
                key={item.id}
                data-menuanchor={item.link}
                onClick={() => toggleOpen()}
                variants={variants1}
                whileHover={{ scale: 1.1 }}
              >
                <a
                  ref={React.createRef()}
                  href={item.link}
                >
                  {item.id}
                </a>
              </motion.li>
            )
          })}
        </motion.ul>
      </motion.div>
    </>
  )
}

export default SideMenu
