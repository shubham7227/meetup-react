import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

import { addMeetup } from "../redux/action/meetupAction";

const NewMeetupPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.meetupReducer.isLoading);
  const navigate = useNavigate();

  const handleAddMeetup = (meetupData) => {
    dispatch(addMeetup(meetupData, navigate));
  };

  if (isLoading) {
    return <p> Adding new meetup </p>;
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
};

export default NewMeetupPage;
