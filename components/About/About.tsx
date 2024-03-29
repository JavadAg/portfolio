import React, { MutableRefObject } from 'react'
import styles from './About.module.scss'
import Image from 'next/image'
import aboutPic from '../../public/my_photo.jpg'
import { motion } from 'framer-motion'

const about_title_variants = {
  initial: { scale: 0, opacity: 0 },
  inView: { scale: 1, opacity: 1 }
}

const paragraph_variants = {
  initial: { x: -500, opacity: 0 },
  inView: { x: 0, opacity: 1 }
}

const my_photo_variants = {
  initial: { x: 500, opacity: 0 },
  inView: { x: 0, opacity: 1 }
}

const About = ({
  sectionRefs
}: {
  sectionRefs: MutableRefObject<HTMLDivElement>[]
}) => {
  return (
    <motion.div
      id='about'
      className={`${styles.about_container}`}
    >
      <motion.span
        initial='initial'
        whileInView='inView'
        viewport={{ once: true }}
        variants={about_title_variants}
        transition={{ duration: 1, type: 'tween' }}
      >
        About
      </motion.span>
      <motion.div
        ref={sectionRefs[1]}
        initial='initial'
        whileInView='inView'
        viewport={{ once: true }}
        variants={about_title_variants}
        className={`${styles.about_me}`}
      >
        <motion.div
          variants={my_photo_variants}
          transition={{ duration: 1.5, type: 'tween' }}
          className={styles.about_photo}
        >
          <Image
            src={aboutPic}
            alt='about_photo'
          />
        </motion.div>
        <motion.p
          id='about_me_text'
          variants={paragraph_variants}
          transition={{ duration: 1.5, type: 'tween' }}
        >
          Front-end web developer passionate about creating web applications and
          experiences on the web . I started web development since 2021 and
          currently learning and improving my skills, excited to work alongside
          other amazing programmers and learn so much more.
          <br /> when confronted with a challenge, may it be technical or not, I
          never give up until I found a solution. In my free time, I enjoy
          playing video games and watching movies.
          <br /> Anyway enough about me, you are probably more interested in the
          work I am capable of. Take a look at my projects. Make sure you click
          on each project to see the tools I used and other interesting
          information.
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default About
