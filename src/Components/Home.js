import React from 'react';

import Nav from './Home-Components/HomeNav';
import Main from './Home-Components/HomeMain';
import Contact from './Home-Components/Contactus';
import Testimonials from './Home-Components/Testimonials';

function Home() {
  return (
    <div>
        <div className="landing">
        <Nav/>
            <Main/>
            
        </div>
        <Testimonials/>
        <Contact/>
        
        
    </div>
  )
}

export default Home