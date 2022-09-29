import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBuxP0_1C_qXTJDqoVtVCBwJki0q_8ZgOg",
  authDomain: "react-meetup-a13b8.firebaseapp.com",
  databaseURL: "https://react-meetup-a13b8-default-rtdb.firebaseio.com",
  projectId: "react-meetup-a13b8",
  storageBucket: "react-meetup-a13b8.appspot.com",
  messagingSenderId: "335239211736",
  appId: "1:335239211736:web:515ed22fa5b210947185ad",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const userRef = await ref(db, "users/" + user.uid);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        set(ref(db, "users/" + user.uid), {
          name: user.displayName,
          email: user.email,
        });
      }
    });

    return user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const userLogin = async (email, password) => {
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user;
  } catch (err) {
    throw err;
  }
};

const userSignUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await updateProfile(user, {
      displayName: name,
    });
    await set(ref(db, "users/" + res.user.uid), {
      name: name,
      email: email,
    });
    return user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    return err;
  }
};

const userLogout = () => {
  signOut(auth);
};

const fetchMeetings = async () => {};

export {
  app,
  auth,
  db,
  signInWithGoogle,
  userLogin,
  userSignUp,
  sendPasswordReset,
  userLogout,
};
