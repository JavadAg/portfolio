import dynamic from "next/dynamic"
import React, { useEffect } from "react"
import styles from "./About.module.scss"
import { renderCanvas } from "../Canvas/Sax"

const Test2 = dynamic(() => import("../Canvas/Test2"), {
  ssr: false
})

/* const Canvas = dynamic(() => import("../Canvas/Canvas"), {
  ssr: false
})
 */
const About = () => {
  /* useEffect(() => {
    renderCanvas()
  }, []) */
  return (
    <div className={styles.about_container}>
      <div className={styles.about_me}>
        <p>Hi, I'm</p>
        <p>Javad Aghebati</p>
        <p>I'm</p>
        <p>
          I'm a Software Engineer based in Paris. I consider myself as a
          versatile developer, able to adapt to all sorts of constraints,
          languages and technologies. I build complete products, from apps to
          backend, and love doing it. Don't hesitate to get in touch !
        </p>
      </div>
      <div className={styles.canvas}>
        {/* <Canvas /> */}
        {/* <canvas
          className="bg-skin-base pointer-events-none absolute inset-0"
          id="canvas"
        ></canvas> */}
        <Test2 />
      </div>
    </div>
  )
}

export default About
