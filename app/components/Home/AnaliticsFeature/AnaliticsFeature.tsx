import React from 'react'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import { CgArrowRight } from 'react-icons/cg'
const AnaliticsFeature = () => {
  return (
    <div className='pt-24 pb-16'>
      <div className='w-[95%] sm:w-[80%] md:w-[70%] lg:w-[90%] xl:w-[90%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='p-6'>
          <Image  src="/images/a.jpg" alt='Analitics Feature' width={800} height={800} className='object-contain'/>
        </div>
        <div className='p-6 lg:pl-12'>
          <h1 className='text-base font-semibold text-gray-500'>
            Analitics Feature
          </h1>
          <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900'>
            Analitics Feature
          </h1>
          <p className='mt-4 text-gray-600 text-sm font-medium leading-[2rem]'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
           
          </p>
          <ul className='mt-7 space-y-4 text-gray-600 text-sm font-medium leading-[2rem]'>
            <li className='flex items-center gap-2'>
             <FaCheckCircle className='text-green-500' />
             <p className='text-gray-600 text-sm font-medium leading-[2rem]'>
                Analitics Feature 1
              </p>
            </li>
            <li className='flex items-center gap-2'>
              <FaCheckCircle className='text-green-500' />
              <p className='text-gray-600 text-sm font-medium leading-[2rem]'>
                Analitics Feature 2
              </p>
            </li>
              <li className='flex items-center gap-2'>
                <FaCheckCircle className='text-green-500' />
                <p className='text-gray-600 text-sm font-medium leading-[2rem]'>
                  Analitics Feature 3
                </p>
              </li>
            </ul>
            <button className="mt-7 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-600 hover:to-indigo-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md transition-all duration-300 group hover:scale-105">
              Explore More
              <CgArrowRight className="inline-block transform transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </div>
    </div>
  )
}

export default AnaliticsFeature