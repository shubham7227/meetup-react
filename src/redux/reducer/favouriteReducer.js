import {
  ADD_FAVOURITE,
  IS_FAVOURITE,
  REMOVE_FAVOURITE,
} from "../../constants/actionTypes";

const initialState = {
  favouriteMeetups: [],
};
const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favouriteMeetups: [
          ...state.favouriteMeetups,
          action.payload.favouriteMeetup,
        ],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favouriteMeetups: state.favouriteMeetups.filter(
          (fav) => fav._id !== action.payload.meetupId
        ),
      };
    default:
      return {
        ...state,
      };
  }
};

export default favouriteReducer;
