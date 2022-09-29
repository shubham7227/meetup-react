import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import MeetupContext from "../context/meetup/meetup-context";

const NewMeetupPage = () => {
  const navigate = useNavigate();
  const { addMeetup } = useContext(MeetupContext);

  const handleAddMeetup = (meetupData) => {
    addMeetup(meetupData, navigate);
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
};

export default NewMeetupPage;
