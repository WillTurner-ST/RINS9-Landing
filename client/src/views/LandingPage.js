import React from 'react'
import '../App.css';
import Hero from '../components/Hero'
import CTA from '../components/CTA'
import About from '../components/About';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const LandingPage = () => {

  return (
    <div className="App">
      <Hero/>
      <CTA/>
      <About/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default LandingPage