import React, { useState, useRef, useLayoutEffect } from "react";

interface LoginFormProps {
  onFormSwitch: Function,
  onSubmit: Function
}


export const LoginForm = (props: LoginFormProps) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [successful, setSuccesful] = useState(0);

    const loginInfo = [
        {
            username: 'brock@gmail.com',
            password: '123'
        }, 
        {
            username: 'tanner@gmail.com',
            password: 'password'
        },
        {
            username: 'annette@gmail.com',
            password: 'machinelearning'
        }
    ]

    const checkLogin = (email: string, pass: string) => {
        for (let i = 0; i < loginInfo.length; i++) {
            if ((loginInfo[i].username === email) && (loginInfo[i].password === pass)) {
                return true;
            }
        }
        return false;
    }
    

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (checkLogin(email, pass)) {
            setSuccesful(1)
        }
        else {
            setSuccesful(-1)
        }
        console.log(successful)
    }

    return (
        <div className="auth-form-container">
            <h2 id="login-text">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={() => props.onSubmit(((successful < 0) ? 'not success' : 'success'))}>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            {successful < 0 && <h2 id="login-unsuccessful-popup" className="login-unsuccessful">Please Login With A Valid Username and Password</h2>}
        </div>
    )
}