import React from 'react'
import Nav from '../Common/Nav'
import Footer from '../Common/Footer'
import HowItWork from '../Components/Landing/HowItWork'
import Hero from '../Components/Landing/Hero'

const Landing = () => {
  return (
    <div className='w-full min-h-screen'>
      <Hero />
      <HowItWork />
    </div>
  )
}

export default Landing
