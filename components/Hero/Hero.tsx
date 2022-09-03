import React, { useEffect, useRef, useState } from "react"
import styles from "./Hero.module.scss"
import { useRouter } from "next/router"

const Hero = () => {
  const router = useRouter()

  let textRef = useRef<HTMLSpanElement>()

  /*   const [visible, setVisible] = useState(false)
   */

  let words = ["Developer", "Gamer", "Photographer"],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 5,
    speed = 100

  const typing = () => {
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          skip_count = skip_count + 1
          if (skip_count == skip_delay) {
            forwards = false
            skip_count = 0
          }
        }
      } else {
        if (offset == 0) {
          forwards = true
          i = i + 1
          offset = 0
          if (i >= len) {
            i = 0
          }
        }
      }

      if (skip_count == 0) {
        if (forwards) {
          offset = offset + 1
        } else {
          offset = offset - 1
        }
      }

      part = words[i].slice(0, offset)
      textRef.current!.textContent = part
    }, speed)
  }

  /*  const toggleVisible = () => {
    const position = window.scrollY

    if (position > 300) {
      setVisible(true)
    } else if (position < 300) {
      setVisible(false)
    }
  } */

  /* useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
  })
 */
  /* const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  } */

  useEffect(() => {
    typing()
  }, [])

  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.hero_texts}>
        <span>Hi, I'm</span>
        <span>Javad Aghebati</span>
        <div className={styles.typing_slider_wrapper}>
          <span>I'm</span>
          <span className={styles.typing_slider} ref={textRef}></span>
        </div>
      </div>
      <button>Download Resume</button>
      <div className={styles.arrows} onClick={() => router.push("#about")}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Hero
