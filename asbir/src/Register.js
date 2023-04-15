import React, { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();
    const [checker, setChecker] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user)
            setChecker(true)
            setChecker(true)
        }
        catch (error) {
            setChecker(false)
            global.console.log(error.message)
            global.window.alert(error.message)
            global.window.location.reload()
            // Need to figure out way to get back to register
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
            <h2>Register User</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="********" type="password" />
            <button type="submit" onClick={async () => {
                await register();
                await delay(1000);
                if (checker !== false) {
                    localStorage.setItem("name", user.uid);
                    localStorage.setItem("email", user.email);
                    props.onFormSwitch('login');
                }
            }}>Create User</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}