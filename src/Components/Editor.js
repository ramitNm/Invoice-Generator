import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


import Navbar from './Editor-Components/Navbar';
import Infobox from './Editor-Components/Infobox';
import Main from './Editor-Components/Main';


export default function Home() {

  const navigate = useNavigate();

  let session_data = localStorage.getItem('user')

  React.useEffect(()=>{
    if(session_data == null){
      navigate('/');
      console.log("hi")
    }
  })
  
  return (
    <div className='home'>
      
    <Navbar/>
    <Infobox/>
    
    <Main/>
    
    
    </div>
    
  )
}
