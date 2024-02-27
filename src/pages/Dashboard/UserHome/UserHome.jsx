import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPlusCircle } from "react-icons/fa";
import { LiaCalendarWeekSolid } from "react-icons/lia";
// material tailwind
import { Input } from "@material-tailwind/react";
import AvailableDays from "./AvailableDays";
import AvailabilityDayAndTimeFormat from "../../../utils/AvailabilityDayAndTimeFormat";
import AvailableTimeRange from "./AvailableTimeRange";
import DurationSelector from "./DurationSelector";
import Participants from "./Participants";

const UserHome = () => {
  // // Manage all booking time state
  const [availableDays, setavailableDays] = useState([]);
  const [onDaysToggle, setOnDaysToggle] = useState(false);

  // State for start and end time
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // State for selected hour and minute
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");

  // State for selected hour and minute
  const [isOpenParticipants, setIsOpenParticipants] = useState(false);

  // State to keep track of the selected participant
  const [selectedParticipant, setSelectedParticipant] = useState([]);

  // Example usage in your handleDayToggle function
  const handleDayToggle = (day) => {
    setavailableDays((prevavailableDays) => {
      // push unchecked days to the state
      const updatedDays = prevavailableDays.includes(day)
        ? prevavailableDays.filter((d) => d !== day)
        : [...prevavailableDays, day];

      // return for updating newly checked days into the existing days array
      return updatedDays;
    });
  };

  // "events": [
  //   {
  //     "id": "event1",
  //     "type": "Meeting",
  //     "duration": 60,
  //     "buffer_time": 10,
  //     "location": "Virtual",
  //     "participants": [
  //       {"name": "Alice Smith", "email": "alice@example.com"}
  //     ],
  //     "scheduled_time": "2024-03-01T10:00:00",
  //     "status": "scheduled"
  //   }

  const handleSchedule = (e) => {
    e.preventDefault();

    // Available day and time slot
    const availability = AvailabilityDayAndTimeFormat(
      availableDays,
      startTime,
      endTime
    );

    //event
    const event = {
      type: "Meeting",
      // Duration in minutes
      duration: parseInt(selectedHour) * 60 + parseInt(selectedMinute),
      location: "virtual",
      participants: [{ name: "Alice Smith", email: "alice@example.com" }],
    };

    console.log(selectedParticipant);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | User Home</title>
      </Helmet>
      <section className="flex items-center container  justify-between">
        <h2 className="text-2xl font-bold sm:text-3xl">All Booking pages</h2>
        <h2
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="text-lg py-2 px-3 rounded-full bg-teal-100 hover:bg-teal-200 font-bold sm:text-xl inline-flex items-center cursor-pointer">
          Create booking page
          <FaPlusCircle className="ml-1" />
        </h2>
        {/* modal */}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box h-screen rounded-lg pt-7 bg-white">
            <h3 className="font-bold mb-3  text-center text-2xl">
              Set your availability
            </h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form onSubmit={handleSchedule}>
              <Input variant="static" placeholder="Title" />
              <div>
                <label className="block text-md mt-3  font-medium text-gray-500">
                  How long are your meetings for?
                </label>

                {/* Set hours and minutes*/}
                <DurationSelector
                  setSelectedHour={setSelectedHour}
                  setSelectedMinute={setSelectedMinute}
                />
              </div>
              <div className="mt-4">
                <label
                  onClick={() => setOnDaysToggle(!onDaysToggle)}
                  className="flex gap-1 items-center cursor-pointer text-md  font-medium text-gray-700">
                  {/* Days' dropdown toggler */}
                  <LiaCalendarWeekSolid />
                  Select Available Days:
                </label>

                {/* Available days component  */}
                <AvailableDays
                  handleDayToggle={handleDayToggle}
                  onDaysToggle={onDaysToggle}
                  availableDays={availableDays}
                />
              </div>

              {/* Choose your available time  */}
              <AvailableTimeRange
                setStartTime={setStartTime}
                setEndTime={setEndTime}
                startTime={startTime}
                endTime={endTime}
              />

              {/* Select participants */}
              <div>
                <p onClick={() => setIsOpenParticipants(!isOpenParticipants)}>
                  Open
                </p>
                <Participants
                  setSelectedParticipants={setSelectedParticipant}
                  selectedParticipants={selectedParticipant}
                  isOpenParticipants={isOpenParticipants}
                />
              </div>

              <button
                type="submit"
                className="btn mt-10 bg-black text-white btn-sm hover:bg-[#6445d4] hover:scale-105 transition-all duration-200">
                Confirm
              </button>
            </form>
          </div>
        </dialog>
      </section>
    </>
  );
};

export default UserHome;
