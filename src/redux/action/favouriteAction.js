import {
  ADD_FAVOURITE,
  IS_FAVOURITE,
  REMOVE_FAVOURITE,
} from "../../constants/actionTypes";

export const addFavourite = (favouriteMeetup) => {
  return {
    type: ADD_FAVOURITE,
    payload: {
      favouriteMeetup,
    },
  };
};

export const removeFavourite = (meetupId) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: {
      meetupId,
    },
  };
};
