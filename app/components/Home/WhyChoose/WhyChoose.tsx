import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return (
    <div className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-black text-center mb-12'>
                Why you choose this application
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'> 
                    <WhyChooseCard 
                        image={'/images/i1.png'} 
                        title={'Easy to use'} 
                        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} 
                        linkText={'Learn More'} 
                        linkUrl={'/'}
                    />  
                </div>
                <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'> 
                    <WhyChooseCard 
                        image={'/images/i2.png'} 
                        title={'Secure Payment'} 
                        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} 
                        linkText={'Learn More'} 
                        linkUrl={'/'}
                    />  
                </div>
                <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'> 
                    <WhyChooseCard 
                        image={'/images/i3.png'} 
                        title={'Fast Delivery'} 
                        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} 
                        linkText={'Learn More'} 
                        linkUrl={'/'}
                    />  
                </div>
                <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'> 
                    <WhyChooseCard 
                        image={'/images/i4.png'} 
                        title={'24/7 Support'} 
                        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} 
                        linkText={'Learn More'} 
                        linkUrl={'/'}
                    />  
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose