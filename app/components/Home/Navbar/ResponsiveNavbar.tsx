'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

const ResponsiveNavbar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false)

  const openMobileNavbar = () => setShowMobileNavbar(true)
  const closeMobileNavbar = () => setShowMobileNavbar(false)

  return (
    <>
      <Navbar openMobileNavbar={openMobileNavbar} />
      {showMobileNavbar && <MobileNavbar closeMobileNavbar={closeMobileNavbar} />}
    </>
  )
}

export default ResponsiveNavbar