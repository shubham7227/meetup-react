import { combineReducers } from "redux";

import meetupReducer from "./meetupReducer";
import userReducer from "./userReducer";

export const reducers = combineReducers({
  meetupReducer,
  userReducer,
});
