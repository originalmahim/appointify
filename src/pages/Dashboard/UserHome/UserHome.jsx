// tempo is being tested


import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPlusCircle } from "react-icons/fa";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import { Input, Option, Select } from "@material-tailwind/react";
import AvailableDays from "./AvailableDays";
import AvailabilityDayAndTimeFormat from "../../../utils/AvailabilityDayAndTimeFormat";
import AvailableTimeRange from "./AvailableTimeRange";
import DurationSelector from "./DurationSelector";
import Participants from "./Participants";

import { LuUsers2 } from "react-icons/lu";
import BufferTime from "./BufferTime";
import { SiGooglemeet } from "react-icons/si";
import { BiLogoZoom } from "react-icons/bi";
import AllBookings from "../../../components/All-bookings/AllBookings";
import { SlCalender } from "react-icons/sl";
import { PopOver } from "../../../components/common/Popover/PopOver";
import { LuCalendarDays } from "react-icons/lu";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

import { MdCelebration } from "react-icons/md";
import BookingConfirmation from "./BookingConfirmation";
import { FaBowlingBall } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import Search from "../../../components/Search/Search";
import MeetingDescription from "./MeetingDescription";

const UserHome = () => {
  // use axios for data fetching
  const { user } = useContext(AuthContext);
  const axios = useAxiosPublic();

  // Manage all booking time state
  const [availableDays, setAvailableDays] = useState([]);
  const [onDaysToggle, setOnDaysToggle] = useState(false);

  // State for start and end time
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Selected hour, minute, schedule time, location, and platform
  const [title, setTitle] = useState("");
  const [meetingDescription, setDescriptionChange] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [location, setLocation] = useState("");
  const [platform, setPlatform] = useState("");

  // State for selected participant and buffer time
  const [isOpenParticipants, setIsOpenParticipants] = useState(false);
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [bufferTime, setBufferTime] = useState(0);

  //Posted event
  const [newAddedEvent, setNewlyAddedEvent] = useState({});
  const [isAddedEvent, setIsAddedEvent] = useState(false);

  // all events by search results
  const [allSearchedEvents,setAllSearchedEvents] = useState([])
  const [searchQuery,setSearchQuery] = useState("")

  
  
  // usage in your handleDayToggle function
  const handleDayToggle = (day) => {
    setAvailableDays((prevAvailableDays) => {
      // Push unchecked days to the state
      const updatedDays = prevAvailableDays.includes(day)
        ? prevAvailableDays.filter((d) => d !== day)
        : [...prevAvailableDays, day];

      // Return for updating newly checked days into the existing days array
      return updatedDays;
    });
  };

  const handleSchedule = async (e) => {
    e.preventDefault();

    // Available day and time slot
    const availability = AvailabilityDayAndTimeFormat(
      availableDays,
      startTime,
      endTime
    );

    const event = {
      type: title,
      description:meetingDescription,
      duration: parseInt(selectedHour) * 60 + parseInt(selectedMinute),
      buffer_time: bufferTime,
      location,
      platform,
      eventLink:"",
      participants: selectedParticipants,
      scheduled_time: "",
      status: "scheduled",
      availability,
    };

    const response = await axios.post(
      `/events/${user&&user?.email}`,
      event
    );
    if (response.data._id) {
      setNewlyAddedEvent(response.data);
      setIsAddedEvent(true);
    } else {
      setIsAddedEvent(false);
    }
  };

  // Search handler
  const handleSearchSubmit = async(query) => {
    setSearchQuery(query)
    const allSearchEvents = await axios.get(`/events/eventsSearch/${user&&user?.email}/${query}`)
    if(allSearchEvents?.data?.length > 0){
      setAllSearchedEvents(allSearchEvents.data)
    } else{
      setAllSearchedEvents([])
    }
    
  };


  return (
    <>
      <Helmet>
        <title>Dashboard | User Home</title>
      </Helmet>

      {/* Section for creating and managing bookings */}
      <section className="flex items-center bg-white z-50 mt-4 mb-5 p-2 justify-between">
        <div className="flex justify-between w-[100%] items-center">
          <div className="flex gap-2 items-center sticky top-0">
            <h2 className="md:text-[22px] font-semibold flex gap-2 items-center my-3  sm:text-2xl">
              All Bookings
              <SlCalender className="text-[18px]" />
            </h2>
          </div>
          {/* Search all off your booking and other stuff */}
          <Search
            onChange={handleSearchSubmit}
            placeholder="Search your events.."
          />

          {/* Button for creating a new booking */}
          <h2
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="rounded-full w-9 h-9 justify-center bg-primary  text-white hover:bg-[#ff5e00] transition-all duration-300 inline-flex items-center cursor-pointer relative"
            title="Create booking"
          >
            <FaPlusCircle />
           
          </h2>
        </div>
        {/* Modal for creating a new booking */}
        <dialog id="my_modal_3" className="modal">
          {/* Modal content */}
          <div
            className={`modal-box h-screen rounded-lg pt-7 bg-white overflow-x-hidden "overflow-auto"
            }`}
          >
            <h3 className="font-bold mb-3 text-center text-2xl flex items-center gap-1 justify-center">
              {isAddedEvent ? "" : "Set your availability"}
              {isAddedEvent ? (
                <div className="p-4 bg-gray-50 rounded-full relative">
                  <FaBowlingBall className="absolute -right-[250px] text-gray-400 opacity-5 top-72 text-[200px]  text" />
                  <MdCelebration className="text-[#ff7328] text-5xl z-10" />
                </div>
              ) : (
                <LuCalendarDays className="text-[#c5c5c5]" />
              )}
            </h3>

            {/* Close button */}
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            {/* Form for creating a booking */}
            {isAddedEvent ? (
              <>
                <BookingConfirmation event={newAddedEvent} />
              </>
            ) : (
              <>
                <form onSubmit={handleSchedule} className="space-y-6">
                  {/* Title input */}
                  <Input
                    variant="static"
                    defaultValue={"space 1 "}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                  />

                  {/* Meeting description */}
                  <MeetingDescription setDescriptionChange={setDescriptionChange}/>

                  <div>
                    {/* Set hours and minutes for the meeting duration */}
                    <DurationSelector
                      setSelectedHour={setSelectedHour}
                      setSelectedMinute={setSelectedMinute}
                    />
                  </div>

                  {/* Available days and participants selection */}
                  <div className="mt-4 flex relative justify-between items-center">
                    <div className="border-b-[1px] border-[#b4b3b3] w-[46%] flex justify-between pb-3">
                      {/* Available days label and dropdown */}
                      <label
                        onClick={() => setOnDaysToggle(!onDaysToggle)}
                        defaultChecked
                        className="flex gap-1 items-center text-[14px] cursor-pointer text-gray-600"
                      >
                        <LiaCalendarWeekSolid className="text-[14px]" />
                        Available Days:
                      </label>

                      {/* Available days component */}
                      <AvailableDays
                        handleDayToggle={handleDayToggle}
                        onDaysToggle={onDaysToggle}
                        availableDays={availableDays}
                      />
                    </div>
                    <span className="text-gray-500">:</span>
                    {/* Participants selection */}
                    <div className="border-b-[1px] border-[#b4b3b3] w-[46%] flex justify-between pb-3">
                      <p
                        onClick={() =>
                          setIsOpenParticipants(!isOpenParticipants)
                        }
                        className="flex gap-1 items-center text-[14px] cursor-pointer text-gray-600"
                      >
                        <LuUsers2 className="text-[14px]" /> Participants
                      </p>

                      {/* Participants component */}
                      <Participants
                        setSelectedParticipants={setSelectedParticipants}
                        selectedParticipants={selectedParticipants}
                        isOpenParticipants={isOpenParticipants}
                      />
                    </div>
                  </div>

                  {/* Available time range */}
                  <AvailableTimeRange
                    setStartTime={setStartTime}
                    setEndTime={setEndTime}
                    startTime={startTime}
                    endTime={endTime}
                  />

                  {/* Buffer time and Location selection */}
                  <div className="flex gap-2 justify-between items-center space-x-2 mt-4">
                    <BufferTime setBufferTime={setBufferTime} />
                    <span className="text-gray-500">:</span>

                    {/* Location selection */}
                    <div className="w-1/2">
                      <Select
                        label="Location"
                        variant="standard"
                        onChange={setLocation}
                      >
                        <Option value="Physical">Physical</Option>
                        <Option value="Virtual">Virtual</Option>
                      </Select>
                    </div>
                  </div>

                  {/* Platform and Scheduled time selection */}
                  <div className="flex gap-2 justify-between items-center space-x-2 mt-4">
                    {/* Platform selection */}
                    <div className="w-1/2">
                      <Select
                        label="Platform"
                        style={{ display: "flex" }}
                        variant="standard"
                        onChange={setPlatform}
                      >
                        <Option
                          value="zoom"
                          className="flex items-center gap-2"
                        >
                          <BiLogoZoom className="text-xl text-[blue]" /> Zoom
                        </Option>
                        <Option
                          value="google-meet"
                          className="flex items-center gap-2"
                        >
                          <SiGooglemeet className="text-[#00A745]" />
                          Google Meet
                        </Option>
                      </Select>
                    </div>
                    <span className="text-gray-500">:</span>

                    {/* Scheduled time input */}
                    <div className="w-1/2">
                      <input
                        title="Schedule time"
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

                  {/* Confirm button */}
                  <div className="flex ">
                    <button
                      type="submit"
                      className="mt-10 bg-primary font-normal px-8 py-1 rounded-sm text-white  hover:bg-[#ff5900] hover:rounded-none transition-all duration-200"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </dialog>
      </section>

      {/* Display all booking pages */}
      <AllBookings 
      setAllSearchedEvents={setAllSearchedEvents}
      searchQuery={searchQuery}
      searchedEvents={allSearchedEvents} />
    </>
  );
};

export default UserHome;
