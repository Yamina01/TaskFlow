import React from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
 <Navbar/>
 <Hero/>
 <Features/>
 <HowItWorks/>
 <Pricing/>
  <Testimonials/>
 <CTA/>
<Footer/>
 </>
  )
}

export default App