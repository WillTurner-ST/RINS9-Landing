import React from 'react'
import CTAbutton from '../assets/Images/CTAbutton1.png'

const CTA = () => {
  return (
    <div className="CalltoAction">
        <div className='TextCTA'>
        <p className='txt'>
            Lightning-Fast Elevation
        </p>
        </div>
        <div className='bCTA'>
           <a href='https://www.snapdragonhemp.com/product/canna-bliss-sparkling-infused-water-12oz-10mg-or-25mg-delta-9-thc/'><img className='CButton' alt='Call-action-button' src={CTAbutton}/></a>
        </div>
    </div>
  )
}

export default CTA