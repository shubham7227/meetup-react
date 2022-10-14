import { LOGIN, LOGOUT, SIGNUP } from "../../constants/actionTypes";

import * as api from "../../api/apiIndex.js";

export const Login = (formData, router) => async (dispatch) => {
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

export const Logout = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const Signup = (formData, router) => async (dispatch) => {
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

export const Googlelogin = (router) => async (dispatch) => {
  try {
    const data = await api.googlelogin();
    console.log(data);
    // dispatch({
    //   type: LOGIN,
    //   payload: data,
    // });
    // router("/homepage", { replace: true });
  } catch (error) {
    console.log(error.message);
  }
};
