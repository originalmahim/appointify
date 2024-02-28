import { useState } from "react";
import OrganizerView from "./OrganizerView";
import ParticipantView from "./ParticipantView";
import OrganizerParticipantsToggler from "./OrganizerParticipantsToggler";

const DynamicMeetingPage = () => {
  const [isOrganizerView, setIsOrganizerView] = useState(true);

  const meetingDetails = {
    title: "Sample Meeting",
    type: "General",
    location: "Virtual",
    duration: "1 hour",
    notes: "Lorem ipsum dolor sit amet.",
  };

  const availableTimeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "1:00 PM - 2:00 PM",
    // Add more time slots as needed
  ];

  const handleConfirmation = () => {
    console.log("Meeting confirmed or rescheduled.");
  };

  const handleAvailabilitySubmission = (selectedTimeSlots) => {
    console.log("Selected time slots:", selectedTimeSlots);
  };

  return (
    <section className="bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto mt-2 h-[95vh] bg-white">
        <header className="bg-primary text-center p-1 text-white">
          Dynamic page
        </header>

        <div className="grid grid-cols-2 gap-2 h-[60vh] p-2">
          {/* Content based on Organizer or Participant view */}
          <div
            className={`transition-opacity ${
              isOrganizerView ? "opacity-100" : "opacity-100"
            } duration-300 ease-in-out`}>
            <h1 className="text-[22px] font-semibold">
              {meetingDetails.title}
            </h1>

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
                availableTimeSlots={availableTimeSlots}
                onAvailabilitySubmit={handleAvailabilitySubmission}
              />
            )}
          </div>

          <div className="bg-[#f5f5f5] h-[60vh]"></div>
        </div>
      </div>
    </section>
  );
};

export default DynamicMeetingPage;
