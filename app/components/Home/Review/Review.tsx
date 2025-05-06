'use client'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ReviewCard from './ReviewCard'
import { reviews } from '../../../constant/ReviewCard'
 
const responsive = {
    superLargeDesktop: {
        // screens greater than 1920px
        breakpoint: { max: 4000, min: 1921 },
        items: 5
    },
    desktop: {
        // screens between 1024px and 1920px
        breakpoint: { max: 1920, min: 1024 },
        items: 1
    },
    tablet: {
        // screens between 464px and 1023px
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        // screens less than 464px
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

const Review = () => {
  return (
    <div className='pt-16 pb-16 bg-[#fcf6fa]'>
        <h1 className='mt-6 text-center text-4xl md:text-5xl font-bold text-gray-900'>What client say about us</h1>
        <div className='mt-6 text-2xl w-[80%] mx-auto'>
           <Carousel responsive={responsive} arrows={false} infinite={true} autoPlay={true} autoPlaySpeed={3000}   showDots={true}    >
             {reviews.map((review) => (
                <ReviewCard key={review.name} name={review.name} image={review.image} review={review.review} star={review.star} role={review.role} />
             ))}
        </Carousel>
        </div>
    </div>
  )
}

export default Review