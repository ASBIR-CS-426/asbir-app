import React, { useState } from "react";

interface RegisterProps {
    onFormSwitch: Function
}

export const Register = (props: RegisterProps) => {
    const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const loginInfo = [
        {
            username: 'brock',
            password: '123'
        }, 
        {
            username: 'tanner',
            password: 'password'
        },
        {
            username: 'annette',
            password: 'machinelearning'
        }
    ]
    

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    }

    return (
        <div className="auth-form-container">
            <h2>Single Sign On</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="firstname lastname" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            {/* <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}
            <button type="submit" onClick={() => console.log(name, email)}>Send Email</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}