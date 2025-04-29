'use client'
import React from 'react'
import Link from 'next/link'
import { navLinks } from '../../../constant/Constant'
import { HiBars3BottomRight } from 'react-icons/hi2'

const Navbar = ({openMobileNavbar}: {openMobileNavbar: () => void}) => {
  return (
    <div className='w-full bg-white fixed top-0 left-0 z-50 shadow-sm'>
        <div className='container mx-auto px-4 max-w-7xl'>
            <div className='flex items-center justify-between h-20'>
                {/* Logo */}
                <Link href={'/'}>
                    <h1 className='text-2xl font-bold'>
                        <span className='text-blue-500'>Next</span>
                        <span className='text-black'>15</span>
                    </h1>
                </Link>

                {/* Navbar Links */}
                <div className='hidden xl:flex items-center space-x-8'>
                    {navLinks.map((link) => (
                        <Link key={link.id} href={link.url}>
                            <p className='nav__link text-black'>{link.name}</p>
                        </Link>
                    ))}
                </div>

                {/*Buttons */}
                <div className='flex items-center space-x-4'>
                    <button className='md:px-8 md:py-3 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300'>Join Now</button> 
                    {/* Burger menu */} 
                    <HiBars3BottomRight onClick={openMobileNavbar} className='w-8 h-8 cursor-pointer text-black xl:hidden'/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar