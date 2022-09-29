import { useState, useEffect, useContext } from "react";
import { userAuthContext } from "../store/UserAuthContext";
import classes from "./AllMeetups.module.css";
import MeetupList from "../components/meetups/MeetupList";
import { useMeetupContext } from "../store/MeetupContext";
import MeetupContext from "../context/meetup/meetup-context";

const AllMeetupsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useContext(userAuthContext);

  const { Meetups } = useMeetupContext();
  const { loadMeetups, meetupData } = useContext(MeetupContext);

  useEffect(() => {
    loadMeetups(user.email);
  }, [user]);

  const handleSearch = (event) => {
    const queryInput = event.target.value.toLowerCase();
    console.log(queryInput);
    setSearchQuery(queryInput);
  };

  const filteredMeetups = meetupData.filter((meetup) => {
    return meetup.title.toLowerCase().includes(searchQuery);
  });

  return (
    <section>
      {console.log(meetupData)}
      <div className={classes.title}>
        <h1>All Meetups</h1>
        <div>
          <input
            type="search"
            name="searchQuery"
            id="searchQuery"
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
      </div>
      {Meetups.length == 0 ? (
        <p>No any meetups to show!!</p>
      ) : filteredMeetups.length === 0 ? (
        <p>You do not have meetup matching with the search</p>
      ) : (
        <MeetupList meetups={filteredMeetups} />
      )}
    </section>
  );
};

export default AllMeetupsPage;
