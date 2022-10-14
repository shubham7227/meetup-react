import { useEffect } from "react";
import Loading from "react-simple-loading";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loadMeetups } from "../../redux/action/meetupAction";
import { Logout } from "../../redux/action/userAction";

import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.meetupReducer.isLoading);
  const user = useSelector((state) => state.userReducer.authData);

  const Navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Navigate("/", { replace: true });
    } else {
      dispatch(loadMeetups());
    }
  }, [dispatch, user]);

  const handleLogout = async () => {
    const res = dispatch(Logout());
  };
  return (
    <div className={classes.mainContent}>
      <MainNavigation
        loggedInUser={user?.displayName}
        handleLogout={handleLogout}
      />
      {isLoading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <main className={classes.main}>{props.children}</main>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
