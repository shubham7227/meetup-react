import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const [user, setUser] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({
      ...values,
      [name]: value,
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLogin(user);
  };

  return (
    <div className={classes.main}>
      <h2 className={classes.mainLogo}>Meetup</h2>
      <form className={classes.mainForm} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Email"
            value={user.Email || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.control}>
          <input
            type="password"
            id="Password"
            name="Password"
            placeholder="Password"
            value={user.Password || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.loginButton}>
          <button type="submit">Login</button>
        </div>
      </form>
      <div className={classes.googleLogin}>
        <button onClick={props.onGoogleLogin}>Sign in using Google</button>
      </div>
      <div className={classes.mainLinks}>
        <div className={classes.links}>
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
        <div className={classes.links}>
          <Link to="/create-account">Create new Account</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
