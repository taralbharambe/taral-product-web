import React, { useState } from "react";
import "./Singup.css"
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import app from "./firebase.js"
import { Link } from "react-router-dom";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
  
  
    
    const signupGoogle = async () => {
      try {
        await signInWithPopup(auth, provider);
        alert("Google signin successful");
      } catch (error) {
        console.error("Error during Google signin:", error.message);
        alert(`Error: ${error.message}`);
      }
    };
  
   
    const handleSubmit = async (e) => {
      e.preventDefault(); 
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("You signed in successfully");
      } catch (error) {
        console.error("Error during signin:", error.message);
        alert(`Error: ${error.message}`);
      }
    };
  
    return (
      <div 
    className="signup-container" 

  >
        <h3>Signin</h3>
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
    If you are not Singup{" "}
    <Link 
      to="/signup" 
      style={{
        color: "blue", 
        textDecoration: "underline", 
        cursor: "pointer" 
      }}
    >
      signup
    </Link>
  </p>
  
      </div>
    );
}

export default Signin