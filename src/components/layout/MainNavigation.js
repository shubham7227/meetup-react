import { useContext } from "react";
import { Link } from "react-router-dom";

import FavouriteContext from "../../store/favourite-context";
import classes from './MainNavigation.module.css'

const MainNavigation = (props) => {
  const favouriteContext = useContext(FavouriteContext)
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/homepage">MeetUps</Link></div>
      <nav>
        <ul>
          <li>
            <Link to="/homepage">All Meetup</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">Favourite <span className={classes.badge}>{favouriteContext.totalFavourites}</span></Link>
          </li>
          <li>
            <button onClick={props.handleLogout}>Logout {props.loggedInUser}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
