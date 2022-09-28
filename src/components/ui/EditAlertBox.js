import React, { useState } from "react";
import classes from "./EditAlertBox.module.css";

const EditAlertBox = (props) => {
  const [meetupData, setMeetupData] = useState({
    title: props.title,
    image: props.image,
    address: props.address,
    description: props.description,
  });
  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onConfirm(meetupData);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setMeetupData((values) => ({ ...values, [name]: value }));
  };
  return (
    <div className={classes.main}>
      <h2>Update Meetup Data</h2>

      <div className={classes.mainForm}>
        <form onSubmit={handleFormSubmit}>
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              value={meetupData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Image URL: </label>
            <input
              type="text"
              name="image"
              id="image"
              value={meetupData.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              name="address"
              id="address"
              value={meetupData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description: </label>
            <textarea
              name="description"
              id="description"
              rows="5"
              onChange={handleChange}
              value={meetupData.description}
              required
            ></textarea>
          </div>
          <div className={classes.btn}>
            <button onClick={props.onCancel} className={classes.cancelBtn}>
              Cancel
            </button>
            <button type="submit" className={classes.confirmBtn}>
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAlertBox;
