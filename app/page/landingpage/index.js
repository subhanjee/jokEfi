import Footer from '@/app/components/footer'
import ContactUs from '@/app/components/ContactUs'
import React from 'react'
import TeamSection from '@/app/components/team'
import Tokenomics from '@/app/components/tokenomics'
import About from '@/app/components/about'
import HeroSection from '@/app/components/heroSection'
import Header from '@/app/components/header'
 
function LandingPage() {
  return (
    <div>
      <Header/>
       <HeroSection/>
      <About/>
      <Tokenomics/>
      <TeamSection/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default LandingPage
