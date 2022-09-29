import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth/auth-context";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const { user, Logout } = useContext(AuthContext);

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
    const res = await Logout();
  };
  return (
    <div className={classes.mainContent}>
      <MainNavigation
        loggedInUser={user?.data.name}
        handleLogout={handleLogout}
      />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
