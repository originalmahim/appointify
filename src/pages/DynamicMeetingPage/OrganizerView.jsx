
import MeetingDetails from "./MeetingDetails";

const OrganizerView = ({ meetingDetails, onConfirmation, onReschedule }) => {
  return (
    <div>
      <MeetingDetails
       meetingDetails={meetingDetails}
       onReschedule={onConfirmation}
       onConfirmation={onReschedule}/>
    </div>
  );
};

export default OrganizerView;
