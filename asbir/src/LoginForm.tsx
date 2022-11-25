import { stringify } from "querystring";
import React, { FormEvent, useState } from "react";
import ReactDOM from "react-dom";

import "./LoginForm.css";

const LoginForm = () => {
  const [errorMessages, setErrorMessages] = useState<{name:string, message:string}>({name:'', message:''});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<{uname:string,pword:string}>({uname:'',pword:''});

  let passwordDatabase = [
    {
      username : "bpatchin",
      password : "thisisapassword"
    },
    {
      username : "trichnak",
      password : "iamapassword"
    },
    {
      username : "amcdonough",
      password : "thisisthepassword"
    }
  ];

  const errors = {
    username: "invalid username",
    password: "invalid password"
  };

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const userData = passwordDatabase.find((user) => user.username === formData.uname);

    if (userData) {
      if (userData.password !== formData.pword) {
        setErrorMessages({name: "p", message: errors.password});
      }
      else {
        setIsSubmitted(true);
      }
    }
    else {
      setErrorMessages({name: "u", message: errors.username});
    }
  };

  const handleChange = (e:FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value.trim()
    })
  };

  const renderErrorMessage = (name:string) => {
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  }

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className ="input-container">
          <>
            <label>Username: </label>
            <input type="text" name="uname" onChange={handleChange} required />
            {renderErrorMessage("uname")}
          </>
        </div>
        <div className ="input-container">
          <>
            <label>Password: </label>
            <input type="text" name="pass" onChange={handleChange} required />
            {renderErrorMessage("pass")}
          </>
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  
  return(
    <div className="login-form">
      <div className="render-form">
        <div className="title">Sign In!</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default LoginForm;
