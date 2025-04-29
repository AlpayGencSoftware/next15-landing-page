'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import NewsSlider from './NewsSlider'

const Hero = () => {
  return (
    <div className='w-full bg-[#f7f6fb] pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16'>
        <div className='container mx-auto px-4 max-w-7xl'>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center'>
            {/* Sol Taraf - İçerik */}
            <div className='space-y-6 md:space-y-8 lg:space-y-10 max-w-2xl'>
              <NewsSlider />
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight tracking-tight'
              >
                  The best products for your home
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed'
              >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, illum pariatur. Incidunt saepe quisquam dolor dolorum autem ut itaque sed? Quasi et ratione aspernatur saepe officiis architecto earum fuga hic!
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='flex items-center space-x-8 pt-6'
              >
                  <Image 
                    src={'/images/gp.png'} 
                    alt='Google Play' 
                    width={160} 
                    height={48} 
                    className='object-contain hover:opacity-80 transition-opacity'
                  />
                  <Image 
                    src={'/images/as.png'} 
                    alt='App Store' 
                    width={160} 
                    height={48} 
                    className='object-contain hover:opacity-80 transition-opacity'
                  />
              </motion.div>
            </div>
            
            {/* Sağ Taraf - Hero Görseli */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='hidden lg:flex justify-center items-center'
            >
                <Image 
                  src={'/images/hero.png'} 
                  alt='Hero Image' 
                  width={700} 
                  height={700}
                  className='object-contain'
                  priority
                />   
            </motion.div>
           </div>
        </div>
    </div>
  )
}

export default Hero