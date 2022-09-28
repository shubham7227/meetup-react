import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./CreateAccountForm.module.css";

const CreateAccountForm = (props) => {
  const [user, setUser] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  
  const handleShowPassword = (e) => {
    setPasswordType(e.target.checked ? "text" : "password");
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.password !== user.cpassword) {
      alert("Passwords donot match");
    } else {
      props.onCreateAccount(user);
      console.log(user);
    }
  };
  return (
    <div className={classes.main}>
      <h2 className={classes.mainLogo}>Create new Meetup Account</h2>
      <form className={classes.mainForm} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={user.name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={user.email || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type={passwordType}
            id="password"
            name="password"
            value={user.password || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="cpassword">Confirm Password</label>
          <br />
          <input
            type={passwordType}
            id="cpassword"
            name="cpassword"
            value={user.cpassword || ""}
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
        <div className={classes.btn}>
          <button type="submit">Create Account</button>
        </div>
      </form>
      <div className={classes.links}>
        Already have an account? <Link to="/">Login</Link>
      </div>
    </div>
  );
};

export default CreateAccountForm;
