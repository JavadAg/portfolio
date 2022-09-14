import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Skills from "../components/Skills/Skills"
import Works from "../components/Works/Works"
import styles from "../styles/Home.module.scss"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import Hero from "../components/Hero/Hero"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ContactSidebar from "../components/ContactSidebar/ContactSidebar"

export default function Home() {
  const Canvas = dynamic(() => import("../components/Canvas/Canvas"), {
    ssr: false
  })

  return (
    <motion.div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <ContactSidebar />
        <Canvas />
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}
