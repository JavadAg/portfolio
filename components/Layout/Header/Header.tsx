import React from 'react'
import styles from './Header.module.scss'
import DarkmodeToggle from './DarkmodeToggle/DarkmodeToggle'
import Logo from './Logo/Logo'
import SideMenu from './SideMenu/SideMenu'

const itemIds = [
  { id: 'Home', link: '#home' },
  { id: 'About', link: '#about' },
  { id: 'Skills', link: '#skills' },
  { id: 'Works', link: '#works' },
  { id: 'Contact', link: '#contact' }
]

const Header = ({ sectionRefs }) => {
  return (
    <header
      id='header'
      className={styles.header_wrapper}
    >
      <Logo />
      <div className={styles.right_side}>
        <DarkmodeToggle />
        <SideMenu itemIds={itemIds} />
      </div>
    </header>
  )
}

export default Header
