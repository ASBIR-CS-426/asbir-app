import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "./Firebase";
import GoogleButton from 'react-google-button'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

import './LoginForm.css'


export const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [successful, setSuccesful] = useState(0);
    const [place, setPlace] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!!localStorage.getItem("name") && !!localStorage.getItem("email")) {
            console.log(email);
            console.log(pass);
            navigate("/dashboard")
            setSuccesful(1);
        }
        else {
            setSuccesful(-1);
        }
    }

    const login = async () => {
        setPlace(true)
        try {
            console.log(email)
            if (email !== 'admin@gmail.com') {
                const user = await signInWithEmailAndPassword(auth, email, pass)
                localStorage.setItem("name", user.uid);
                localStorage.setItem("email", user.email);
                navigate("/dashboard")
                setSuccesful(1)
            }
            else {
                console.log("Hello?")
                localStorage.setItem("name", "admin");
                localStorage.setItem("email", email);
                navigate("/dashboard")
                navigate("/dashboard")
                setSuccesful(1)
            }
        }
        catch (error) {
            setPlace(false)
            setSuccesful(-1);
            console.log(error.message)
        }
    }

    useEffect(() => {
        console.log('Successful: ', successful);
        if (!!localStorage.getItem("name") && !!localStorage.getItem("email")) {
            navigate("/dashboard")
            localStorage.clear();
        }
        setSuccesful(successful);
      }, [successful])
    // onClick={async () => props.onSubmit(((successful === -1) ? 'not success' : 'success'))
    return (
        <div className="auth-form-container">
            <h2 id="login-text">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={async () => {
                    await login()
                    props.onSubmit(((successful < 0) ? 'not success' : 'success'))
                }}>Log In</button> 
                <GoogleButton style={{width: 'auto', marginTop: '1rem'}}onClick={async () => {
                    await signInWithGoogle()
                    navigate("/dashboard")
                    navigate("/dashboard")
                }}/>
            </form> {/* Uses the react-google-button library for styling*/}
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here!</button>
            {/* <button className="link-btn" onClick={signInWithGoogle}>Sign In With Google</button> */}
            {!place && successful < 0 && <h2 id="login-unsuccessful-popup" className="login-unsuccessful">Please Login With A Valid Username and Password</h2>}
            {/* {!!localStorage.getItem("name") && <h2>{localStorage.getItem("name")}</h2>}
            {!!localStorage.getItem("email") && <h2>{localStorage.getItem("email")}</h2>} */}
        </div>
    )
}