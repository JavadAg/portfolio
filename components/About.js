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
      <div className="absolute w-full bottom-0 left-0  overflow-hidden rotate-180 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className=" relative  block w-full h-24 xs:h-12 sm:h-14 md:h-20"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".2"
            className="fill-[#A6C5BB]"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-[#62858A]"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-[#2F4858]"
          ></path>
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
