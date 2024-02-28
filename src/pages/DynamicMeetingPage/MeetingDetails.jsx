import { CiLocationOn, CiTimer } from "react-icons/ci";

const MeetingDetails = ({ meetingDetails, onReschedule, onConfirmation }) => {
  return (
    <div>
      <h1 className="text-[22px] text-left font-semibold">
        {meetingDetails.title}
      </h1>
      <p className="text-light-gray text-[15px] mb-6">
        Notes: {meetingDetails.notes}
      </p>

      <div className="flex gap-5 items-center">
        <p className="flex  items-center gap-1 outline p-1 px-3 outline-[1px] rounded-full outline-gray-300">
          <CiLocationOn />
          {meetingDetails.location}
        </p>
        <p className="flex  items-center gap-1 outline p-1 px-3 outline-[1px] rounded-full outline-gray-300">
          <CiTimer /> {meetingDetails.duration}
        </p>
      </div>

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
