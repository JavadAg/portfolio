import React from "react"
import { motion } from "framer-motion"

const letters = "Hello !!"
const letters1 = "i'm Javad Aghebati"
const letters2 = "I'm a Full-Stack Developer"

const About = () => {
  const Letter = ({ children }) => {
    return (
      <pre
        className={
          "text-[#364954] duration-200  hover:animate-rubberband hover:text-[#62858A] "
        }
      >
        <span className="font-banner">{children}</span>
      </pre>
    )
  }
  return (
    <div
      id="Home"
      className="relative bg-400% animate-banner bg-gradient-to-tl from-[#CDE5D5] via-[#FDFBFB] to-[#5C9A98] w-full flex flex-col  h-screen justify-center items-center"
    >
      <div className="absolute bottom-0 left-0 w-full overflow-hidden ">
        <svg
          className="relative block w-full h-24 xs:h-12 sm:h-14 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g>
            <use
              className="animate-[moveforever_7s_cubic-bezier(.55,.5,.45,.5)_-2s_infinite] fill-[#A6C5BB]"
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
            />
            <use
              className="animate-[moveforever_10s_cubic-bezier(.55,.5,.45,.5)_-3s_infinite] fill-[#62858A]"
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
            />
            <use
              className="animate-[moveforever_13s_cubic-bezier(.55,.5,.45,.5)_-4s_infinite]  fill-[#2F4858]"
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
            />
            <use
              className="animate-[moveforever_20s_cubic-bezier(.55,.5,.45,.5)_-5s_infinite] fill-[#F7F7F7]"
              xlinkHref="#gentle-wave"
              x="48"
              y="7"
            />
          </g>
        </svg>
      </div>
      <div className="absolute flex flex-col justify-center items-center ">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="font-extrabold space-x-4 p-6 flex-wrap flex flex-row text-9xl xs:text-5xl sm:text-7xl md:text-8xl"
        >
          {letters.split("").map((letter, i) => (
            <Letter key={i}>{letter}</Letter>
          ))}
        </motion.div>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="font-extrabold flex-wrap flex flex-row text-6xl  xs:text-3xl sm:text-4xl md:text-5xl"
        >
          {letters1.split("").map((letter, i) => (
            <Letter key={i}>{letter}</Letter>
          ))}
        </motion.div>

        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="flex p-4 font-bold flex-wrap flex-row text-4xl  xs:text-2xl sm:text-2xl md:text-4xl"
        >
          {letters2.split("").map((letter, i) => (
            <Letter key={i}>{letter}</Letter>
          ))}
        </motion.div>

        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="pt-20 flex flex-row justify-center items-center space-x-6 xs:space-x-3 xs:text-sm"
        >
          <h5>
            Read{" "}
            <a className="font-bold " href="#About">
              about me
            </a>
          </h5>
          <h5>
            Leave me a{" "}
            <a className="font-bold" href="#message">
              message
            </a>
            :)
          </h5>
        </motion.div>
      </div>
    </div>
  )
}

export default About
