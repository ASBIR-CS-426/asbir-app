import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  onFormSwitch: Function,
  onSubmit: Function
}


export const LoginForm = (props: LoginFormProps) => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [successful, setSuccesful] = useState<number>(0);

    const navigate = useNavigate();

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
            console.log(email);
            console.log(pass);
            setSuccesful(1);
            navigate("/dashboard")
        }
        else {
            setSuccesful(-1);
        }
    }

    useEffect(() => {
        console.log('Successful: ', successful);
        setSuccesful(successful);
      }, [successful])
    // onClick={async () => props.onSubmit(((successful === -1) ? 'not success' : 'success'))
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
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Forgot your password? Use SSO</button>
            {successful < 0 && <h2 id="login-unsuccessful-popup" className="login-unsuccessful">Please Login With A Valid Username and Password</h2>}
        </div>
    )
}