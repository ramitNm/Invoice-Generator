import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate();


  const logout = () =>{
    localStorage.clear();
    navigate('/');
  }

  const goToProfile = () => {
    navigate('/profile');
  }


  return (
    <div className='nav'>
        <h1 >Invoicery</h1>
        <div className="uls">
        <ul className='icons'>
        <img src={require('./profile-icon.png')} height='40px' alt='Profile' onClick={goToProfile}/>
        <img src={require('./logout-icon.png')} height='40px' alt='Log Out' onClick={logout}/>
        </ul>
        <ul>
          <span className='icon-tag left-tag'>Profile</span>
          <span className='icon-tag right-tag' onClick={logout}>Log Out</span>
        </ul>
        </div>
    </div>
  )
}
