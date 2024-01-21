import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate();
  

  const logout = () =>{
    localStorage.clear();
    navigate('/');
  }

  const goToHome = () => {
  
    navigate('/editor')
  }


  return (
    <>
    <div className='nav'>
        <h1 onClick={goToHome}>Invoicery</h1>


        <div className="uls">
        
        
        <img className='profile-logout' src={require('./logout-icon.png')} height='40px' alt='Log Out' onClick={logout}/>
       
        
        
        </div>
    </div>
    
    </>
  )
}
