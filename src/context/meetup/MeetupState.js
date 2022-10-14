// // Deprecated Replaced by Redux
// import { useReducer } from "react";

// import * as api from "../../api/apiIndex.js";
// import MeetupContext from "./meetup-context";
// import MeetupReducer from "./MeetupReducer";
// import {
//   LOAD_MEETUP,
//   ADD_MEETUP,
//   DELETE_MEETUP,
//   EDIT_MEETUP,
//   START_LOADING,
//   END_LOADING,
// } from "../../constants/actionTypes";

// const MeetupState = (props) => {
//   const initialState = {
//     meetups: [],
//     isLoading: true,
//   };

//   const [state, dispatch] = useReducer(MeetupReducer, initialState);

//   const loadMeetups = async (token) => {
//     try {
//       dispatch({ type: START_LOADING });
//       const { data } = await api.fetchMeetups(token);

//       setTimeout(() => {
//         dispatch({
//           type: LOAD_MEETUP,
//           payload: data.data,
//         });
//         dispatch({ type: END_LOADING });
//       }, 1000);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const addMeetup = async (meetup, router) => {
//     try {
//       dispatch({ type: START_LOADING });

//       const { data } = await api.addMeetup(meetup);

//       dispatch({
//         type: ADD_MEETUP,
//         payload: data,
//       });

//       setTimeout(() => {
//         dispatch({ type: END_LOADING });
//         router("/homepage", { replace: true });
//       }, 1000);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const deleteMeetup = async (meetupId) => {
//     try {
//       dispatch({ type: START_LOADING });

//       const { data } = await api.deleteMeetup(meetupId);

//       dispatch({
//         type: DELETE_MEETUP,
//         payload: meetupId,
//       });

//       dispatch({ type: END_LOADING });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const editMeetup = async (meetupId, updatedMeetup) => {
//     try {
//       dispatch({ type: START_LOADING });

//       const { data } = await api.updateMeetup(meetupId, updatedMeetup);

//       setTimeout(() => {
//         dispatch({
//           type: EDIT_MEETUP,
//           payload: {
//             id: meetupId,
//             meetupData: data.data,
//           },
//         });
//         dispatch({ type: END_LOADING });
//       }, 1000);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <MeetupContext.Provider
//       value={{
//         meetupData: state.meetups,
//         isLoading: state.isLoading,
//         loadMeetups,
//         addMeetup,
//         deleteMeetup,
//         editMeetup,
//       }}
//     >
//       {props.children}
//     </MeetupContext.Provider>
//   );
// };

// export default MeetupState;
