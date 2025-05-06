import React from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import AnaliticsFeature from './AnaliticsFeature/AnaliticsFeature'
import Feature from './Feature/Feature'
import Review from './Review/Review'
function Home() {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <WhyChoose/>
        <AnaliticsFeature/>
        <Feature/>
        <Review/>
    </div>
  )
}

export default Home