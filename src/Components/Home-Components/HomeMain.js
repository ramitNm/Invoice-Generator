import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomeMain() {

    let navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login")
    }

    const goToSignUp = () => {
        navigate("/signup")
    }
  return (
    <div>
        <div className="landing-main">
                <p className='landing-heading'>Create E-Invoices</p>
                <p className="landing-para">Invoicery helps you in creating E-invoices for your business. Just input the asked details and you are all done with your Invoice. You can download invoice in pdf format. We all provide options to save the invoice data and also let you see the saved invoices. Sign Up or Login to continue...</p>
                <div className="landing-btns">
                    <button className='btn-scroll' onClick={goToLogin}>Login</button>
                    <button className='btn-scroll' onClick={goToSignUp}>Sign Up</button>
                </div>
            </div>
    </div>
  )
}
