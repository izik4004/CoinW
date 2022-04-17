import React from 'react'
import Crypto from '../../assets/crypto.png'
import "./Hero.css";

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
        {/* Left side */}
        <div className='left'>
            <p>Buy & Sell Crypto using your account</p>
            <h1>Invest in Cryptocurrency</h1>
            <p>Buy, Sell, and store hundred of cryptocurrencies</p>
            <div className='input-container'>
                <input type="email" placeholder='Enter your email' />
                <button className='btn'>Learn More</button>
            </div>
        </div>

         {/* Right side */}
         <div className="right">
             <div className="img-container">
                 <img src={Crypto} alt="" />
             </div>
         </div>
    </div>
    </div>
  )
}

export default Hero