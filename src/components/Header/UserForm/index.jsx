// User Form
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './UserForm.css';

export default function UserForm(props) {
  const { active } = props;
  const [isLogin, setIsLogin] = useState(true);

  const handleFormToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    // Handle form submission logic here
  };

  return (
    <form className={`user-form ${active ? 'active' : ''}`} onSubmit={handleSubmit}>
      <h3>{isLogin ? 'Login Now' : 'Sign Up'}</h3>
      <div className="box">
        <input type="email" placeholder="Your email" />
      </div>
      <div className="box">
        <input type="password" placeholder="Your password" />
      </div>
      {!isLogin && (
        <div className="box">
          <input type="text" placeholder="Your name" />
        </div>
      )}
      <p>
        {isLogin ? 'Forgot your password?' : 'Already have an account?'}
        {' '}
        <button type="button" onClick={handleFormToggle}>
          {isLogin ? 'Sign Up' : 'Login now'}
        </button>
      </p>
      {!isLogin && (
        <button type="submit" className="btn">
          Sign Up
        </button>
      )}
      {isLogin && (
        <button type="submit" className="btn">
          Login Now
        </button>
      )}
    </form>
  );
}

UserForm.propTypes = {
  active: PropTypes.bool,
}.isRequired;
