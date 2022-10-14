import { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

import { useSelector } from "react-redux";

const AllMeetupsPage = () => {
  const meetupData = useSelector((state) => state.meetupReducer.meetups);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const queryInput = event.target.value.toLowerCase();
    setSearchQuery(queryInput);
  };

  const filteredMeetups = meetupData.filter((meetup) => {
    return meetup.meetup_Title?.toLowerCase().includes(searchQuery);
  });

  return (
    <section>
      <div>
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
      <MeetupList meetupData={filteredMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
