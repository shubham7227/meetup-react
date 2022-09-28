import { useState, createContext, useContext, useEffect } from "react";
import { userAuthContext } from "./UserAuthContext";

const MeetupContext = createContext();
const SearchContext = createContext();

export function useMeetupContext() {
  return useContext(MeetupContext);
}

export function MeetupContextProvider(props) {
  const { user } = useContext(userAuthContext);
  const [Meetups, setMeetups] = useState([]);

  useEffect(() => {
    loadMeetups();
  }, [user]);

  const loadMeetups = () => {
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
        setMeetups(meetups);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteMeetup = async (meetupId) => {
    setMeetups((prev) => {
      return prev.filter((meetup) => meetup.id !== meetupId);
    });

    await fetch(
      `https://react-meetup-a13b8-default-rtdb.firebaseio.com/meetup/${meetupId}.json`,
      {
        method: "DELETE",
      }
    );
  };

  const addMeetup = async (meetup) => {
    await fetch(
      "https://react-meetup-a13b8-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    loadMeetups();
  };

  const updateMeetup = async (meetupId, meetupData) => {
    await fetch(
      `https://react-meetup-a13b8-default-rtdb.firebaseio.com/meetup/${meetupId}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    loadMeetups();
  };

  return (
    <MeetupContext.Provider
      value={{ Meetups, loadMeetups, deleteMeetup, addMeetup, updateMeetup }}
    >
      {props.children}
    </MeetupContext.Provider>
  );
}
