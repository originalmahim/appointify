import { useEffect, useState } from "react";
import OrganizerView from "./OrganizerView";
import ParticipantView from "./ParticipantView";
import OrganizerParticipantsToggler from "./OrganizerParticipantsToggler";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import Calendar from "./Calendar/Calendar";
import Slot from "../Availability/Slots";

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
    console.log("Meeting confirmed or rescheduled.");
  };

  const handleAvailabilitySubmission = (selectedTimeSlots) => {
    console.log("Selected time slots:", selectedTimeSlots);
  };

  return (
    <section className="bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto mt-2 h-[95vh] overflow-hidden bg-white">
        <header className="bg-primary text-center p-2 text-white">
          Dynamic page
        </header>

        <div className="md:grid grid-cols-10 gap-2 p-2">
          {/* Content based on Organizer or Participant view */}
          <div
            className={`transition-opacity col-span-4 ${
              isOrganizerView ? "opacity-100" : "opacity-100"
            } duration-300 ease-in-out`}>
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

          <div className="bg-[#f5f5f5c5] h-[100vh] col-span-4">
            <Calendar
              setSelectedDate={setSelectedDate}
              setSelectedDay={setSelectedDay}
            />
          </div>
          <div className="col-span-2 overflow-auto">
            <h1 className="font-semibold py-2">{selectedDay}</h1>
            {[
              {
                day: "wednesday",
                slots: [
                  { start_time: "07:30pm", end_time: "83" },
                  { start_time: "07:30pm", end_time: "83" },
                  { start_time: "07:30pm", end_time: "83" },
                  { start_time: "07:30pm", end_time: "83" },
                  { start_time: "07:30pm", end_time: "83" },
                ],
              },
            ].map((day) => (
              <div key={day.day} className="">
                {day.slots?.map((slot) => (
                  <Slot key={slot.day} slot={slot} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicMeetingPage;
