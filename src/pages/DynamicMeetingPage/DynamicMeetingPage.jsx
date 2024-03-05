import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";

import Slots from "./Slots";
import useTransTackData from "../../hooks/useTransTackData";
import {
  ClockIcon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { SiGooglemeet } from "react-icons/si";
import Timezone from "../../components/Timezone/Timezone";
import Calendar from "./Calendar/Calendar";
import getDayNameFromDate from "../../utils/getDayNameFromDate";
import Loading from "../../components/common/Loading/Loading";
import { convertTo24HourFormat } from "../../utils/convertTo24HourFormat";

const DynamicMeetingPage = () => {
  const { id } = useParams();
  const axios = useAxiosPublic();
  const [date, setDate] = useState(new Date());
  const selectedDay = getDayNameFromDate(date);
  const [allowDays, setAllowDays] = useState([]);
  const [meetingDetails, setMeetingDetails] = useState({});
  const { data, isLoading } = useTransTackData(`/events/singleEvent/${id}`, id);

  //loading
  if (isLoading) <Loading />;
  // Fetch event document by that id
  useEffect(() => {
    if (data) {
      setMeetingDetails(data);
    }
  }, [data]);

  useEffect(() => {
    const getDays = async () => {
      const res = await axios.get(
        `events/dayAvailability/${id}/allDays`
      );
      setAllowDays(res.data.dayNames);
    };

    getDays();
  }, [axios,id]);

console.log(date);
  const handleSlotSubmit = (slot) => {
    const s = convertTo24HourFormat(slot)
    console.log(s);
    // Generate Google Calendar token
    // generateToken();
  };

  // Function to generate Google Calendar token
  const generateToken = async () => {
    try {
      const logRes = await axios.get("/google");
      if (logRes.status) {
        window.location.replace(logRes.data);
        localStorage.setItem("eventId", id);
  
      }
    } catch (error) {
      console.error("Error generating Google Calendar token:", error);
    }
  };

//post event schedule time

async function scheduleTimePost(){
  try {
    const res = axios.put(`/events/updateEvent/${id}`);
    console.log(res);
  } catch (err) {
    console.error("Error post schedule time");
    
  }
}







  return (
    <section className="bg-[#FAFAFA]">
      <div className="max-w-5xl mt-20 mx-auto">
        <div className="h-[500px]  shadow-orange-700 shadow rounded bg-white">
          <header>{/* Your header content */}</header>

          <p className="bg-primary p-2 rounded-t text-white">
            Set your booking
          </p>

          <main className="grid grid-cols-1 md:grid-cols-12 gap-5 p-2 mt-4">
            {/* Content based on Organizer or Participant view */}
            <div className="md:col-span-3 space-y-2">
              <EventInfo meetingDetails={meetingDetails} />
            </div>

            {/* Calendar integration */}
            <div className="md:border-x-2 md:border-gray-900 md:col-span-6">
              <Calendar
                date={date}
                setDate={setDate}
                selectedDate={selectedDay}
                allowedDays={allowDays}
              />
            </div>

            <div className="md:col-span-3">
              {/* Slots content */}
              <div className="top-0 bg-white py-2 ">
                <h1 className="font-semibold">{selectedDay}</h1>
              </div>
              <Slots eventId={id} slotDay={selectedDay} handleSlotSubmit={handleSlotSubmit} />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default DynamicMeetingPage;

function EventInfo({ meetingDetails }) {
  return (
    <>
      <div>
        <UserCircleIcon className="h-6 w-6" />
        <p className="text-md">Forhad Hossain</p>
      </div>
      <h2 className="text-2xlb font-bold">{meetingDetails.type}</h2>
      <div className="flex gap-2 text-md">
        {" "}
        <ClockIcon className="h-6 w-6" />
        {meetingDetails?.duration} mins
      </div>
      <div className="flex items-center gap-2">
        <SiGooglemeet className="text-green-500 h-6 w-6" />{" "}
        {meetingDetails?.location}
      </div>
      <div className="flex items-center">
        <GlobeAltIcon className="h-6 w-6" />
        <Timezone />
      </div>
    </>
  );
}
function getNewScheduledDate(dateString, scheduleTime) {
  // Validate date and time formats for robustness
  const datePattern1 = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD
  const datePattern2 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/; // YYYY-MM-DDTHH:MM:SS.sssZ (including milliseconds and timezone)

  // Check both date patterns and throw an error if neither match
  if (!dateString.match(datePattern1) && !dateString.match(datePattern2)) {
    throw new Error(
      "Invalid date format. Expected either YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS.sssZ."
    );
  }

  // Parse the date and time strings into Date objects
  let date;
  if (dateString.match(datePattern1)) {
    // Handle YYYY-MM-DD format
    date = new Date(dateString);
  } else {
    // Handle YYYY-MM-DDTHH:MM:SS.sssZ format
    // Create a new Date object without timezone information
    date = new Date(dateString.slice(0, -1));
  }

  const hours = parseInt(scheduleTime.split(":")[0], 10);
  const minutes = parseInt(scheduleTime.split(":")[1], 10);

  // Set the hours and minutes of the date to the scheduled time, without modifying the timezone
  date.setUTCHours(hours, minutes, 0, 0); // Use setUTCHours to preserve timezone

  // Return the newly scheduled date as an ISO string, including the timezone
  return date.toISOString();
}

// Example usage:
const dateString = "2024-03-05T12:08:20.000Z"; // Your input date
const scheduleTime = "11:40";

try {
  const newScheduledDate = getNewScheduledDate(dateString, scheduleTime);
  console.log(newScheduledDate); // Output: "2024-03-05T11:40:00.000Z"
} catch (error) {
  console.error(error.message);
}

