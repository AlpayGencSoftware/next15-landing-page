import React from 'react'
import { FeatureList } from '../../../constant/Feature'

interface FeatureItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = () => {
  return (
   <div className='pt-24 pb-16 bg-gray-50'>
    <div className='w-[80%] mx-auto text-center'> 
        <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900'>
            Its Time To Build Your Own Website
        </h1>
    </div>
    <div className='w-[80%] mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
      {(FeatureList as FeatureItem[]).map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-xl hover:scale-105 group-hover:scale-105 cursor-pointer active:scale-100"
        >
          <div className="text-4xl mb-4 transition-transform duration-300 hover:scale-300 cursor-pointer">
            {item.icon}
          </div>
          <h2 className='font-bold text-lg mb-2'>{item.title}</h2>
          <p className='text-gray-600 text-sm'>{item.description}</p>
        </div>
      ))}
    </div>
   </div>
  )
}

export default Feature