import React, { useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { auth } from './firebase';

function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      {!user ? (
        <>
          <h2>Login to DeeditUp</h2>
          <button onClick={handleLogin} style={{ padding: '0.5rem 1rem' }}>
            Sign in with Google
          </button>
        </>
      ) : (
        <>
          <h2>Welcome, {user.displayName || 'User'} 👋</h2>
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
