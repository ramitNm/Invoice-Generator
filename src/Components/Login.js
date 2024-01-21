import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  localStorage.clear()

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    let result = await fetch("https://invoicery-back-end-production.up.railway.app/login", {
      method: 'post',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result =await result.json();
    console.log(result)

    if(result.username){
      localStorage.setItem('user',JSON.stringify(result.username));
      navigate('/editor')

    }
    else{
      alert("Please enter correct info")
    }
  }

  return (
    <div className="login-page">
      <p className='name'>Invoicery</p>
      <div className="login-card">
        <h1>Login</h1>
        <div className='fields'>
          <p className="field-title">Username</p>
          <input type="text" value={username}
            onChange={(event) => setUsername(event.target.value)} />
          <p className="field-title">Password</p>
          <input type="password" /*placeholder='enter password'*/ id="login-password" value={password}
            onChange={(event) => setPassword(event.target.value)} />

        </div>
        <button className='login-submit' type="submit" onClick={handleLogin}>Login</button>
        <span className='signup-text'>Don't have an account?</span>
        <Link to="/signup">Sign Up</Link>

      </div>
    </div>

  )
}
