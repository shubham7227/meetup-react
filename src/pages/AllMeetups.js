import { useState } from "react";
import classes from "./AllMeetups.module.css";
import MeetupList from "../components/meetups/MeetupList";
import { useMeetupContext } from "../store/MeetupContext";

const AllMeetupsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { Meetups } = useMeetupContext();

  const handleSearch = (event) => {
    const queryInput = event.target.value.toLowerCase();
    console.log(queryInput);
    setSearchQuery(queryInput);
  };

  const filteredMeetups = Meetups.filter((meetup) => {
    return meetup.title.toLowerCase().includes(searchQuery);
  });

  return (
    <section>
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
      {Meetups.length==0? <p>No any meetups to show!!</p>: filteredMeetups.length === 0 ? (
        <p>You do not have meetup matching with the search</p>
      ) : (
        <MeetupList meetups={filteredMeetups} />
      )}
    </section>
  );
};

export default AllMeetupsPage;
