import { combineReducers } from "redux";

import meetupReducer from "./meetupReducer";
import userReducer from "./userReducer";
import favouriteReducer from "./favouriteReducer";

export const reducers = combineReducers({
  meetupReducer,
  userReducer,
  favouriteReducer,
});
