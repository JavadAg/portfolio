import React from "react"
import { motion } from "framer-motion"

const Work = () => {
  return (
    <div
      id="Works"
      className="mx-64 my-32 xs:mx-4 xs:my-16 sm:mx-6 sm:my-16 md:mx-16 md:my-24 lg:mx-24 lg:my-36"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative block before:content-[''] before:h-0.5 before:w-12 before:bg-black before:absolute before:rounded-2xl before:left-0 before:top-2 pl-14 text-xs capitalize "
      >
        take a look at
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{
          duration: 0.5,
          type: "spring"
        }}
        className="relative block my-2 text-lg capitalize mb-10"
      >
        projects
      </motion.div>

      <motion.ul
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center bg-[#eaeeec] rounded-xl p-5"
      >
        <li className="text-2xl">Soon !</li>
      </motion.ul>
    </div>
  )
}

export default Work
