'use client'

import { useRef } from 'react'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout/Layout'
import Skills from '../components/Skills/Skills'
import Works from '../components/Works/Works'
import styles from '../styles/Home.module.scss'

export default function HomePage() {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ]

  return (
    <Layout sectionRefs={sectionRefs}>
      <main className={styles.main}>
        <Hero sectionRefs={sectionRefs} />
        <About sectionRefs={sectionRefs} />
        <Skills sectionRefs={sectionRefs} />
        <Works sectionRefs={sectionRefs} />
        <Contact sectionRefs={sectionRefs} />
      </main>
    </Layout>
  )
}
