import React, { MutableRefObject } from 'react'
import styles from './Header.module.scss'
import DarkmodeToggle from './DarkmodeToggle/DarkmodeToggle'
import Logo from './Logo/Logo'
import SideMenu from './SideMenu/SideMenu'

const Header = ({ itemIds }: { itemIds: { id: string; link: string }[] }) => {
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
