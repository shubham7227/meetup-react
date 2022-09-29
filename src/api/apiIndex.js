import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).accessToken
    }`;
  }
  return req;
});

export const googlelogin = () => API.get("/google");

export const signup = (userData) => API.post("/user/create", userData);

export const login = (userData) => API.post("/user/login", userData);

export const fetchMeetups = () => API.get("/meetup/");

export const addMeetup = (data) => API.post("/meetup/create/", data);

export const updateMeetup = (id, data) => API.put(`/meetup/${id}`, data);

export const deleteMeetup = (id) => API.delete(`/meetup/${id}`);

// For Firebase
// import {
//   signInWithGoogle,
//   userLogin,
//   userLogout,
//   userSignUp,
// } from "../firebase";
// const url = "https://react-meetup-a13b8-default-rtdb.firebaseio.com/meetup";
// const delimetter = "json";
// export const fetchMeetups = () => axios.get(`${url}.${delimetter}`);

// export const addMeetup = (newMeetup) =>
//   axios.post(`${url}.${delimetter}`, newMeetup)
// export const updateMeetup = (id,; updatedMeetup) =>
//   axios.patch(`${url}/${id}.${delimetter}`, updatedMeetup);

// export const deleteMeetup = (id) => axios.delete(`${url}/${id}.${delimetter}`);

// export const login = async (email, password) =>
//   await userLogin(email, password);

// export const logout = () => userLogout();

// export const signup = (name, email, password) =>
//   userSignUp(name, email, password);
