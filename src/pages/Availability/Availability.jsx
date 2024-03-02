import { useEffect, useState } from "react";
import SelectTime from "./Select";

const Availability = () => {
  const [checkedDays, setCheckedDays] = useState({});
  const [availabilityData, setAvailabilityData] = useState([]);

  // Mock data for demonstration purposes
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
    // Use the initial data to set up the availabilityData state
    setAvailabilityData(initialData);
  }, []);

  // Function to handle checkbox toggling
  const handleToggleChange = (day) => {
    setCheckedDays((prevCheckedDays) => ({
      ...prevCheckedDays,
      [day]: !prevCheckedDays[day],
    }));

    // If the day is toggled, add two new slots (start and end times)
    if (!checkedDays[day]) {
      setAvailabilityData((prevData) =>
        prevData.map((item) =>
          item.day === day
            ? {
                ...item,
                slots: [
                  ...item.slots,
                  { startTime: "New Start Time", endTime: "New End Time" },
                  // Add another new slot if needed
                ],
              }
            : item
        )
      );
    }
  };

  // Function to add a new slot under a specific day
  const handleAddSlot = (day) => {
    setAvailabilityData((prevData) =>
      prevData.map((item) =>
        item.day === day
          ? {
              ...item,
              slots: [
                ...item.slots,
                { startTime: "New Start Time", endTime: "New End Time" },
              ],
            }
          : item
      )
    );
  };
  // Function to remove the last slot under a specific day
  const handleRemoveSlot = (day) => {
    setAvailabilityData((prevData) =>
      prevData.map((item) =>
        item.day === day
          ? {
              ...item,
              slots: item.slots.slice(0, -1), // Remove the last slot
            }
          : item
      )
    );
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3 bg-primary p-2 text-white rounded-sm">
        Availability
      </h1>

      <div
        className={` ${
          Object.values(checkedDays).every((value) => !value)
            ? "grid-cols-4"
            : "grid-cols-1"
        }`}>
        <div className="h-[70vh] w-full gap-6 grid-cols-1 bg-white">
          <div>
            {availabilityData?.map((dayData, index) => (
              <div key={index} className="flex gap-1 p-2">
                <div className="flex gap-1 w-48 items-center h-8">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm "
                    checked={checkedDays[dayData.day] || false}
                    onChange={() => handleToggleChange(dayData.day)}
                  />{" "}
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
                    <button
                      onClick={() => handleAddSlot(dayData.day)}
                      className="text-white">
                      +
                    </button>
                  </div>
                </div>
                {checkedDays[dayData.day] && (
                  <div className="grid ">
                    {dayData.slots.map((slot, slotIndex) => (
                      <div
                        key={slotIndex}
                        className="grid my-3 grid-cols-3  gap-2 ml-8">
                        <SelectTime
                          label={"Start time"}
                          index={index + Math.floor(Math.random() * 3)}
                          value={slot.startTime}
                        />
                        <SelectTime
                          label={"End time"}
                          index={index + Math.floor(Math.random() * 10)}
                          value={slot.endTime}
                        />
                        <div className=" h-5 w-5 bg-black flex justify-center items-center rounded-full">
                          <button
                            onClick={() => handleRemoveSlot(dayData.day)}
                            className="text-white">
                            -
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
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
