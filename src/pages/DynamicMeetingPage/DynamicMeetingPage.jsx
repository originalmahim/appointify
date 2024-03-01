import { useEffect, useState } from "react";
import OrganizerView from "./OrganizerView";
import ParticipantView from "./ParticipantView";
import OrganizerParticipantsToggler from "./OrganizerParticipantsToggler";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import Calendar from "./Calendar/Calendar";
import Slots from "./Slots";

const DynamicMeetingPage = () => {
  const [isOrganizerView, setIsOrganizerView] = useState(true);
  const [meetingDetails, setMeetingDetails] = useState({});
  const axios = useAxiosPublic();

  // calendar day select state
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  //dynamic event id
  const { id } = useParams();

  // fetch event document by that id
  useEffect(() => {
    axios.get(`events//singleEvent/${id}`).then((res) => {
      if (res.data) {
        setMeetingDetails(res?.data);
      }
    });
  }, [axios, id]);

  // join or rechedule button handler
  const handleConfirmation = () => {
    console.log("date", selectedDate);
    console.log(selectedDay);
  };

  const handleAvailabilitySubmission = (selectedTimeSlots) => {
    console.log("Selected time slots:", selectedTimeSlots);
  };

  return (
    <section className="bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto mt-2 h-[95vh]  bg-white">
        <header className="bg-primary sticky z-10 top-0 text-center p-2 text-white">
          Dynamic page
        </header>

        <div className="md:grid grid-cols-10 gap-2 p-2">
          {/* Content based on Organizer or Participant view */}
          <div
            className={`transition-opacity col-span-4 ${
              isOrganizerView ? "opacity-100" : "opacity-100"
            } duration-300 ease-in-out sticky top-0 h-screen`}>
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
          <div className="bg-[#f5f5f5c5] h-[100vh] col-span-4">
            <Calendar
              setSelectedDate={setSelectedDate}
              setSelectedDay={setSelectedDay}
            />
          </div>
          <div className="col-span-2 overflow-auto h-screen">
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
