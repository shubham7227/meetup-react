import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  checkFavourite: (meetupId) => {},
});

export function FavouriteContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  const handleAddFavourite = (favouriteMeetup) => {
    setUserFavourites((prevUserFavourite) => {
      return prevUserFavourite.concat(favouriteMeetup);
    });
  };

  const handleRemoveFavourite = (meetupId) => {
    setUserFavourites((prevUserFavourite) => {
      return prevUserFavourite.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const handleItemIsFavourite = (meetupId) => {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  };
  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: handleAddFavourite,
    removeFavourite: handleRemoveFavourite,
    checkFavourite: handleItemIsFavourite,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
