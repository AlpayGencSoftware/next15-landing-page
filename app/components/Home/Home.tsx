import React from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import AnaliticsFeature from './AnaliticsFeature/AnaliticsFeature'

function Home() {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <WhyChoose/>
        <AnaliticsFeature/>
    </div>
  )
}

export default Home