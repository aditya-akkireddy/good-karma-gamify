import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User info:", user);
      // You can save user info to localStorage or Context here
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/good-deeds"); // or wherever you want to redirect after login
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h2>Login with Google</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
