import React from 'react'
import "./Signup.css"
import Crypto from "../../assets/cryptomobile.png"

const Signup = () => {
  return (
    <div className='signup'>
        <div className="container">
            {/* left */}
            <div className="left">
                <img src={Crypto} alt="" />
            </div>


               {/* left */}
            <div className="right">
                <h2>Earn passive Income with Crypto</h2>
                <p>Earn up to 12% annual and get rewards on Digital Assets</p>
                <div className="input-container">
                    <input type="email" name="" placeholder='Enter your email' />
                <button className='btn'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup