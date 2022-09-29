import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const [user, setUser] = useState({});
  const [passwordType, setPasswordType] = useState("password");

  const handleShowPassword = (e) => {
    setPasswordType(e.target.checked ? "text" : "password");
  };

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
            id="email"
            name="email"
            placeholder="Email"
            value={user.email || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.control}>
          <input
            type={passwordType}
            id="password"
            name="password"
            placeholder="Password"
            value={user.password || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type="checkbox"
            name="showPassword"
            id="showPassword"
            value="Show Password"
            onClick={handleShowPassword}
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>

        <div className={classes.loginButton}>
          <button type="submit">Login</button>
        </div>
      </form>
      <div className={classes.googleLogin}>
        <button onClick={props.onGoogleLogin}>Google Login</button>
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
