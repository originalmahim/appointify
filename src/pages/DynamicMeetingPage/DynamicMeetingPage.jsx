import { useEffect, useState } from "react";
import OrganizerView from "./OrganizerView";
import ParticipantView from "./ParticipantView";
import OrganizerParticipantsToggler from "./OrganizerParticipantsToggler";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";

const DynamicMeetingPage = () => {
  const [isOrganizerView, setIsOrganizerView] = useState(true);
  const [meetingDetails, setMeetingDetails] = useState({});
  const axios = useAxiosPublic();

  //dynamic event id
  const { id } = useParams();

  useEffect(() => {
    axios.get(`events//singleEvent/${id}`).then((res) => {
      if (res.data) {
        setMeetingDetails(res?.data);
      }
    });
  }, []);

  const handleConfirmation = () => {
    console.log("Meeting confirmed or rescheduled.");
  };

  const handleAvailabilitySubmission = (selectedTimeSlots) => {
    console.log("Selected time slots:", selectedTimeSlots);
  };

  return (
    <section className="bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto mt-2 h-[85vh] overflow-hidden p-2 bg-white">
        <header className="bg-primary text-center p-2 text-white">
          Dynamic page
        </header>

        <div className="grid grid-cols-2 gap-2 h-[60vh] p-2">
          {/* Content based on Organizer or Participant view */}
          <div
            className={`transition-opacity ${
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

          <div className="bg-[#f5f5f5] h-[60vh]"></div>
        </div>
      </div>
    </section>
  );
};

export default DynamicMeetingPage;
