import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPlusCircle } from "react-icons/fa";
import { LiaCalendarWeekSolid } from "react-icons/lia";
// material tailwind
import { Input, Option, Select } from "@material-tailwind/react";
import AvailableDays from "./AvailableDays";
import AvailabilityDayAndTimeFormat from "../../../utils/AvailabilityDayAndTimeFormat";
import AvailableTimeRange from "./AvailableTimeRange";
import DurationSelector from "./DurationSelector";
import Participants from "./Participants";
import { LuUsers2 } from "react-icons/lu";
import BufferTime from "./BufferTime";
// platform icon
import { SiGooglemeet } from "react-icons/si";
import { BiLogoZoom } from "react-icons/bi";
import AllBookings from "../../../components/All-bookings/AllBookings";
import { SlCalender } from "react-icons/sl";
import { PopOver } from "../../../components/common/Popover/PopOver";

const UserHome = () => {
  // // Manage all booking time state
  const [availableDays, setavailableDays] = useState([]);
  const [onDaysToggle, setOnDaysToggle] = useState(false);

  // State for start and end time
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // selected hour, minute, schedule time,location and platform
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [location, setLocation] = useState("");
  const [platform, setPlatform] = useState("");

  // State selected participant and buffer time
  const [isOpenParticipants, setIsOpenParticipants] = useState(false);
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [bufferTime, setBufferTime] = useState(0);

  //hover state
  const [isCreateBookingHover, setIsCreateBookingHover] = useState(false);

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
      buffer_time: bufferTime,
      location,
      participants: selectedParticipants,
      scheduled_time: scheduleTime,
      status: "pending",
      platform,
      availability,
    };

    console.log(event);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | User Home</title>
      </Helmet>
      <section className="flex items-center container sticky top-0 z-50 bg-white mb-2 p-2 justify-between">
        <h2 className="text-2xl flex gap-2 items-center mb-3 font-bold sm:text-2xl">
          <SlCalender />
          All Booking pages
        </h2>
        <h2
          onMouseEnter={() => setIsCreateBookingHover(true)}
          onMouseLeave={() => setIsCreateBookingHover(false)}
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="  rounded-full bg-primary text-white hover:bg-[#ff5e00] p-2  transition-all duration-300 inline-flex items-center cursor-pointer relative">
          <FaPlusCircle className="ml-1" />
          <PopOver
            text={"Create booking page"}
            isHover={isCreateBookingHover}
          />
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

              <div className="mt-4 flex justify-between items-center">
                <div>
                  <label
                    onClick={() => setOnDaysToggle(!onDaysToggle)}
                    className="flex gap-1 items-center cursor-pointer   font-medium text-gray-700">
                    {/* Days' dropdown toggler */}
                    <LiaCalendarWeekSolid className="text-[18px]" />
                    Available Days:
                  </label>

                  {/* Available days component  */}
                  <AvailableDays
                    handleDayToggle={handleDayToggle}
                    onDaysToggle={onDaysToggle}
                    availableDays={availableDays}
                  />
                </div>
                {/* Select participants */}
                <div>
                  <p
                    onClick={() => setIsOpenParticipants(!isOpenParticipants)}
                    className="flex items-center gap-1">
                    <LuUsers2 className="text-[18px]" /> Participants
                  </p>
                  <Participants
                    setSelectedParticipants={setSelectedParticipants}
                    selectedParticipants={selectedParticipants}
                    isOpenParticipants={isOpenParticipants}
                  />
                </div>
              </div>

              {/* Choose your available time  */}
              <AvailableTimeRange
                setStartTime={setStartTime}
                setEndTime={setEndTime}
                startTime={startTime}
                endTime={endTime}
              />

              {/* Buffer time & Location */}
              <div className="flex gap-2 justify-between items-center space-x-2 mt-4">
                <BufferTime setBufferTime={setBufferTime} />

                <span className="text-gray-500">:</span>
                <div className="w-1/2">
                  <Select
                    label="Location"
                    variant="standard"
                    onChange={setLocation}>
                    <Option value="Physical">Physical</Option>
                    <Option value="Virtual">Virtual</Option>
                  </Select>
                </div>
              </div>

              <div className="flex gap-2 justify-between items-center space-x-2 mt-4">
                {/* Platform  */}
                <div className="w-1/2">
                  <Select
                    label="Platform"
                    style={{ display: "flex" }}
                    variant="standard"
                    onChange={setPlatform}>
                    <Option value="zoom" className="flex items-center gap-2">
                      <BiLogoZoom className="text-xl text-[blue]" /> Zoom
                    </Option>
                    <Option
                      value="google-meet"
                      className="flex items-center gap-2">
                      <SiGooglemeet className="text-[#00A745]" />
                      Google Meet
                    </Option>
                  </Select>
                </div>
                <span className="text-gray-500">:</span> {/* Scheduled time  */}
                <div className="w-1/2">
                  <input
                    title="Shedule time"
                    required
                    className="h-8 w-1/2 rounded-md focus-within:outline-none cursor-pointer border px-2 appearance-none"
                    type="time"
                    name="start"
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                    // Specify time format to include AM/PM
                    inputMode="text"
                    pattern="[0-9]{2}:[0-9]{2} [APap][mM]"
                  />
                </div>
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
      {/*All bookings page  */}
      <AllBookings />
    </>
  );
};

export default UserHome;
