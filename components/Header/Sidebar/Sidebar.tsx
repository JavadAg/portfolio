import React from "react"
import styles from "./Sidebar.module.scss"
import { motion } from "framer-motion"

const Sidebar = () => {
  return (
    <div>
      <div
        className={` inset-0 mx-0 my-0 bg-[#e4e6e5] h-screen fixed flex justify-center items-center ease-in-out duration-300 ${
          open ? " translate-x-0 " : "invisible translate-x-full"
        }`}
      >
        <motion.ul
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          {/*  {menus.map((menu) => (
            <li
              key={`link=${menu.text}`}
              className="relative flex p-5 leading-4 flex-row justify-center items-center"
            >
              <a
                href={`#${menu.text}`}
                className={`relative xs:text-4xl sm:text-5xl md:text-7xl lg:text-7xl text-7xl font-extrabold bg-gradient-to-r from-[#82A4A2] via-3 to-223541  bg-200% -bg-100% transition-all duration-300  ease-in-out
      text-transparent 
      bg-clip-text
      before:block before:content-[''] before:w-0 before:h-1 before:bottom-1 before:left-0 before:absolute 
      before:rounded-full
      before:bg-[#466671] before:transition-all before:duration-300 before:ease-in-out 
      xs:before:bottom-0 sm:before:bottom-0
      hover:bg-0% hover:before:w-full
     
      
      `}
              >
                {menu.text}
              </a>
            </li>
          ))} */}
        </motion.ul>
      </div>
    </div>
  )
}

export default Sidebar
