'use client'
import React, { useEffect, useState } from 'react'
import navLinks from '../../../constant/Constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'


type NavbarProps = {
  openMobileNavbar: () => void
}

const Navbar = ({openMobileNavbar}: NavbarProps) => {
const [navBg, setNavBg] = useState(false);

useEffect(() => {
    const handleScroll = () => {
       if(window.scrollY >= 90) setNavBg(true)
       else setNavBg(false)  
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className={`fixed ${navBg ? "bg-white shadow-md" : "bg-transparent"} w-full transition-all duration-300 h-[12vh] z-[1000]`}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* Logo */}
            <h1 className='text-xl md:text-2xl font-bold'><span className='text-3xl text-blue-500'>AAP</span>log</h1>
            {/* Navbar Links */}
            <div className='hidden lg:flex items-center space-x-8'>
                {navLinks.map((link) => (
                    <Link key={link.id} href={link.url}><p className='nav__link text-black'>{link.name}</p></Link>
                ))}
            </div>
            {/*Buttons */}
            <div className='flex items-center space-x-4'>
                <button className='md:px-8 md:py-3 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300'>Join Now</button> 
           {/* Burger menu */} 
                <HiBars3BottomRight onClick={openMobileNavbar} className='w-8 h-8 cursor-pointer text-black lg:hidden'/> 
            </div>
        </div>
    </div>
  )
}

export default Navbar