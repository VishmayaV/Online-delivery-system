// User Form
import React from 'react';
import PropTypes from 'prop-types';
import './UserForm.css';

export default function UserForm(props) {
  const { active } = props;
  return (
    <form className={`user-form ${active ? 'active' : ''}`}>
      <h3>Signup now</h3>
      <div className="box">
        <input type="Fname" placeholder="First Name" />
      </div>
      <div className="box">
        <input type="Lname" placeholder="Last Name" />
      </div>
      <div className="box">
        <input type="password" placeholder="Create your password" />
      </div>
      <div className="box">
        <input type="password" placeholder="Confirm your password" />
      </div>
      <p>
        Already have an account ?
        {' '}
        <a href="/">Login now</a>
      </p>
      <button type="submit" className="btn">
        login now
      </button>
    </form>
  );
}
UserForm.propTypes = {
  active: PropTypes.bool,
}.isRequired;
