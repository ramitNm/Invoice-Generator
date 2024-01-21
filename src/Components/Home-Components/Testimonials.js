import React from 'react'
import tweet1 from './Tweet.png'

export default function Testimonials() {
  return (
    <div className='testimonial-container'>
    <p className='testimonial-heading'>From our past customers</p>
    <div className='testimonials'>
      
        <img src={tweet1} alt="tweet1" />;
        <img src={tweet1} alt="tweet1" />;
    </div>
    </div>
  )
}
