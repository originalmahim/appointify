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
                // Add another new slot if needed
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
      <h1 className="font-bold text-2xl mb-3">Availability</h1>

      <div className="h-[70vh] gap-6 bg-white">
        {availabilityData?.map((dayData, index) => (
          <div key={index} className="flex gap-1 my-1 p-2">
            <div className="flex gap-1 w-36 items-center h-16">
              <input
                type="checkbox"
                className="toggle toggle-sm "
                checked={checkedDays[dayData.day] || false}
                onChange={() => handleToggleChange(dayData.day)}
              />{" "}
              <span className="ml-2">{dayData.day}</span>
              <button
                onClick={() => handleAddSlot(dayData.day)}
                className="ml-2 bg-blue-500 text-white px-2 py-1 rounded">
                +
              </button>
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
                    <button
                      onClick={() => handleRemoveSlot(dayData.day)}
                      className="ml-2  bg-gray-600 text-white px-2 py-1 rounded">
                      -
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Availability;
