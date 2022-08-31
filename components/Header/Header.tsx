import React, { useState, useEffect } from "react"

import { motion } from "framer-motion"

const menus = [
  {
    text: "About"
  },
  {
    text: "Skills"
  },
  {
    text: "Home"
  },
  {
    text: "Works"
  },
  {
    text: "Contact"
  }
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState("Menu")
  const [id, setId] = useState("Home")
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const position = window.scrollY

    if (position > 300) {
      setVisible(true)
    } else if (position < 300) {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
  })

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="relative ">
      {/*   <button
        onClick={scrollTop}
        className={`invisible lg:visible xl:visible fixed flex rounded-tl-full justify-center items-center z-40 right-0 bottom-0 w-12 h-12 bg-[#82A4A2] duration-500  group overflow-hidden transition-all  ease-in-out    ${
          visible
            ? "visible animate-opacityscroll"
            : "invisible animate-opacityscrollinvis"
        }`}
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-[#2F4858] group-hover:h-full opacity-90">
          x
        </span>
      </button> */}
    </div>
  )
}

export default Header
