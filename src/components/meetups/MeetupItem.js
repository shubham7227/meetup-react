import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouriteContext from "../../store/favourite-context";

const MeetupItem = (props) => {
  const favouriteContext = useContext(FavouriteContext);

  const isItemFavourite = favouriteContext.checkFavourite(props.id);
  const handleToggleFavourite = () => {
    if (isItemFavourite) {
      favouriteContext.removeFavourite(props.id);
    } else {
      favouriteContext.addFavourite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleToggleFavourite}>
            {isItemFavourite
              ? "Remove from Favourite"
              : "Add item to Favourite"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
