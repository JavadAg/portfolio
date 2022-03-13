import React from "react"
import { motion } from "framer-motion"

import htmlIcon from "../assets/htmlicon.svg"
import cssIcon from "../assets/css.svg"
import reactIcon from "../assets/react.svg"
import mongoIcon from "../assets/mongodb.svg"
import expressIcon from "../assets/expressjs.svg"
import nodeIcon from "../assets/nodejs.svg"
import Image from "next/image"

const skills = [
  {
    text: "HTML",
    icon: htmlIcon
  },
  {
    text: "CSS",
    icon: cssIcon
  },
  {
    text: "React",
    icon: reactIcon
  },
  {
    text: "ExpressJS",
    icon: expressIcon
  },
  {
    text: "MangoDB",
    icon: mongoIcon
  },
  {
    text: "NodeJS",
    icon: nodeIcon
  }
]

const Skills = () => {
  return (
    <div
      id="Skills"
      className="relative mx-64 my-32 xs:mx-4 xs:my-16 sm:mx-6 sm:my-16 md:mx-16 md:my-24 lg:mx-24 lg:my-36"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, type: "spring" }}
        className=" block before:content-[''] before:h-0.5 before:w-12 before:bg-black before:absolute before:rounded-2xl before:left-0 before:top-2 pl-14 text-xs  capitalize"
      >
        check out
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{
          duration: 0.5,
          type: "spring"
        }}
        className=" block my-2 text-lg capitalize mb-10"
      >
        my skills
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className=" bg-[#eaeeec] rounded-xl p-5"
      >
        <ul className="grid place-items-center grid-cols-6 gap-4 xs:grid-cols-3 sm:grid-cols-4">
          {skills.map((skill) => (
            <li
              key={skill.text}
              className="flex flex-col justify-center items-center bg-1 shadow-md rounded-xl w-24 p-5 hover:scale-110 duration-300  xs:p-1 "
            >
              <Image width="35" height="35" src={skill.icon} />
              <h1 className="mt-5 text-sm font-semibold ">{skill.text}</h1>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default Skills
