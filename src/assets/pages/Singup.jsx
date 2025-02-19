import React, { useState, useEffect } from "react";
import "./Singup.css";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "./firebase.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate(); 


  
  useEffect(() => {
    document.body.style.fontFamily = "'Roboto', sans-serif";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.background = "var(--background-gradient)";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
    document.body.style.color = "var(--text-color)";

   
    return () => {
      document.body.style.fontFamily = "";
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.background = "";
      document.body.style.display = "";
      document.body.style.justifyContent = "";
      document.body.style.alignItems = "";
      document.body.style.height = "";
      document.body.style.color = "";
    };
  }, []);

  const signupGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Google signup successful");
      navigate("/");
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
      navigate("/");
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
        boxSizing: "border-box",
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
          cursor: "pointer",
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
            cursor: "pointer",
          }}
        >
          signin
        </Link>
      </p>
    </div>
  );
};

export default Signup;
