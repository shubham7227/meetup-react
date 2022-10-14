// Deprecated Replaced by Redux
// import {
//   LOAD_MEETUP,
//   ADD_MEETUP,
//   DELETE_MEETUP,
//   EDIT_MEETUP,
//   START_LOADING,
//   END_LOADING,
// } from "../../constants/actionTypes";

// const MeetupReducer = (state, action) => {
//   switch (action.type) {
//     case START_LOADING:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case END_LOADING:
//       return {
//         ...state,
//         isLoading: false,
//       };
//     case LOAD_MEETUP:
//       return {
//         ...state,
//         meetups: action.payload,
//       };
//     case ADD_MEETUP:
//       return {
//         ...state,
//         meetups: [...state.meetups, action.payload],
//       };
//     case DELETE_MEETUP:
//       return {
//         ...state,
//         meetups: state.meetups.filter(
//           (meetup) => meetup._id !== action.payload
//         ),
//       };
//     case EDIT_MEETUP:
//       return {
//         ...state,
//         meetups: state.meetups.map((meetup) =>
//           meetup._id === action.payload.id ? action.payload.meetupData : meetup
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export default MeetupReducer;
