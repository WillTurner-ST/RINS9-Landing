import React from 'react'
import '../App.css';
import HeroImg from '../assets/Images/Rins.png'

const Hero = () => {
  return (
    <div className="hero">
      <img src={HeroImg} alt="Hero Background" className="hero-image" />
    </div>
  )
}

export default Hero