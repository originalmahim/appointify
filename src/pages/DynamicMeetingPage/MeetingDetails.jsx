import { CiLocationOn, CiTimer } from "react-icons/ci";

const MeetingDetails = ({meetingDetails, onReschedule,onConfirmation}) => {
  return (
    <div>
      <p className="flex  items-center gap-1">
        <CiLocationOn />
        {meetingDetails.location}
      </p>
      <p className="flex  items-center gap-1">
        <CiTimer /> {meetingDetails.duration}
      </p>
      <p>Notes: {meetingDetails.notes}</p>

      {/* Buttons for confirmation and rescheduling */}
      <div className="mt-4">
        <button
          onClick={onConfirmation}
          className="text-[green] px-4 py-2 rounded mr-2">
          Confirm Meeting
        </button>
        <button
          onClick={onReschedule}
          className="text-blue-500  px-4 py-2 rounded">
          Reschedule
        </button>
      </div>
    </div>
  );
};

export default MeetingDetails;
