import React, { useState } from "react";
import "./Singup.css"
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "./firebase.js"
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  
  const signupGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Google signup successful");
    } catch (error) {
      console.error("Error during Google signup:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("You signed up successfully");
    } catch (error) {
      console.error("Error during signup:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div 
  className="signup-container" 
  style={{
    width: "130%", 
    height: "500px",
    maxWidth: "1200px", 
    padding: "20px", 
    margin: "0 auto", 
    border: "1px solid #ccc", 
    boxSizing: "border-box" 
  }}
>
      <h3>Signup</h3>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter Your Email"
        className="input-field"
      />

      <label>Password</label>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Enter Your Password"
        className="input-field"
      />

      <div className="checkbox-container">
        <input
          type="checkbox"
          id="show-password"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <label htmlFor="show-password">Show Password</label>
      </div>
      
      <button 
  onClick={handleSubmit} 
  style={{
    display: "block", 
    visibility: "visible", 
    opacity: 1, 
    backgroundColor: "#4CAF50", 
    color: "white", 
    padding: "10px 20px", 
    border: "none", 
    borderRadius: "5px", 
    cursor: "pointer" 
  }}
>
  Submit
</button>

      <button onClick={signupGoogle} className="google-signin-button">
        <i className="fa-brands fa-google"></i> Sign in with Google
      </button>
      <p 
  style={{
    textAlign: "center",
    color: "#000", 
    fontSize: "16px",
  }}
>
  If already signup{" "}
  <Link 
    to="/signin" 
    style={{
      color: "blue", 
      textDecoration: "underline", 
      cursor: "pointer" 
    }}
  >
    signin
  </Link>
</p>

    </div>
  );
};

export default Signup;

