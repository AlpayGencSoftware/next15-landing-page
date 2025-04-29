import Link from 'next/link'
import React from 'react'
import navLinks from '../../../constant/Constant'
import { IoMdClose } from 'react-icons/io'
import { CgClose } from 'react-icons/cg'

type MobileNavbarProps = {
  showMobileNavbar: boolean
  handleCloseMobileNavbar: () => void
}

const MobileNavbar = ({showMobileNavbar, handleCloseMobileNavbar}: MobileNavbarProps) => {
  const navOpen = showMobileNavbar ? "translate-x-0" : "-translate-x-full"

  {/* Mobile Navbar */} 
  return (
   <>
    <div 
      className={`fixed inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen ${navOpen}`}
      onClick={handleCloseMobileNavbar}
    ></div>
    <div className={`text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10006] ${navOpen}`}>
       { navLinks.map((link, index) => ( 
            <Link href={link.url} key={index}><p className='nav__link text-white text-[20px] ml-12 border-b-2 border-white pb-2 sm:text-[25px]'>{link.name}</p></Link>
        ))
       }
        {/* Close Button */} 
        <CgClose onClick={handleCloseMobileNavbar} className='absolute top-10 right-10 text-white text-2xl cursor-pointer'/>
    </div>
   </>
  )
}

export default MobileNavbar