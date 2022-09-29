import { useReducer } from "react";

import * as api from "../../api/apiIndex.js";
import AuthContext from "./auth-context";
import AuthReducer from "./AuthReducer";

import { LOGIN, LOGOUT, SIGNUP } from "../../constants/actionTypes";

const AuthStateProvider = (props) => {
  const initialState = {
    authData: JSON.parse(localStorage.getItem("user")),
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const Login = async (formData, router) => {
    try {
      const data = await api.login(formData);
      //console.log(data.data);
      dispatch({
        type: LOGIN,
        payload: data.data,
      });
      router("/homepage", { replace: true });
    } catch (err) {
      console.log(err.message);
    }
  };

  const Logout = async () => {
    try {
      dispatch({
        type: LOGOUT,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const Signup = async (formData, router) => {
    try {
      const data = await api.signup(formData);
      console.log(data);
      dispatch({
        type: SIGNUP,
        payload: data,
      });
      router("/homepage", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const Googlelogin = async (router) => {
    try {
      const data = await api.googlelogin();
      dispatch({
        type: LOGIN,
        payload: data,
      });
      router("/homepage", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user: state.authData, Login, Logout, Signup, Googlelogin }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthStateProvider;
