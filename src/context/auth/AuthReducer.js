// Deprecated Replaced by Redux
// import { LOGIN, LOGOUT, SIGNUP } from "../../constants/actionTypes";

// const AuthReducer = (state, action) => {
//   switch (action.type) {
//     case LOGIN:
//       localStorage.setItem("user", JSON.stringify({ ...action?.payload }));
//       return {
//         ...state,
//         authData: action.payload,
//         // loading: false,
//         // errors: null,
//       };
//     case LOGOUT:
//       localStorage.clear();
//       return {
//         ...state,
//         authData: null,
//         // loading: false,
//         // errors: null,
//       };

//     case SIGNUP:
//       localStorage.setItem("user", JSON.stringify({ ...action?.payload }));
//       return {
//         ...state,
//         authData: action.payload,
//         // loading: false,
//         // errors: null,
//       };
//     default:
//       return state;
//   }
// };

// export default AuthReducer;
