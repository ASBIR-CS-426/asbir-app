
import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { Register } from "./Register";

import './Home.css';

export const Home = () => {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName: string) => {
      setCurrentForm(formName);
    }
    return (
        <div className = "Home">
            {
                currentForm === "login" ? <LoginForm onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
        </div>
    )
};