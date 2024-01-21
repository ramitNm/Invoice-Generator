import React from 'react'
import {useNavigate} from 'react-router-dom'

import Navbar from './Profile-Components/ProfileNavbar'
import ProfileMain from './Profile-Components/ProfileMain';


export default function Profile() {
    const navigate = useNavigate();

    let session_data = localStorage.getItem('user')

    const[isTrue,setIsTrue]=React.useState(false);

    React.useEffect(()=>{
        if(session_data == null){
          navigate('/');
        }
        setIsTrue(true);
      })
  return (
    <div className='profile'>
        <Navbar/>
       {isTrue && <ProfileMain/>}
    </div>
  )
}
