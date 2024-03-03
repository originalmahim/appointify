import { useEffect, useState } from "react";
import OrganizerView from "./OrganizerView";
import ParticipantView from "./ParticipantView";
import OrganizerParticipantsToggler from "./OrganizerParticipantsToggler";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import Calendar from "./Calendar/Calendar";
import Slots from "./Slots";
import BookingForm from "../BookingForm/BookingForm";
import useTransTackData from "../../hooks/useTransTackData";


const DynamicMeetingPage = () => {
  const [isOrganizerView, setIsOrganizerView] = useState(true);
  const [meetingDetails, setMeetingDetails] = useState({});
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [accessToken, setAccessToken] = useState(null);
  const { id } = useParams();
  const axios = useAxiosPublic();

  // Fetch event document by that id
  useEffect(() => {
    const fetchMeetingDetails = async () => {
      try {
        const res = await axios.get(`/events/singleEvent/${id}`);
        if (res.data) {
          setMeetingDetails(res.data);
        }
      } catch (error) {
        console.error("Error fetching meeting details:", error);
      }
    };
    fetchMeetingDetails();
  }, [axios, id]);

  // Fetch access token on component mount
  useEffect(() => {
    const accessToken = localStorage.getItem("access-token");
    setAccessToken(accessToken);
  }, []);

  // Handle confirmation button click
  const handleConfirmation = () => {
    console.log("Selected date:", selectedDate);
    console.log("Selected day:", selectedDay);

    // Generate Google Calendar token
    generateToken();
  };

  // Handle availability submission
  const handleAvailabilitySubmission = (selectedTimeSlots) => {
    console.log("Selected time slots:", selectedTimeSlots);
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
      <div className="max-w-5xl mx-auto mt-2 h-[90vh] overflow-hidden bg-white">
        <header className="bg-primary sticky z-10 top-0 text-center p-2 text-white">
          Dynamic page
        </header>

        <div className="md:grid grid-cols-12 gap-5 p-2">
          {/* Content based on Organizer or Participant view */}
          <div
            className={`transition-opacity col-span-6 ${
              isOrganizerView ? "opacity-100" : "opacity-100"
            } duration-300 ease-in-out sticky top-0 h-screen`}
          >
            {/* Toggle between Organizer and Participant views */}
            <OrganizerParticipantsToggler
              setIsOrganizerView={setIsOrganizerView}
              isOrganizerView={isOrganizerView}
            />

            {isOrganizerView ? (
              <OrganizerView
                meetingDetails={meetingDetails}
                onConfirmation={handleConfirmation}
                onReschedule={() => console.log("Reschedule clicked")}
              />
            ) : (
              <ParticipantView
                meetingDetails={meetingDetails}
                onAvailabilitySubmit={handleAvailabilitySubmission}
              />
            )}
          </div>
          {/* Calendar integration */}
          <div className="bg-[#f5f5f5c5] h-[80vh] col-span-4">
            <Calendar
              setSelectedDate={setSelectedDate}
              setSelectedDay={setSelectedDay}
            />
          </div>
          <div className="col-span-2 overflow-auto h-[80vh]">
            <h1 className="font-semibold sticky top-0 bg-white py-2">
              {selectedDay ? selectedDay : "Friday"}
            </h1>
            <Slots slotDay={selectedDay} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicMeetingPage;
