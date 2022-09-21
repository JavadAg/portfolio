import React, { useRef } from "react"
import styles from "./Header.module.scss"
import ModeToggle from "./ModeToggle/ModeToggle"
import Sidebar from "./Sidebar/Sidebar"
import Logo from "./Logo/Logo"
import Navbar from "./Navbar/Navbar"
import { Item } from "../../types/navmenu.types"

const itemIds: Item[] = [
  { id: "Home", link: "home" },
  { id: "About", link: "about" },
  { id: "Skills", link: "skills" },
  { id: "Works", link: "works" },
  { id: "Contact", link: "contact" }
]

interface IProps {
  fullpageApi: React.MutableRefObject<any>
}

const Header: React.FC<IProps> = ({ fullpageApi }) => {
  const handleLink = (item: Item) => {
    fullpageApi.current.moveTo(item.link)
  }

  return (
    <header id="header" className={styles.header_wrapper}>
      <Logo handleLink={handleLink} />
      <div className={styles.right_side}>
        <ModeToggle />
        <Sidebar itemIds={itemIds} handleLink={handleLink} />
      </div>
      <Navbar itemIds={itemIds} handleLink={handleLink} />
    </header>
  )
}

export default Header
