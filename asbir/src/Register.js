import React, { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();

    // const loginInfo = [
    //     {
    //         username: 'brock',
    //         password: '123'
    //     }, 
    //     {
    //         username: 'tanner',
    //         password: 'password'
    //     },
    //     {
    //         username: 'annette',
    //         password: 'machinelearning'
    //     }
    // ]
    

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser(auth.currentUser)
    })

    return (
        <div className="auth-form-container">
            <h2>Single Sign On</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="********" />
            <button type="submit" onClick={async () => {
                register();
                await delay(1000);
                localStorage.setItem("name", user.uid);
                localStorage.setItem("email", user.email);
                props.onFormSwitch('login');
            }}>Create User</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}