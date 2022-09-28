import React from "react";
import classes from "./AlertBox.module.css";

const AlertBox = (props) => {
  return (
    <div className={classes.alertbox}>
      <p>Delete {props.meetupName}?</p>
      <button onClick={props.onCancel} className={classes.cancelBtn}>
        Cancel
      </button>
      <button onClick={props.onConfirm} className={classes.confirmBtn}>
        Confirm
      </button>
    </div>
  );
};

export default AlertBox;
