import React from 'react'

export default function Infobox() {

    const scrollToMain = ()=>{
        window.scrollTo(0, 730)
    }


  return (
    <div className="info-box">
        <div className="info">
            <h1 className='info-heading'>WELCOME!</h1>
            <p className='info-para'>Invoicery is your one stop solution for creating professional invoices. You can download your invoices in just one click and also save them for future use.</p>
            <button className='btn-scroll' onClick={scrollToMain}>Get Started</button>
        </div>
        <div className="main-img">
        <img src={require('./men.png')} height='500px' alt='Profile'/>
        </div>
    </div>
  )
}
