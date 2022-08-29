import React from "react"
import { motion } from "framer-motion"

const AboutR = () => {
  return (
    <>
      <div
        id="About"
        className="relative mx-64 my-32 xs:mx-4 xs:my-16 sm:mx-6 sm:my-16 md:mx-16 md:my-24 lg:mx-24 lg:my-36 "
      >
        <motion.div
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
        </motion.div>
        <motion.p
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
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
      </div>
    </>
  )
}

export default AboutR
