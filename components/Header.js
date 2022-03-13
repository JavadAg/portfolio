import React, { useState, useEffect } from "react"
import {
  HomeIcon,
  AnnotationIcon,
  PhotographIcon,
  IdentificationIcon,
  ClipboardListIcon
} from "@heroicons/react/outline"
import Menutoggle from "./Menutoggle"
import { motion } from "framer-motion"

const menus = [
  {
    text: "About",
    icon: IdentificationIcon
  },
  {
    text: "Skills",
    icon: ClipboardListIcon
  },
  {
    text: "Home",
    icon: HomeIcon
  },
  {
    text: "Works",
    icon: PhotographIcon
  },
  {
    text: "Contact",
    icon: AnnotationIcon
  }
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState("Menu")
  const [id, setId] = useState("Home")
  const [visible, setVisible] = useState(false)
  console.log(open)
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
      <div
        style={{ zIndex: 3 }}
        className=" fixed flex justify p-2 justify-between w-full h-16 items-center bg-opacity-30 backdrop-blur-sm bg-slate-100"
      >
        <a
          onClick={() => setId("Home")}
          href={"#Home"}
          className="flex h-full w-16 flex-row justify-around items-center"
        >
          <svg className="fill-slate-700 " viewBox="0 0 227.1 227.1">
            <path d="M87.33 105.89c0 3.5.1 7-.02 10.5-.41 12.66-8.75 23.22-20.47 26.01-12.23 2.92-24.97-2.57-31.14-13.42-2.71-4.77-1.66-9.86 2.58-12.51 3.98-2.48 8.49-1.33 11.65 3.18 2.38 3.39 4.94 6.25 9.53 6.33 6.43.11 10.72-3.84 10.78-10.24.06-7.25-.01-14.5.03-21.75.03-6.09 3.52-10.1 8.69-10.07 4.95.03 8.29 3.94 8.4 9.97.07 4 .01 8 .01 12h-.04zM149.29 89.61c-.02-4.86 2.52-8.23 6.46-9.3 3.55-.96 7.33.5 9.22 4.02 7.59 14.2 15.12 28.44 22.54 42.74 2.25 4.33.56 9.5-3.41 11.72-4.18 2.33-9.08 1.11-11.55-3.49-7.62-14.19-15.02-28.49-22.45-42.78-.57-1.07-.67-2.38-.81-2.91zM142.59 131.06c-.03 4.89-4.07 9.01-8.71 8.88-4.53-.13-8.41-4.17-8.47-8.81-.06-4.74 4.02-9.07 8.6-9.12 4.6-.05 8.62 4.18 8.58 9.05z" />
            <circle
              cx="113.55"
              cy="112.57"
              r="99.1"
              className="fill-transparent stroke-slate-700 stroke-[4px]"
            />
          </svg>
        </a>
        <Menutoggle
          open={open}
          menu={menu}
          setOpen={setOpen}
          setMenu={setMenu}
        />
        <div
          className={` inset-0 mx-0 my-0 bg-[#e4e6e5] h-screen fixed flex justify-center items-center ease-in-out duration-300 ${
            open ? " translate-x-0 " : "invisible translate-x-full"
          }`}
        >
          <motion.ul
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            {menus.map((menu) => (
              <li
                key={`link=${menu.text}`}
                className="relative flex p-5 leading-4 flex-row justify-center items-center"
              >
                <a
                  onClick={() => (
                    setOpen(!open),
                    setMenu(open ? "Menu" : "Close"),
                    setId(`${menu.text}`)
                  )}
                  href={`#${menu.text}`}
                  className={`relative xs:text-4xl sm:text-5xl md:text-7xl lg:text-7xl text-7xl font-extrabold bg-gradient-to-r from-[#82A4A2] via-3 to-223541  bg-200% -bg-100% transition-all duration-300  ease-in-out

                  text-transparent 
                  
                  bg-clip-text
                  
                  before:block before:content-[''] before:w-0 before:h-1 before:bottom-1 before:left-0 before:absolute 
                  before:rounded-full
                  before:bg-[#466671] before:transition-all before:duration-300 before:ease-in-out 
                  xs:before:bottom-0 sm:before:bottom-0
                  hover:bg-0% hover:before:w-full
                  ${id == `${menu.text}` ? "bg-0% before:w-full " : ""}
                  
                  `}
                >
                  {menu.text}
                </a>
              </li>
            ))}
          </motion.ul>
          <span className="text-sm xs:text-xs absolute bottom-6">
            made by me, myself & i{" "}
          </span>
        </div>
      </div>

      <ul
        style={{ zIndex: 1 }}
        className="visible lg:invisible xl:invisible mx-auto inset-x-5 flex fixed justify-center xs:p-4 sm:p-2 items-center bottom-2 h-14 bg-[#d2e0d9] rounded-xl"
      >
        {menus.map((menu) => (
          <li key={`link=${menu.text}`} className=" w-11/12 p-1 z-10 ">
            <a
              onClick={() => setId(`${menu.text}`)}
              href={`#${menu.text}`}
              className={`
                   flex justify-center items-center flex-col 
                    ${id == `${menu.text}` ? "group " : ""} 
                  `}
            >
              <span className="relative h-6 w-6  block   group-first:-translate-y-8 duration-500 group-first:text-[#62858A]">
                {<menu.icon />}
              </span>
              <span className="absolute flex justify-center items-center font-semibold duration-100 opacity-0 bg-[#62858A] text-white px-2 py-1 text-xs tracking-widest rounded-3xl group-last:opacity-100 group-last:-translate-y-0">
                {menu.text}
              </span>
              <div
                className="before:content-[''] before:h-6 before:w-6 before:bg-transparent before:shadow-customleft   before:shadow-[#d2e0d9] before:absolute before:rounded-full before:-left-18px before:top-1
              after:content-[''] after:h-6 after:w-6  after:bg-transparent after:shadow-customright   after:shadow-[#d2e0d9] after:absolute after:rounded-full after:-right-18px after:top-1
              absolute group-last:duration-100 rounded-full bg-white -z-10 -top-2/4 xs:w-16 xs:h-16 w-20 h-20 opacity-0 group-last:bg-[#d2e0d9]  group-last:opacity-100 "
              ></div>
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={scrollTop}
        className={`invisible lg:visible xl:visible fixed flex rounded-tl-full justify-center items-center z-40 right-0 bottom-0 w-12 h-12 bg-[#82A4A2] duration-500  group overflow-hidden transition-all  ease-in-out    ${
          visible
            ? "visible animate-opacityscroll"
            : "invisible animate-opacityscrollinvis"
        }`}
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-[#2F4858] group-hover:h-full opacity-90"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute left-4 top-5"
          fill="#543634"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 11l5-5m0 0l5 5m-5-5v12"
          />
        </svg>
      </button>
    </div>
  )
}

export default Header
