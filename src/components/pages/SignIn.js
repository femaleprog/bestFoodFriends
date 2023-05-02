import React, { useState } from 'react';
import '../../App.css';
import { Link, useHistory } from 'react-router-dom';
import SignInLayout from './SignInLayout';
import { auth, db } from './firebase';


export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // If sign-in successful, redirect to announcements page
      history.push('/announcements');
    } catch (error) {
      // Handle sign-in errors
      console.error(error);
      alert('Failed to sign in. Please check your credentials and try again.');
    }
  };
  

  return (
    <SignInLayout>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label>
          Email:
          <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type='submit'>Sign In</button>
      </form>
    </SignInLayout>
  );
}
