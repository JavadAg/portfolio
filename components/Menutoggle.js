import React from "react"

const MenuToggle = ({ open, menu, setOpen, setMenu }) => {
  return (
    <div
      onClick={() => (setOpen(!open), setMenu(open ? "Menu" : "Close"))}
      style={{ zIndex: 1 }}
      className="flex flex-row h-full justify-center group items-center "
    >
      <button className="relative flex justify-center content-center items-center cursor-pointer outline-none  w-36 bg-transparent  rounded-full ">
        <span
          aria-hidden="true"
          className="absolute flex justify-center item-center  transition-all duration-300 ease-custom1 m-0 w-12 h-12 opacity-50 bg-[#CDE5D5] rounded-full right-0 group-hover:w-full xs:group-hover:w-12"
        ></span>
        <span className="absolute transition-all duration-500	ease-custom1 text-slate-600 right-16 font-semibold group-hover:text-slate-900">
          {menu}
        </span>
        <div>
          <div className="absolute block w-5 bg-zinc-500 right-3.5 top-0">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                open && "opacity-0"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </div>
      </button>
    </div>
  )
}

export default MenuToggle
