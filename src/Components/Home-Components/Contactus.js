import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contactus() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      console.log(form.current);
  
      emailjs.sendForm('service_eyw3jko', 'template_6kp0ki7', form.current, 'JtN0tKsULaeXrbSHE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const succefullAlert = () => {
      alert("E-mail sent successfully");
    }


  return (
    <div className='contact'>
        <p className='landing-heading'>Contact Us</p>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className='btn-scroll' onClick={succefullAlert} type="submit" value="Send" />
    </form>
    </div>
  )
}
