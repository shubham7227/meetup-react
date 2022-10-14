import { useState, useEffect, useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
// import MeetupContext from "../context/meetup/meetup-context";
// import AuthContext from "../context/auth/auth-context";

const AllMeetupsPage = () => {
  // const { user } = useContext(AuthContext);

  // const { loadMeetups } = useContext(MeetupContext);

  // useEffect(() => {
  //   if (user) {
  //     loadMeetups();
  //   }
  //   // console.log(Meetups);
  // }, [user]);

  return (
    <section>
      <div>
        <h1>All Meetups</h1>
      </div>
      <MeetupList />
    </section>
  );
};

export default AllMeetupsPage;
