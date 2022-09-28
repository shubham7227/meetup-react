import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useMeetupContext } from "../store/MeetupContext";

const NewMeetupPage = () => {
  const navigate = useNavigate();
  const { addMeetup } = useMeetupContext();

  const handleAddMeetup = (meetupData) => {
    addMeetup(meetupData);
    navigate("/homepage", {replace: true})
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
};

export default NewMeetupPage;
