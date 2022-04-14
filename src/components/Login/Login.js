import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to ema-john?{" "}
          <Link className="form-link" to={"/signup"}>
            {" "}
            Create an account
          </Link>
        </p>
        <div className="border-container">
          <div className="border-line"></div>
          <p>or</p>
          <div className="border-line"></div>
        </div>
        <button className="google-btn">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt="  "
          />
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
