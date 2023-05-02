import React from 'react';
import './SignInLayout.css';

const SignInLayout = () => {
  return (
    <div className="sign-in-container">
      <div className="sign-in-form">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInLayout;
