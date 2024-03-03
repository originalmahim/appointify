import { useEffect, useState } from "react";
import InitialStartAndEndTime from "./InitialStartAndEndTime";
import { useAvailabilityContext } from "../../hooks/useAvailabilityContext";
import useGetUserSlots from "../../hooks/useGetUserSlots";
import AllSlots from "./AllSlots";

const Availability = () => {
  // State to track checked days and availability data
  const [checkedDays, setCheckedDays] = useState({});
  const [availabilityData, setAvailabilityData] = useState([]);
  const {
    start_time,
    end_time,
    // setIsAddedNewSlot, isAddedNewSlot
  } = useAvailabilityContext();

  const { userSlots, refetch } = useGetUserSlots();

  // Mock data for days
  const initialData = [
    { day: "Monday", slots: [] },
    { day: "Tuesday", slots: [] },
    { day: "Wednesday", slots: [] },
    { day: "Thursday", slots: [] },
    { day: "Friday", slots: [] },
    { day: "Saturday", slots: [] },
    { day: "Sunday", slots: [] },
  ];

  useEffect(() => {
    // Set up initial availability data when the component mounts
    setAvailabilityData(initialData);
  }, []);

  // Function to handle checkbox toggling
  const handleToggleChange = (day) => {
    setCheckedDays((prevCheckedDays) => ({
      ...prevCheckedDays,
      [day]: !prevCheckedDays[day],
    }));

    // If the day is toggled, add new slots (start and end times)
    if (!checkedDays[day]) {
      setAvailabilityData((prevData) =>
        prevData.map((item) =>
          item.day === day
            ? {
                ...item,
                slots: [{ start_time, end_time }],
              }
            : item
        )
      );
    } else {
      // If the day is untoggled, remove all slots
      setAvailabilityData((prevData) =>
        prevData.map((item) =>
          item.day === day ? { ...item, slots: [] } : item
        )
      );
    }
  };

  // ==================================================

  var data = {
    Monday: [
      { start_time: "10:00 AM", end_time: "12:00 PM" },
      { start_time: "02:00 PM", end_time: "04:00 PM" },
      // Add more slots if needed
    ],
    Tuesday: [
      { start_time: "11:00 AM", end_time: "01:00 PM" },
      { start_time: "03:00 PM", end_time: "05:00 PM" },
      // Add more slots if needed
    ],
    Wednesday: [
      { start_time: "01:00 PM", end_time: "03:00 PM" },
      { start_time: "04:00 PM", end_time: "06:00 PM" },
      // Add more slots if needed
    ],
    Thursday: [
      { start_time: "09:00 AM", end_time: "11:00 AM" },
      { start_time: "01:00 PM", end_time: "03:00 PM" },
      // Add more slots if needed
    ],
    Friday: [
      { start_time: "02:30 PM", end_time: "04:30 PM" },
      // Add more slots if needed
    ],
    Saturday: [
      { start_time: "12:00 PM", end_time: "02:00 PM" },
      { start_time: "03:30 PM", end_time: "05:30 PM" },
      // Add more slots if needed
    ],
    Sunday: [
      { start_time: "10:30 AM", end_time: "12:30 PM" },
      { start_time: "04:00 PM", end_time: "06:00 PM" },
      // Add more slots if needed
    ],
  };

  // ==================================================

  // Function to add a new slot under a specific day
  // const handleAddSlot = (day) => {
  //   setIsAddedNewSlot(!isAddedNewSlot);

  //   setAvailabilityData((prevData) =>
  //     prevData.map((item) =>
  //       item.day === day
  //         ? {
  //             ...item,
  //             slots: [...item.slots, { startTime: start_time, end_time }],
  //           }
  //         : item
  //     )
  //   );
  // };

  // Function to remove the last slot under a specific day
  // const handleRemoveSlot = (day) => {
  //   setAvailabilityData((prevData) =>
  //     prevData.map((item) =>
  //       item.day === day ? { ...item, slots: item.slots.slice(0, -1) } : item
  //     )
  //   );
  // };


  return (
    <div>
      {/* Render the title */}
      <h1 className="font-bold text-2xl mb-3 bg-primary p-2 text-white rounded-sm">
        Availability
      </h1>

      {/* Render the days */}
      <div
        className={` ${
          Object.values(checkedDays).every((value) => !value)
            ? "grid-cols-4"
            : "grid-cols-1"
        }`}>
        <div className="w-full gap-6 grid-cols-1 bg-white">
          <div>
            {availabilityData?.map((dayData, index) => (
              <div key={index} className="flex gap-1 p-2">
                {/* Render the checkbox and day */}
                <div className="flex gap-1 w-48 items-center h-8">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm "
                    checked={checkedDays[dayData.day] || false}
                    onChange={() => handleToggleChange(dayData?.day)}
                  />
                  <span
                    className={`${
                      checkedDays[dayData.day]
                        ? "text-[black]"
                        : "text-light-gray"
                    }`}>
                    {dayData.day}
                  </span>
                  <div
                    className={` h-5 w-5 ${
                      checkedDays[dayData.day] ? "bg-black" : "bg-gray-400"
                    } flex justify-center items-center rounded-full`}>
                    {/* Render the button to add a slot */}
                    <button
                      // onClick={() => handleAddSlot(dayData.day)}
                      className="text-white">
                      +
                    </button>
                  </div>
                </div>

                {/* Render the slots if the day is checked */}
                {checkedDays[dayData.day] && (
                  <div className="grid ">
                    {dayData.slots.map((slot, slotIndex) => (
                      // Render the component for initial start and end time
                      <InitialStartAndEndTime
                        key={slotIndex}
                        slot={slot}
                        slotIndex={slotIndex}
                        dayData={dayData}
                        index={index}
                      />
                    ))}

                    {userSlots.map((a,index) => (
                      <AllSlots key={a}
                      slotDay={a}
                      slotIndex={index}
                      dayData={dayData}
                      index={index}
                      
                      
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Render an image */}
        <img
          className="grid-cols-3 w-full h-full"
          src="https://s3.us-west-2.amazonaws.com/public.notion-static.com/creator-images/andrew-hulterstrom-1707764801213.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Availability;
