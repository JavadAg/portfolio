import React, { useState, useEffect } from "react"
import styles from "./Header.module.scss"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"
import ModeToggle from "./ModeToggle/ModeToggle"

const Header = () => {
  const router = useRouter()

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className={styles.header_wrapper}>
      <a onClick={() => router.push("/")} className={styles.logo_wrapper}>
        <svg viewBox="0 0 227.1 227.1">
          <path d="M87.33 105.89c0 3.5.1 7-.02 10.5-.41 12.66-8.75 23.22-20.47 26.01-12.23 2.92-24.97-2.57-31.14-13.42-2.71-4.77-1.66-9.86 2.58-12.51 3.98-2.48 8.49-1.33 11.65 3.18 2.38 3.39 4.94 6.25 9.53 6.33 6.43.11 10.72-3.84 10.78-10.24.06-7.25-.01-14.5.03-21.75.03-6.09 3.52-10.1 8.69-10.07 4.95.03 8.29 3.94 8.4 9.97.07 4 .01 8 .01 12h-.04zM149.29 89.61c-.02-4.86 2.52-8.23 6.46-9.3 3.55-.96 7.33.5 9.22 4.02 7.59 14.2 15.12 28.44 22.54 42.74 2.25 4.33.56 9.5-3.41 11.72-4.18 2.33-9.08 1.11-11.55-3.49-7.62-14.19-15.02-28.49-22.45-42.78-.57-1.07-.67-2.38-.81-2.91zM142.59 131.06c-.03 4.89-4.07 9.01-8.71 8.88-4.53-.13-8.41-4.17-8.47-8.81-.06-4.74 4.02-9.07 8.6-9.12 4.6-.05 8.62 4.18 8.58 9.05z" />
        </svg>
      </a>
      <ModeToggle />
    </div>
  )
}

export default Header
