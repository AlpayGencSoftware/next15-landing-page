'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import NewsSlider from './NewsSlider'

const Hero = () => {
  return (
    <div className='w-full min-h-screen bg-[#f7f6fb] py-12 md:py-20'>
        <div className='container mx-auto px-4'>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Sol Taraf - İçerik */}
            <motion.div 
              className='space-y-8'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <NewsSlider />
              </motion.div>
              
              <motion.h1 
                className='text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                  The best products for your home
              </motion.h1>
              
              <motion.p 
                className='text-lg md:text-xl text-gray-600 max-w-xl'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, illum pariatur. Incidunt saepe quisquam dolor dolorum autem ut itaque sed? Quasi et ratione aspernatur saepe officiis architecto earum fuga hic!
              </motion.p>
              
              <motion.div 
                className='flex items-center space-x-6 pt-4'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
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
              </motion.div>
            </motion.div>
            
            {/* Sağ Taraf - Hero Görseli */}
            <motion.div 
              className='hidden lg:flex justify-center items-center'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image 
                  src={'/images/hero.png'} 
                  alt='Hero Image' 
                  width={600} 
                  height={600}
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