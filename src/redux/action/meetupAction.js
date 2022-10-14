import {
  LOAD_MEETUP,
  ADD_MEETUP,
  DELETE_MEETUP,
  EDIT_MEETUP,
  START_LOADING,
  END_LOADING,
} from "../../constants/actionTypes";

import * as api from "../../api/apiIndex.js";

export const loadMeetups = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchMeetups();

    setTimeout(() => {
      dispatch({
        type: LOAD_MEETUP,
        payload: data.data,
      });
      dispatch({ type: END_LOADING });
    }, 1000);
  } catch (err) {
    console.log(err);
  }
};

export const addMeetup = (meetup, router) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.addMeetup(meetup);

    dispatch({
      type: ADD_MEETUP,
      payload: data,
    });

    setTimeout(() => {
      dispatch({ type: END_LOADING });
      router("/homepage", { replace: true });
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};

export const deleteMeetup = (meetupId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.deleteMeetup(meetupId);

    dispatch({
      type: DELETE_MEETUP,
      payload: meetupId,
    });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const editMeetup = (meetupId, updatedMeetup) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.updateMeetup(meetupId, updatedMeetup);

    setTimeout(() => {
      dispatch({
        type: EDIT_MEETUP,
        payload: {
          id: meetupId,
          meetupData: data.data,
        },
      });
      dispatch({ type: END_LOADING });
    }, 1000);
  } catch (error) {
    console.log(error.message);
  }
};
