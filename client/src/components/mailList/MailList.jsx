import React from 'react'
import '../mailList/MailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Save time, save money!</h1>
        <span className='mailDescription'>Sign up and we'll send the best deals to you</span>
        <div className='mailInputContainer'>
            <input type='text' placeholder='Enter your email...'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList