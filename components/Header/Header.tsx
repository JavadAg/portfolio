import React, { useEffect, useRef, useState } from "react"
import styles from "./Header.module.scss"
import ModeToggle from "./ModeToggle/ModeToggle"
import Sidebar from "./Sidebar/Sidebar"
import Logo from "./Logo/Logo"
import Navbar from "../Navbar/Navbar"
import { useRouter } from "next/router"

const itemIds = [
  { id: "Home", link: "" },
  { id: "About", link: "about" },
  { id: "Skills", link: "skills" },
  { id: "Works", link: "works" },
  { id: "Contact", link: "contact" }
]

const Header = () => {
  const router = useRouter()

  let selected = useRef("")

  useEffect(() => {
    router.push("")
  }, [])

  const handleLink = (item) => {
    selected.current = item.link
    router.push({
      pathname: "/",
      hash: item.link
    })
  }

  return (
    <header className={styles.header_wrapper}>
      <Logo handleLink={handleLink} />
      <div className={styles.right_side}>
        <ModeToggle />
        <Sidebar
          itemIds={itemIds}
          handleLink={handleLink}
          selected={selected}
        />
      </div>
      <Navbar itemIds={itemIds} handleLink={handleLink} selected={selected} />
    </header>
  )
}

export default Header
