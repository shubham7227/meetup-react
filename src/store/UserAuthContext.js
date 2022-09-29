//Replaced by useContext + useReducer

// import { useState, useEffect } from "react";
// import { createContext, useContext } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase";

// export const userAuthContext = createContext();

// const UserAuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
//       setUser(currentuser);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <userAuthContext.Provider value={{user}}>{children}</userAuthContext.Provider>
//   );
// };

// export default UserAuthContextProvider;
