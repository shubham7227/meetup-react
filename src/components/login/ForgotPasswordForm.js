import React from "react";
import { Link } from 'react-router-dom'
import classes from "./ForgotPasswordForm.module.css";
const ForgotPasswordForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target[0].value
    props.onReset(email);
  }
    return (
    <div className={classes.main}>
        <h2 className={classes.mainLogo}>Forgot Password</h2>
      <form className={classes.mainForm} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className={classes.btn}>
          <button type="submit">Reset Password</button>
        </div>
      </form>
      <div className={classes.links}>
        <Link to="/">Go Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
