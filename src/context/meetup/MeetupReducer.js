import {
  LOAD_MEETUP,
  ADD_MEETUP,
  DELETE_MEETUP,
  EDIT_MEETUP,
} from "./meetup-action";

const MeetupReducer = (state, action) => {
  switch (action.type) {
    case LOAD_MEETUP:
      const loadedMeetups = [...state.meetups];
      fetch(
        "https://react-meetup-a13b8-default-rtdb.firebaseio.com/meetup.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw Error(response.statusText);
          }
        })
        .then((data) => {
          for (const key in data) {
            if (data[key].email === action.payload) {
              const meetup = {
                id: key,
                ...data[key],
              };
              loadedMeetups.push(meetup);
            }
          }
        });
      return {
        ...state,
        meetups: loadedMeetups,
      };
    case ADD_MEETUP:
      const toTest = [];
      const data = { a: "a", b: "b" };
      return {
        ...state,
        meetups: [...state.meetups],
      };
    case DELETE_MEETUP:
      return {};
    case EDIT_MEETUP:
      return {};
    default:
      return state;
  }
};

export default MeetupReducer;
