import React, { useState } from "react"
import { motion } from "framer-motion"

const Contact = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [mail, setMail] = useState("")
  const [message, setMessage] = useState("")

  const submithandler = (e) => {
    e.preventDefault()
    const data = {
      name: fname + lname,
      mail,
      message
    }
    fetch(`api/contact`, { method: "POST", body: JSON.stringify(data) }).then(
      (response) => {
        console.log(response)
        if (response.status === 200) {
          alert("success")
        } else {
          alert("error")
        }
      }
    )
  }

  return (
    <div
      id="Contact"
      className="mx-64 my-32 xs:mx-4 xs:my-16 sm:mx-6 sm:my-16 md:mx-16 md:my-24 lg:mx-24 lg:my-36"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative block before:content-[''] before:h-0.5 before:w-12 before:bg-black before:absolute before:rounded-2xl before:left-0 before:top-2 pl-14 text-xs capitalize"
      >
        reach me
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{
          duration: 0.5,
          type: "spring"
        }}
        className="relative block my-2 text-lg capitalize mb-10"
      >
        contact
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex flex-1 justify-center items-center  bg-[#eaeeec] rounded-xl p-5"
      >
        <form onSubmit={submithandler} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                onChange={(e) => {
                  setFname(e.target.value)
                }}
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                required={true}
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                onChange={(e) => {
                  setLname(e.target.value)
                }}
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                required={true}
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail
              </label>
              <input
                onChange={(e) => {
                  setMail(e.target.value)
                }}
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                required={true}
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
                className=" no-resize appearance-none block w-full  bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                required={true}
                id="message"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center flex flex-row justify-center items-center">
            <div className="md:w-1/3">
              <button
                type="submit"
                className="
                shadow bg-[#82A4A2]  focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded
                 relative  group overflow-hidden inline-block"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-[#2F4858] group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-slate-100">
                  Send
                </span>
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact
