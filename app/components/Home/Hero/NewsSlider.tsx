'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { news } from '../../../constant/News'

const NewsSlider = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='h-16 overflow-hidden'>
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentNewsIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className='inline-flex py-2.5 px-3 rounded-full shadow-md bg-white'
        >
          <div className={`px-4 py-1.5 rounded-full ${news[currentNewsIndex].color} text-sm md:text-base text-white font-medium`}>
            {news[currentNewsIndex].type}
          </div>
          <p className='ml-4 text-sm md:text-base font-medium text-black pt-2 pr-2 mr-1'>
            {news[currentNewsIndex].title}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
 
export default NewsSlider 