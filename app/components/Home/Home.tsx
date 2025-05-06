import React from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import AnaliticsFeature from './AnaliticsFeature/AnaliticsFeature'
import Feature from './Feature/Feature'
function Home() {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <WhyChoose/>
        <AnaliticsFeature/>
        <Feature/>
    </div>
  )
}

export default Home