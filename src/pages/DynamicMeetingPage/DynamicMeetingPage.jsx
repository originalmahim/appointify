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
import { calculateNewScheduled } from "../../utils/calculateNewScheduled";

const DynamicMeetingPage = () => {
  const { id } = useParams();
  const axios = useAxiosPublic();
  const [selectedDate, setSelectedDate] = useState(null); // Store selected date
  const [date, setDate] = useState(new Date()); // Initial date for display
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
      const res = await axios.get(`events/dayAvailability/${id}/allDays`);
      setAllowDays(res.data.dayNames);
    };

    getDays();
  }, [axios, id]);

  const handleSlotSubmit = async (slot) => {
    const dateString = date.toISOString();
    try {
      // Generate Google Calendar token
      generateToken();

      // func for scheduleTime post
      await scheduleTimePost(dateString, slot);
    } catch (error) {
      console.error(error.message);
    }
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

  async function scheduleTimePost(dateString, slot) {
    try {
      const convertedTime = convertTo24HourFormat(slot);
      const scheduled_time = calculateNewScheduled(dateString, convertedTime);
      console.log(scheduled_time);
      //post data
      const res = await axios.put(`/events/updateEvent/${id}`, {
        scheduled_time,
      });
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
              <Slots
                eventId={id}
                slotDay={selectedDay}
                handleSlotSubmit={handleSlotSubmit}
              />
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
        {meetingDetails?.platform}
      </div>
      <div className="flex items-center">
        <GlobeAltIcon className="h-6 w-6" />
        <Timezone />
      </div>
    </>
  );
}
