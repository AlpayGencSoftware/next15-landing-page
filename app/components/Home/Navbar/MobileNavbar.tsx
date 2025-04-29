'use client'
import React from 'react'
import Link from 'next/link'
import { navLinks } from '../../../constant/Constant'
import { IoClose } from 'react-icons/io5'

type MobileNavbarProps = {
  closeMobileNavbar: () => void
}

const MobileNavbar = ({closeMobileNavbar}: MobileNavbarProps) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 xl:hidden'>
      <div className='fixed right-0 top-0 h-full w-[300px] bg-white p-8'>
        <div className='flex justify-end'>
          <IoClose onClick={closeMobileNavbar} className='w-8 h-8 cursor-pointer text-black'/>
        </div>
        <div className='mt-8 flex flex-col space-y-6'>
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url} onClick={closeMobileNavbar}>
              <p className='text-lg font-medium text-black hover:text-blue-500 transition-colors'>{link.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar