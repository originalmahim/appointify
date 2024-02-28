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
            isOrganizerView ? "bg-gray-100" : "bg-gray-50"
          } px-2 text-[14px] rounded transition duration-300 ease-in-out`}>
          Organizer View
        </button>
        <button
          onClick={() => setIsOrganizerView(false)}
          className={`ml-2 ${
            !isOrganizerView ? "bg-gray-100" : "bg-gray-50"
          } px-4 py-2 rounded transition duration-300 ease-in-out`}>
          Participant View
        </button>
      </div>
    </div>
  );
};

export default OrganizerParticipantsToggler;
