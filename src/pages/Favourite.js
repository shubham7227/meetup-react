import { useContext } from "react";

import FavouriteContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetupList";
import { useMeetupContext } from "../store/MeetupContext";

const FavouritePage = () => {
  const favouriteContext = useContext(FavouriteContext);
  let content;

  if (favouriteContext.totalFavourites === 0) {
    content = <p>You do not have any favourites</p>;
  } else {
    content = <MeetupList meetups={favouriteContext.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};

export default FavouritePage;
