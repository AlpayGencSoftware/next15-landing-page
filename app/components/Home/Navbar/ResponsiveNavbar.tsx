'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
const ResponsiveNavbar = () => {
const [showMobileNavbar, setShowMobileNavbar] = useState(false)
const handleShowMobileNavbar = () => {
  setShowMobileNavbar(true)
}
const handleCloseMobileNavbar = () => {
  setShowMobileNavbar(false)
}

  return (
   <>
      <Navbar openMobileNavbar={handleShowMobileNavbar}/>
      <MobileNavbar showMobileNavbar={showMobileNavbar} handleCloseMobileNavbar={handleCloseMobileNavbar}/>  
   </>
  )
}

export default ResponsiveNavbar