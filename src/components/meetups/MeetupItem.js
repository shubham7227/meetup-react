import { useState, useContext } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";

import Card from "../ui/Card";
import AlertBox from "../ui/AlertBox";
import BackDrop from "../ui/BackDrop";
import classes from "./MeetupItem.module.css";
import EditAlertBox from "../ui/EditAlertBox";

import { deleteMeetup, editMeetup } from "../../redux/action/meetupAction";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavourite,
  removeFavourite,
} from "../../redux/action/favouriteAction";

const MeetupItem = (props) => {
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const favourites = useSelector(
    (state) => state.favouriteReducer.favouriteMeetups
  );

  const isItemFavourite = favourites.some((meetup) =>
    meetup._id === props.id ? true : false
  );

  const handleToggleFavourite = () => {
    if (isItemFavourite) {
      dispatch(removeFavourite(props.id));
    } else {
      dispatch(
        addFavourite({
          _id: props.id,
          meetup_Title: props.title,
          meeting_Image_Url: props.image,
          address: props.address,
          description: props.description,
        })
      );
    }
  };

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleDelete = () => {
    setShowAlert(true);
  };

  const handleDeleteCancel = () => {
    setShowAlert(false);
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteMeetup(props.id));
    setShowAlert(false);
  };

  const handleEditCancel = () => {
    setShowEdit(false);
  };

  const handleEditConfirm = (meetupData) => {
    dispatch(editMeetup(props.id, meetupData));
    setShowEdit(false);
  };

  const handleBackDropClick = () => {
    setShowAlert(false);
    setShowEdit(false);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt="" />
        </div>
        {/* <div>
          <button onClick={handleDelete}>
            <MdDelete />
          </button>
          <button onClick={handleEdit}>
            <MdModeEdit />
          </button>
        </div> */}
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDelete}>
            <MdDelete /> Delete
          </button>
          <button onClick={handleToggleFavourite}>
            {isItemFavourite
              ? "Remove from Favourite"
              : "Add item to Favourite"}
          </button>
          <button onClick={handleEdit}>
            <MdModeEdit /> Edit
          </button>
        </div>
      </Card>
      {showAlert ? (
        <>
          <AlertBox
            onCancel={handleDeleteCancel}
            onConfirm={handleDeleteConfirm}
            meetupName={props.title}
          />
          <BackDrop onClick={handleBackDropClick} />
        </>
      ) : null}
      {showEdit ? (
        <>
          <EditAlertBox
            onCancel={handleEditCancel}
            onConfirm={handleEditConfirm}
            id={props.id}
            title={props.title}
            address={props.address}
            description={props.description}
            image={props.image}
          />
          <BackDrop onClick={handleBackDropClick} />
        </>
      ) : null}
    </li>
  );
};

export default MeetupItem;
