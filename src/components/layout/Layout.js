import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";
import { userAuthContext } from "../../store/UserAuthContext";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const { user } = useContext(userAuthContext);

  const Navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Navigate("/", { replace: true });
    }
  }, [user]);

  //PRev Working
  // const [user, loading, error] = useAuthState(auth);

  // useEffect(() => {
  //   if (loading) {
  //     return;
  //   }
  //   if (!user) {
  //     Navigate("/", { replace: true });
  //   }
  // }, [user, loading]);

  const handleLogout = async () => {
    const res = await logout();
  };
  return (
    <div>
      <MainNavigation
        loggedInUser={user?.displayName}
        handleLogout={handleLogout}
      />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
