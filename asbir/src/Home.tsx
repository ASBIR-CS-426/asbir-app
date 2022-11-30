
import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { Register } from "./Register";

import './Home.css';

export const Home = () => {
    const [currentForm, setCurrentForm] = useState('login');
    const [success, setSuccess] = useState(false)

    const toggleForm = (formName: string) => {
      setCurrentForm(formName);
    }

    const toggleSuccess = (flag: string) => {
        if (flag === 'success') {
            setSuccess(true);
        }
        else {
            setSuccess(false);
        }
    }

    console.log(document.querySelector(".login-unsuccessful"))
    let className = success ? "Home_Not": "Home"
    return (
        <div className={className}>
            {
                currentForm === "login" ? <LoginForm onFormSwitch={toggleForm} onSubmit={toggleSuccess}/> : <Register onFormSwitch={toggleForm} />
            }
        </div>
    )
};