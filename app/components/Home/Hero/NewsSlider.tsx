'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { news } from '../../../constant/News'

const NewsSlider = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // İstemci tarafında render edilene kadar hiçbir şey gösterme
  if (!isMounted) {
    return <div className='h-16 overflow-hidden relative'></div>
  }

  return (
    <div className='h-16 overflow-hidden relative flex items-center'>
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentNewsIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ 
            duration: 0.7,
            ease: "easeInOut"
          }}
          className='absolute inline-flex items-center py-2.5 px-3 rounded-full shadow-md bg-white max-w-md'
        >
          <div className={`px-4 py-1.5 rounded-full ${news[currentNewsIndex].color} text-sm md:text-base text-white font-medium`}>
            {news[currentNewsIndex].type}
          </div>
          <p className='ml-4 text-sm md:text-base font-medium text-black pt-1 pr-2 mr-1'>
            {news[currentNewsIndex].title}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default NewsSlider 