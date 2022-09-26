import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { userAuthContext } from "../store/UserAuthContext";
import classes from "./AllMeetups.module.css";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useContext(userAuthContext);

  useEffect(() => {
    fetch("https://react-meetup-a13b8-default-rtdb.firebaseio.com/meetup.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          if (data[key].email === user.email) {
            const meetup = {
              id: key,
              ...data[key],
            };
            meetups.push(meetup);
          }
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  const handleSearch = (event) => {
    const queryInput = event.target.value.toLowerCase();
    console.log(queryInput);
    setSearchQuery(queryInput);
  };

  const filteredMeetups = loadedMeetups.filter((meetup) => {
    return meetup.title.toLowerCase().includes(searchQuery);
  });

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

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
      {loadedMeetups.length==0? <p>No any meetups to show!!</p>: filteredMeetups.length === 0 ? (
        <p>You do not have meetup matching with the search</p>
      ) : (
        <MeetupList meetups={filteredMeetups} />
      )}
    </section>
  );
};

export default AllMeetupsPage;
