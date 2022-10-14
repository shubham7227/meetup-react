import { useContext, useState } from "react";
import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";
// import MeetupContext from "../../context/meetup/meetup-context";

import { useSelector } from "react-redux";

const MeetupList = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  // const { meetupData } = useContext(MeetupContext);

  const meetupData = useSelector((state) => state.meetupReducer.meetups);

  const handleSearch = (event) => {
    const queryInput = event.target.value.toLowerCase();
    setSearchQuery(queryInput);
  };

  const filteredMeetups = meetupData.filter((meetup) => {
    return meetup.meetup_Title?.toLowerCase().includes(searchQuery);
  });

  return (
    <>
      <div className={classes.searchBox}>
        <input
          type="search"
          name="searchQuery"
          id="searchQuery"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>
      {meetupData.length == 0 ? (
        <p>No any meetups to show!!</p>
      ) : filteredMeetups.length === 0 ? (
        <p>You do not have meetup matching with the search</p>
      ) : (
        <ul className={classes.list}>
          {filteredMeetups.map((meetup) => (
            <MeetupItem
              key={meetup._id}
              id={meetup._id}
              image={meetup.meeting_Image_Url}
              title={meetup.meetup_Title}
              address={meetup.address}
              description={meetup.description}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default MeetupList;
