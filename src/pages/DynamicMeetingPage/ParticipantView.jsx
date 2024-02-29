import MeetingDetails from "./MeetingDetails";
import { ParticipantsList } from "./Participants";

const ParticipantView = ({
  meetingDetails,
  onConfirmation,
  onReschedule,
}) => {
  // Sample participant list
  const participants = [
    {
      name: "Participant 1",
      status: "Confirmed",
      availability: "10:00 AM - 11:00 AM",
    },
    { name: "Participant 2", status: "Pending", availability: "Not submitted" },
    // Add more participants as needed
  ];

  return (
    <div className="">
      <MeetingDetails
        meetingDetails={meetingDetails}
        onReschedule={onConfirmation}
        onConfirmation={onReschedule}
      />

      {/* Display the participant list */}
      <ParticipantsList participants={participants} />
    </div>
  );
};

export default ParticipantView;
