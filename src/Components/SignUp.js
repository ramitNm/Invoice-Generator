/*import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function SignUp() {


    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [email,setEmail] = React.useState('');

    const navigate = useNavigate();

   const collectData=async()=>{

    if(!username || !password){
      alert('Enter correct details');
      return false;
    }


    
    let result =await fetch('http://localhost:5000/register',{
      method:'post',
      body: JSON.stringify({email,username,password}),
      headers:{
        'Content-Type' : 'application/json'
      },

    })

    console.warn(await result.json());
    if(result){
      //result =await result.json();
    console.log(result)
    localStorage.setItem('user',JSON.stringify(result));
      navigate('/')
    }
    else{
      alert('Username already taken')
    }


    }

  return (
    <div>
        <div className="login-page">
        <p className='name'>Invoicery</p>
        <div className="login-card">
            <h1>Sign Up</h1>
            <div className='fields'>

            <p className="field-title">E-mail</p>
            <input type="email"  value={email}
            onChange={(event)=>setEmail(event.target.value)}/>


            <p className="field-title">Username</p>
            <input type="text"  value={username}
            onChange={(event)=>setUsername(event.target.value)}/>


            <p className="field-title">Password</p>
            <input type="password" id="login-password" value={password}
            onChange={(event)=>setPassword(event.target.value)}/>
            
            </div>
            <button className='login-submit' type="submit" onClick={collectData}>Sign Up</button>
            

        </div>
    </div>

    </div>
  )
}
*/
import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'

export default function FormValidation() {
  const { register, handleSubmit, formState: { errors } } = useForm();




  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let username = data.userName;
    let password = data.password;
    let email = data.email;


    let result = await fetch('https://invoicery-back-end-production.up.railway.app/register', {
      method: 'post',
      body: JSON.stringify({ email, username, password }),
      headers: {
        'Content-Type': 'application/json'
      },

    })

    result =await result.json();

    if(result==false) {
      
      console.log(result)
      alert('Username already taken')
    }
    
    else {
      
      console.log(result)
      localStorage.setItem('user', JSON.stringify(result));
      navigate('/login')
    }
    

  }
  return (
    <div className="login-page">

      <p className='name'>Invoicery</p>

      <Form className='fields' onSubmit={handleSubmit(onSubmit)}>

        <h1>Sign Up</h1>

        <Form.Field>

          <p className="field-title">Username</p>

          <input

            type="text"
            {...register("userName", { required: true, maxLength: 10 })}
          />
        </Form.Field>
        {errors.userName && <p>Please check the User Name</p>}

        <Form.Field>
          <p className="field-title">Email</p>
          <input
            
            type="email"
            {...register("email",
              {
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
          />
        </Form.Field>
        {errors.email && <p style={{ width: "300px" }}>Please check the Email</p>}
        <Form.Field>
          <p className="field-title">Password</p>
          <input

            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
            })}
          />
        </Form.Field>
        {errors.password && <p style={{ width: "300px" }}>Password should contain one Capital Letter, one Small Letter, and the number of characters should be between 6 to 15</p>}
        <Button type='submit' className='login-submit'>Submit</Button>
      </Form>
    </div>
  )
}