import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const AboutR = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      height: 45,
      width: 45,
      x: mousePosition.x - 22,
      y: mousePosition.y - 22,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")
  return (
    <>
      <div
        id="About"
        className="relative mx-64 my-32 xs:mx-4 xs:my-16 sm:mx-6 sm:my-16 md:mx-16 md:my-24 lg:mx-24 lg:my-36 flex justify-center items-center  "
      >
        {/*  <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: "spring" }}
          className=" block before:content-[''] before:h-0.5 before:w-12 before:bg-black before:absolute before:rounded-2xl before:left-0 before:top-2 pl-14 text-xs capitalize "
        >
          a few word
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{
            duration: 0.5,
            type: "spring"
          }}
          className="my-2 text-lg capitalize mb-10"
        >
          About me
        </motion.div> */}
        <motion.p
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          /*   whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }} */
          className="justify-center items-center bg-[#eaeeec] rounded-xl p-5"
        >
          passionate about creating web applications and experiences on the web.
          currently a junior full-stack developer . I am passionate about coding
          and solving problems through code, and I am excited to work alongside
          other amazing programmers and learn so much more!
          <br /> In my free time, I enjoy playing video games and watching
          movies . Anyway enough about me, you are probably more interested in
          the work I am capable of . Take a look at my projects below. Make sure
          you click on each project to see the tools I used and other
          interesting information.
        </motion.p>
        <motion.div
          className="bg-red-500 z-50 h-[32px] w-[32px] rounded-full fixed top-0 left-0 pointer-events-none"
          variants={variants}
          animate={cursorVariant}
        />
      </div>
    </>
  )
}

export default AboutR
