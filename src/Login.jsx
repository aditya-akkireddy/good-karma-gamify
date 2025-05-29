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

  if (!user) {
    return React.createElement(
      'div',
      { style: { textAlign: 'center', marginTop: '3rem' } },
      React.createElement('h2', null, 'Login to DeeditUp'),
      React.createElement(
        'button',
        { onClick: handleLogin, style: { padding: '0.5rem 1rem' } },
        'Sign in with Google'
      )
    );
  }

  return React.createElement(
    'div',
    { style: { textAlign: 'center', marginTop: '3rem' } },
    React.createElement('h2', null, `Welcome, ${user.displayName || 'User'} 👋`),
    React.createElement('p', null, `Email: ${user.email}`),
    React.createElement(
      'button',
      {
        onClick: handleLogout,
        style: { padding: '0.5rem 1rem', marginTop: '1rem' }
      },
      'Logout'
    )
  );
}

export default Login;
