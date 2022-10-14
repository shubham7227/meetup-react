import { useContext, useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useSelector } from "react-redux";
// import AuthContext from "../../context/auth/auth-context";

const NewMeetupForm = (props) => {
  // const { user } = useContext(AuthContext);

  const user = useSelector((state) => state.userReducer.authData);
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
      email: user.email,
    };

    props.onAddMeetup(meetupData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title </label>
          <input
            type="text"
            name="title"
            id="title"
            ref={titleInputRef}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image URL</label>
          <input
            type="url"
            name="image"
            id="image"
            ref={imageInputRef}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            ref={addressInputRef}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            ref={descriptionInputRef}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
