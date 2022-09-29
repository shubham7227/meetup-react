import { useReducer } from "react";

import * as api from "../../api/apiIndex.js";
import MeetupContext from "./meetup-context";
import MeetupReducer from "./MeetupReducer";
import {
  LOAD_MEETUP,
  ADD_MEETUP,
  DELETE_MEETUP,
  EDIT_MEETUP,
} from "../../constants/actionTypes";

const MeetupState = (props) => {
  const initialState = {
    meetups: [],
  };

  const [state, dispatch] = useReducer(MeetupReducer, initialState);

  const loadMeetups = async (token) => {
    try {
      const { data } = await api.fetchMeetups(token);

      dispatch({
        type: LOAD_MEETUP,
        payload: data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addMeetup = async (meetup, router) => {
    try {
      const { data } = await api.addMeetup(meetup);

      dispatch({
        type: ADD_MEETUP,
        payload: data,
      });
      router("/homepage", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMeetup = async (meetupId) => {
    try {
      const { data } = await api.deleteMeetup(meetupId);

      dispatch({
        type: DELETE_MEETUP,
        payload: meetupId,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const editMeetup = async (meetupId, updatedMeetup) => {
    try {
      const { data } = await api.updateMeetup(meetupId, updatedMeetup);
      dispatch({
        type: EDIT_MEETUP,
        payload: {
          id: meetupId,
          meetupData: data.data,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

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
