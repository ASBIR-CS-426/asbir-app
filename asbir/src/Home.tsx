import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { Register } from "./Register";

import './Home.css';

import { Link } from "react-router-dom"

export const Home = () => {
    const [currentForm, setCurrentForm] = useState('login');
    const [success, setSuccess] = useState(0)
    // const [className, setClassName] = useState<string>("Home");

    const toggleForm = (formName: string) => {
      setCurrentForm(formName);
    }

    const toggleSuccess = (flag: string) => {
        console.log(flag);
        if (flag === 'success') {
            setSuccess(success + 1);
        }
        else {
            setSuccess(success);
        }
    }
    return (
            <div className={(success === 0) ? "Home" : "Home_Not"}>
                <h1 className="welcome">Welcome to the ASBIR Web App</h1>
                {
                    currentForm === "login" ? <LoginForm onFormSwitch={toggleForm} onSubmit={toggleSuccess}/> : <Register onFormSwitch={toggleForm} />
                }
                <div className="footer">
                    <Link className="link-btn" to="/about-us">Learn More</Link>
                </div>
            </div>
    )
};