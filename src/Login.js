// src/Login.js
import React, { useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';

function Login() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("Logged in as:", result.user.displayName);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("Logged out");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // cleanup on unmount
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      {!user ? (
        <>
          <h2>Login to DeeditUp</h2>
          <button onClick={handleLogin} style={{ padding: '0.5rem 1rem' }}>
            Sign in with Google
          </button>
        </>
      ) : (
        <>
          <h2>Welcome, {user.displayName} 👋</h2>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout} style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default Login;
