import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});
  const login = () => { 
    let res = LoginAPI(credentials.email, credentials.password);
    console.log(res)
  
  };
  return (
    <div className="login-wrapper">
      <h1>LoginComponent</h1>
      <div className="auth-inputs">
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, email: event.target.value })
          }
          className="common-input"
          placeholder="Enter your Email"
        />
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
          className="common-input"
          placeholder="Enter your Password"
        />
      </div>
      <button onClick={login} className="login-btn">
        Log in to Linkedin
      </button>
    </div>
  );
}
