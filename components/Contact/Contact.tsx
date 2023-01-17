import React from 'react'
import { motion } from 'framer-motion'
import styles from './Contact.module.scss'
import Footer from '../Footer/Footer'

const Contact = ({ sectionRefs }) => {
  const contact_title_variants = {
    initial: { scale: 0, opacity: 0 },
    inView: { scale: 1, opacity: 1 }
  }

  const contact_variants = {
    initial: { scale: 0, opacity: 0 },
    inView: {
      opacity: 1,
      scale: 1
    }
  }

  return (
    <div
      id='contact'
      ref={sectionRefs[4]}
      className='section'
    >
      <motion.div className={`${styles.contact_container}`}>
        <motion.span
          viewport={{ once: true }}
          initial='initial'
          whileInView='inView'
          transition={{ duration: 1, type: 'tween' }}
          variants={contact_title_variants}
        >
          Contact
        </motion.span>
        <motion.div
          viewport={{ once: true }}
          initial='initial'
          whileInView='inView'
          transition={{ duration: 1, type: 'tween', ease: 'easeOut' }}
          variants={contact_variants}
          className={styles.contact_wrapper}
        >
          <motion.span>
            At present, I am in search of new opportunities. If you have any
            questions, want to collaborate, or just want to say hello, feel free
            to reach out. I’ll try my best to get back to you!
          </motion.span>

          <a
            target={'_blank'}
            rel='noreferrer'
            href='mailto:j.aghebati93@gmail.com?Subject=Hello'
          >
            SAY HELLO
          </a>
        </motion.div>
        <Footer />
      </motion.div>
    </div>
  )
}

export default Contact
