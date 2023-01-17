import React from 'react'
import dynamic from 'next/dynamic'
import styles from './Layout.module.scss'
import Header from './Header/Header'
import ContactSidebar from './ContactSidebar/ContactSidebar'
import Navbar from './Navbar/Navbar'

const Layout = ({ children, sectionRefs }) => {
  const Canvas = dynamic(() => import('../Canvas/Canvas'), {
    ssr: false
  })

  const itemIds = [
    { id: 'Home', link: '#home' },
    { id: 'About', link: '#about' },
    { id: 'Skills', link: '#skills' },
    { id: 'Works', link: '#works' },
    { id: 'Contact', link: '#contact' }
  ]

  return (
    <div className={styles.layout}>
      <Header sectionRefs={sectionRefs} />
      <ContactSidebar />
      <Canvas />
      <Navbar
        itemIds={itemIds}
        sectionRefs={sectionRefs}
      />
      {children}
    </div>
  )
}

export default Layout
