import Header from "../components/Header"
import About from "../components/About"
import AboutR from "../components/AboutR"
import Skill from "../components/Skills"
import Footer from "../components/Footer"
import Work from "../components/Work"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div className="bg-[#f7f7f7] ">
      <Header />
      <About />
      <AboutR />
      <Skill />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}
