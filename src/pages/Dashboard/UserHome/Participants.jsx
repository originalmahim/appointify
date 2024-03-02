import { AiOutlineMail } from "react-icons/ai";

const Participants = ({ isOpenParticipants, setSelectedParticipants }) => {
  // Dummy data for participants
  const participantsData = [
    {
      name: "Forhad Hossain",
      email: "forhadairdrop@gmail.com",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      message: "Tania send you a message",
    },
    {
      name: "Shahed Amin Shihab",
      email: "shihab@gmail.com",
      image:
        "https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png",
      message: "Natali replied to your email.",
    },
    {
      name: "Shakil Ahmmed",
      email: "shakilahmmed8882@gmail.com",
      image:
        "https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png",
      message: "You've received a payment.",
    },
  ];

  const handleParticipantClick = (participant) => {
    // Check if participant is already selected
    // If participant is not selected, add it to the array
    setSelectedParticipants((prevSelected) => [...prevSelected, participant]);
  };

  return (
    <div>
      {isOpenParticipants && (
        <ul
          role="menu"
          data-popover="notifications-menu"
          data-popover-placement="bottom"
          className="absolute z-10 flex min-w-[180px] right-0 top-8 flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
          {participantsData.map((participant, index) => (
            <p
              key={index}
              role="menuitem"
              className={`
              
              
              
              flex items-center w-full gap-4 px-3 py-2 pl-2 pr-8 leading-tight transition-all rounded-md outline-none cursor-pointer select-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 
`}
              onClick={() => handleParticipantClick(participant)}>
              <img
                alt={participant.name}
                src={participant.image}
                className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
              />
              <div className="flex flex-col gap-1">
                <p className="block font-sans text-sm antialiased font-semibold leading-normal text-gray-700">
                  {participant.name}
                </p>
                <p className="flex items-center gap-1 font-sans text-sm antialiased font-medium text-blue-gray-500">
                  <AiOutlineMail />
                  {participant.email}
                </p>
              </div>
            </p>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Participants;
