import MeetupList from "../components/meetups/MeetupList";
import { useSelector } from "react-redux";

const FavouritePage = () => {
  const favourites = useSelector(
    (state) => state.favouriteReducer.favouriteMeetups
  );
  console.log(favourites);
  let content;

  if (favourites.length === 0) {
    content = <p>You do not have any favourites</p>;
  } else {
    content = <MeetupList meetupData={favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};

export default FavouritePage;
