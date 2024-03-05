import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";

import Slots from "./Slots";
import BookingForm from "../BookingForm/BookingForm";
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
// import iconGoogleMeet from "../../assets/";

const DynamicMeetingPage = () => {
  const { id } = useParams();
  const axios = useAxiosPublic();
  const [meetingDetails, setMeetingDetails] = useState({});
  const [date, setDate] = useState(new Date());
  const selectedDay = getDayNameFromDate(date);
  const [allowDays, setAllowDays] = useState([]);
  const { data, isLoading } = useTransTackData(`/events/singleEvent/${id}`, id);
  console.log(selectedDay);
  // Fetch event document by that id
  useEffect(() => {
    if (data) {
      setMeetingDetails(data);
    }
  }, [data]);

  useEffect(() => {
    const getDays = async () => {
      const res = await axios.get(
        `events/dayAvailability/65e58d1d960b1d705dfc0c78/allDays`
      );
      setAllowDays(res.data.dayNames);
    };

    getDays();
  }, [axios]);

  // Handle confirmation button click
  const handleConfirmation = () => {
    console.log("Selected date:", selectedDate);
    console.log("Selected day:", selectedDay);

    // Generate Google Calendar token
    generateToken();
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
                <h1 className="font-semibold">
                  {selectedDay }
                </h1>
              </div>
              <Slots eventId={id} slotDay={selectedDay} />
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
        <SiGooglemeet className="text-green-500 h-6 w-6" /> {meetingDetails?.location}
      </div>
      <div className="flex items-center">
        <GlobeAltIcon className="h-6 w-6" />
        <Timezone />
      </div>
    </>
  );
}
