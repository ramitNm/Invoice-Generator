import React from 'react'


export default function HomeNav() {


  const scrollToTestimonial = () => {
    window.scrollTo(0, 730)
  }

  const scrollToContact = () => {
    window.scrollTo(0, 1400)
  }

  return (
    <div>
        <div className="landing-nav">
                <p className='name'>Invoicery</p>
                <ul>
                    <li onClick={scrollToTestimonial}>Testimonials</li>
                    <li onClick={scrollToContact}>Contact Us</li>                    
                </ul>            
        </div>
        
    </div>
  )
}
