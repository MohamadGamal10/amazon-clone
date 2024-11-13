import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/images/login-logo.png'
import '../assets/style/login.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'  


export default function Login() {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth , email , password).then((auth) => {
        navigate("/");
      }).catch((error) => alert(error.message));
    }
    
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth , email , password).then((auth) => {
            navigate("/");
        }).catch((error) => alert(error.message));

    }
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-signInBtn" onClick={handleLogin} type="submit" >
            Sign in
          </button>
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button className="login-registerBtn" onClick={register}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  )
}
