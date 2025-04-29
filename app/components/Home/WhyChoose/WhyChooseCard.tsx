import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { CgArrowRight } from 'react-icons/cg'

type WhyChooseCardProps = {
    image: string
    title: string
    description: string
    linkText: string
    linkUrl: string
}

function WhyChooseCard({image, title, description, linkText, linkUrl}: WhyChooseCardProps) {
  return (
    <div className="group flex flex-col items-center transition-all duration-300 hover:scale-105">
      <div className="transition-transform duration-300 group-hover:rotate-12">
        <Image 
          src={image} 
          alt={title} 
          width={100} 
          height={100} 
          className='w-16 h-16 object-contain mx-auto'
        />
      </div>
      <h3 className='text-lg font-bold mt-4 text-center group-hover:text-blue-600 transition-colors duration-300'>{title}</h3>
      <p className='text-gray-600 mt-2 text-center group-hover:text-gray-800 transition-colors duration-300'>{description}</p>
      <Link 
        href={linkUrl} 
        className='text-blue-500 mt-4 text-center group-hover:text-blue-600 transition-all duration-300 cursor-pointer flex items-center gap-1'
      > 
        {linkText} 
        <CgArrowRight className='inline-block transform transition-transform duration-300 group-hover:translate-x-1'/>
      </Link>
    </div>
  )
}

export default WhyChooseCard