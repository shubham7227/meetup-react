import { useContext, useState, useEffect } from "react";
import { userAuthContext } from "../store/UserAuthContext";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
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
          if(user && data[key].email === user.email) {
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
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
