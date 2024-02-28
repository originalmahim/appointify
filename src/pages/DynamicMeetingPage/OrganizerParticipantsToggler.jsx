import { FiUsers } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";

const OrganizerParticipantsToggler = ({
  setIsOrganizerView,
  isOrganizerView,
}) => {
  return (
    <div>
      <div className="flex my-4">
        <button
          onClick={() => setIsOrganizerView(true)}
          className={`mr-2 ${
            isOrganizerView ? "bg-gray-100" : ""
          } px-2 text-[14px] rounded transition duration-300 ease-in-out flex items-center gap-1`}>
          <RiAdminLine className="text-[17px]" /> Organizer View
        </button>
        <button
          onClick={() => setIsOrganizerView(false)}
          className={`ml-2 ${
            !isOrganizerView ? "bg-gray-100" : ""
          } px-4 py-2 rounded transition duration-300 ease-in-out flex items-center gap-1`}>
          <FiUsers />
          Participant View
        </button>
      </div>
    </div>
  );
};

export default OrganizerParticipantsToggler;
