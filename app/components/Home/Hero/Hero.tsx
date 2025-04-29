import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full min-h-screen bg-[#f7f6fb] py-12 md:py-20'>
        <div className='container mx-auto px-4'>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Sol Taraf - İçerik */}
            <div className='space-y-8'>
              <div className='inline-flex py-2 px-2 rounded-full shadow-md bg-white'>
                  <div className='px-3 py-1 rounded-full bg-blue-700 text-sm md:text-base text-white'>News</div>
                  <p className='ml-3 text-sm md:text-base font-medium text-black'>
                      Get 20% off on your first order
                  </p>
              </div>
              
              <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight'>
                  The best products for your home
              </h1>
              
              <p className='text-lg md:text-xl text-gray-600 max-w-xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, illum pariatur. Incidunt saepe quisquam dolor dolorum autem ut itaque sed? Quasi et ratione aspernatur saepe officiis architecto earum fuga hic!
              </p>
              
              <div className='flex items-center space-x-6 pt-4'>
                  <Image 
                    src={'/images/gp.png'} 
                    alt='Google Play' 
                    width={140} 
                    height={42} 
                    className='object-contain'
                  />
                  <Image 
                    src={'/images/as.png'} 
                    alt='App Store' 
                    width={140} 
                    height={42} 
                    className='object-contain'
                  />
              </div>
            </div>
            
            {/* Sağ Taraf - Hero Görseli */}
            <div className='hidden lg:flex justify-center items-center'>
                <Image 
                  src={'/images/hero.png'} 
                  alt='Hero Image' 
                  width={600} 
                  height={600}
                  className='object-contain'
                  priority
                />   
            </div>
           </div>
        </div>
    </div>
  )
}

export default Hero