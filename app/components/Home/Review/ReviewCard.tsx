import React from 'react'
import Image from 'next/image'
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa'

type ReviewCardProps = {
    name: string
    image: string
    review: string
    star: number
    role: string
}

const ReviewCard = ({name, image, review, star, role}: ReviewCardProps) => {
  return (
    <div className="w-full relative mx-auto p-4 sm:p-6 bg-gradient-to-br from-white via-[#f7f6fb] to-[#f0eafd] rounded-2xl shadow-lg border border-gray-100">
      <div className='grid grid-cols-1 lg:grid-cols-4 items-center gap-4 sm:gap-8 mt-2'>
        {/* Image column */}
        <div className='col-span-1 flex justify-center mb-2 lg:mb-0'>
          <Image
            src={image}
            alt={name}
            width={224}
            height={224}
            className="rounded-full object-cover border-4 border-white shadow-md w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto"
          />
        </div>
        {/* Content column */}
        <div className='col-span-3 flex flex-col items-center lg:items-start'>
          <div className="w-full flex">
            <FaQuoteLeft className='w-7 h-7 text-purple-300 opacity-20 mb-1 self-start' />
          </div>
          <p className="mt-1 text-xs sm:text-sm md:text-base font-medium leading-[1.5rem] sm:leading-[2rem] text-gray-700 text-center lg:text-left">
            {review}
          </p>
          <div className="w-full flex justify-end">
            <FaQuoteRight className='w-7 h-7 text-purple-300 opacity-20 mt-1 self-end' />
          </div>
          <div className='flex items-center justify-center lg:justify-start mt-4 mb-2 sm:mt-6 sm:mb-4'>
            {Array.from({ length: star }).map((_, index) => (
              <FaStar key={index} className="w-5 h-5 text-yellow-400" />
            ))}
          </div>
          <h1 className="text-base sm:text-xl font-bold text-gray-900 text-center lg:text-left">{name}</h1>
          <p className="text-xs sm:text-sm text-gray-500 text-center lg:text-left">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard