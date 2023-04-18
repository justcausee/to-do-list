import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { handleLogin } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      const userName = response.data.name; // Extract user's name from API response
      handleLogin(userName); // Pass user's name to the handleLogin function
      console.log(`Logged in successfully as ${email}`);
      // Navigate to the Profile component
      navigate("/profile");
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response && error.response.status === 401) {
        setError(<div className="error">Invalid email or password</div>);
      } else {
        setError(<div className="error">An unexpected error occurred</div>);
      }
    }
  };

  return (
    <div className="login">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="loginform">
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button id="submitLogin">Login</button>
      </form>
      {error && error}
    </div>
  );
}

export default Login;
