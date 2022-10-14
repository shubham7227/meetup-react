import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

const MeetupList = ({ meetupData }) => {
  return (
    <>
      {meetupData.length === 0 ? (
        <p>You do not have meetup matching with the search</p>
      ) : (
        <ul className={classes.list}>
          {meetupData.map((meetup) => (
            <MeetupItem
              key={meetup._id}
              id={meetup._id}
              image={meetup.meeting_Image_Url}
              title={meetup.meetup_Title}
              address={meetup.address}
              description={meetup.description}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default MeetupList;
