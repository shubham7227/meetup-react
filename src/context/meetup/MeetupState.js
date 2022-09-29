import { useReducer, useEffect, useContext } from "react";

import MeetupContext from "./meetup-context";
import MeetupReducer from "./MeetupReducer";
import {
  LOAD_MEETUP,
  ADD_MEETUP,
  DELETE_MEETUP,
  EDIT_MEETUP,
} from "./meetup-action";

const MeetupState = (props) => {
  const initialState = {
    meetups: [],
  };

  const loadMeetups = (email) => {
    dispatch({
      type: LOAD_MEETUP,
      payload: email,
    });
  };

  const addMeetup = (meetup) => {
    dispatch({
      type: ADD_MEETUP,
      payload: meetup,
    });
  };

  const deleteMeetup = (meetupId) => {
    dispatch({
      type: DELETE_MEETUP,
      payload: meetupId,
    });
  };

  const editMeetup = (meetupId, updatedMeetup) => {
    dispatch({
      type: EDIT_MEETUP,
      payload: {
        id: meetupId,
        meetupData: updatedMeetup,
      },
    });
  };

  const [state, dispatch] = useReducer(MeetupReducer, initialState);

  return (
    <MeetupContext.Provider
      value={{
        meetupData: state.meetups,
        loadMeetups,
        addMeetup,
        deleteMeetup,
        editMeetup,
      }}
    >
      {props.children}
    </MeetupContext.Provider>
  );
};

export default MeetupState;
