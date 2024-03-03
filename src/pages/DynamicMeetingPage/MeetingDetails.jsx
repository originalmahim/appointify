import { CiLocationOn, CiTimer } from "react-icons/ci";

const MeetingDetails = ({ meetingDetails, onReschedule, onConfirmation }) => {
  console.log(meetingDetails);
  return (
    <div className="relative">
      <h1 className="text-[22px] mb-1 text-left font-semibold">
        {meetingDetails.type}
      </h1>
      <p className="text-light-gray text-[15px] mb-6">
        Notes:{" "}
        {meetingDetails.notes
          ? meetingDetails.notes
          : "Hello there This meeting is about getting a design inspiration. thanks"}
      </p>

      <div className="flex gap-5 items-center">
        <p className="flex  items-center gap-1 outline p-1 px-3 outline-[1px] rounded-full outline-gray-300">
          <CiLocationOn />
          {meetingDetails.location}
        </p>
        <p className="flex  items-center gap-1 outline p-1 px-3 outline-[1px] rounded-full outline-gray-300">
          <CiTimer /> {meetingDetails.duration + "m"}
        </p>
      </div>

      {/* Buttons for confirmation and rescheduling */}
      <div className="absolute -bottom-40 right-0">
        <button
          onClick={onReschedule}
          className="outline outline-black outline-[1px] text-black hover:bg-red-500 hover:text-white transition-all duration-300 px-4 py-2 rounded mr-2">
          Reschedule
        </button>
        <button
          onClick={onConfirmation}
          className="outline outline-black-500 outline-[1px] text-black hover:bg-blue-500 hover:text-white transition-all duration-300 px-4 py-2 rounded mr-2">
          Join now
        </button>
      </div>
    </div>
  );
};

export default MeetingDetails;
