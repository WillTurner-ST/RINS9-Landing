import React from 'react'
import Prod from '../assets/Images/prod.jpg'
import Stacked from '../assets/Images/stacked.jpg'
import Twisted from '../assets/Images/twisted.jpg'

const About = () => {
  return (
<div class="card-container">
    <div class="card">
        <img src={Prod} alt="pic 3"/>
        <h3 className='About-H3'>ALL NATURAL INGREDIENTS</h3>
        <p className='About-p'>Taste the power of nature. Enjoy every sip with confidence, knowing that it's free from harmful additives or artificial flavors. </p>
    </div>
    <div class="card">
        <img src={Stacked} alt="pic2"/>
        <h3 className='About-H3'>LIGHTNING-FAST EFFECTS</h3>
        <p className='About-p'>Cutting-edge RINS9 technology ensures rapid absorption, allowing you to feel the effects faster and more intensely. Say goodbye to waiting around and hello to instant elevation</p>
    </div>
    <div class="card">
        <img src={Twisted} alt="pic1"/>
        <h3 className='About-H3'>3RD PARTY TESTED</h3>
        <p className='About-p'>Tested for purity and potency, ensuring your safety always comes first.</p>
    </div>
</div>
  )
}

export default About