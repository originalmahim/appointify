import { SelectStartOrEndTime } from "./SelectStartOrEndTime";
import { GoCopy } from "react-icons/go";
import { IoIosAddCircle } from "react-icons/io";

import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Slots from "./Slots";
import useUserSlots from "../../hooks/useUserSlots";

const Availability = () => {
  const { availAbleSlots, refetch } = useUserSlots();

  useEffect(() => {}, [availAbleSlots]);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Availability</h1>

      <div className="lg:grid grid-cols-9 h-[70vh] overflow-auto gap-6 bg-white">
        {/* col 1 */}
        <div className="col-span-6 outline outline-[#d6d6d6] p-2 rounded-lg outline-[1px]">
          {availAbleSlots?.map((day) => (
            <DaySlotManager key={day?._id} day={day} refetch={refetch} />
          ))}
        </div>

        {/* col 2 */}
        <div className="col-span-3 outline outline-[#d6d6d6] outline-[1px]">
          2
        </div>
      </div>
    </div>
  );
};

export default Availability;

const DaySlotManager = ({ day, refetch }) => {
  // State variables
  const [startTime, setStartTime] = useState({});
  const [endTime, setEndTime] = useState({});
  const [checkedDays, setCheckedDays] = useState({});
  const axios = useAxiosPublic(); // Replace with your actual Axios instance
  const [isAddNewSlot, setIsAddNewSlot] = useState("");
  const [theDay, setTheDay] = useState("");
  const checkedDaysArray = Object.keys(checkedDays);

  // Log the current day object to the console

  // Effect for handling time slot updates
  useEffect(() => {
    // Check if start time and end time are not undefined
    if (
      typeof startTime.val == "undefined" ||
      typeof endTime.val == "undefined"
    ) {
      return;
    } else {
      // Create info object with day and slots
      const info = {
        day: endTime.day,
        slots: [{ start_time: startTime?.val, end_time: endTime?.val }],
      };

      axios
        .post("/users/availability/shakilahmmed8882@gmail.com", info)
        .then((res) => console.log(res.data));
      refetch();
    }

    // Make an HTTP request to post the availability info
    // axios.post(`/user/availability/forhadairdrop@gmail.com`, info);
  }, [startTime, endTime, axios, refetch]);

  // Function to handle checkbox toggling
  const handleToggleChange = (day) => {
    setCheckedDays((prevCheckedDays) => ({
      ...prevCheckedDays,
      [day]: !prevCheckedDays[day],
    }));
  };

  return (
    <div key={day.day} className="flex gap-2 my-4">
      {/* Checkbox for selecting the day */}
      <input
        type="checkbox"
        className="toggle toggle-sm"
        checked={checkedDays[day.day]}
        onChange={() => {
          setTheDay(day.day), handleToggleChange(day.day);
        }}
      />
      <span className="w-32"> {day.day}</span>

      {/* Display time selection UI when the day is selected */}
      {checkedDays[day.day] && (
        <div>
          <div className="flex gap-2 itece mb-2">
            {/* Select start time */}
            <SelectStartOrEndTime
              day={day.day}
              setTime={setStartTime}
              time={startTime}
            />
            {/* Select end time */}
            <SelectStartOrEndTime
              day={day?.day}
              setTime={setEndTime}
              time={endTime}
            />
            <GoCopy />
            {/* Button to add a new time slot */}
            <IoIosAddCircle onClick={() => setIsAddNewSlot(day?.day)} />
          </div>

          {/* Display existing time slots for the selected day */}
          <div className="grid  max-h-52 my-3 overflow-auto">
            {day?.slots?.map((slot) => (
              <Slots key={slot.day} slot={slot} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
