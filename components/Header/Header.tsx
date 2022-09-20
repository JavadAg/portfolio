import React, { useEffect, useRef, useState } from "react"
import styles from "./Header.module.scss"
import ModeToggle from "./ModeToggle/ModeToggle"
import Sidebar from "./Sidebar/Sidebar"
import Logo from "./Logo/Logo"
import Navbar from "./Navbar/Navbar"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { Item } from "../../types/navmenu.types"

const itemIds: Item[] = [
  { id: "Home", link: "home" },
  { id: "About", link: "about" },
  { id: "Skills", link: "skills" },
  { id: "Works", link: "works" },
  { id: "Contact", link: "contact" }
]

const Header = ({ fullpageApi }) => {
  const router = useRouter()

  const selected = useRef("/")

  useEffect(() => {
    router.push("/")
  }, [])

  const handleLink = (item: Item) => {
    /*  selected.current = item.link
    router.push(`#${item.link}`) */
    fullpageApi.moveTo(item.link)
  }

  return (
    <header className={styles.header_wrapper}>
      <Logo handleLink={handleLink} />
      <div className={styles.right_side}>
        <ModeToggle />
        <Sidebar
          itemIds={itemIds}
          handleLink={handleLink}
          selected={selected.current}
        />
      </div>
      <Navbar
        itemIds={itemIds}
        handleLink={handleLink}
        selected={selected.current}
      />
    </header>
  )
}

export default Header
