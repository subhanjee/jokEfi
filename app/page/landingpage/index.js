import Footer from '@/app/components/footer'
import ContactUs from '@/app/components/ContactUs'
import React from 'react'
import TeamSection from '@/app/components/team'
import Tokenomics from '@/app/components/tokenomics'
import About from '@/app/components/about'

function LandingPage() {
  return (
    <div>
      <h1 className='text-center text-black text-4xl'>Jokefi</h1>
      <About/>
      <Tokenomics/>
      <TeamSection/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default LandingPage
