import { Switch } from "@material-tailwind/react";
import TimeInput from "./TimeInput";
const Days = ({ availableSlots, setAvailableSlots }) => {
  // Function to handle slot change
  const handleSlotChange = (value, index, dayName) => {
    const updatedSlots = availableSlots?.map((day) => {
      if (day.day === dayName && day.slots.length > index) {
        return {
          ...day,
          slots: day.slots.map((slot, idx) => {
            if (idx === index) {
              return {
                ...slot,
                ...value,
              };
            }
            return slot;
          }),
        };
      }
      return day;
    });
    setAvailableSlots(updatedSlots);
  };

  // Function to handle day toggle
  const handleDayToggle = async (dayName) => {
    const newSlot = { start_time: "09:00", end_time: "05:00" }

    const updatedAvailability = availableSlots?.map((day) => {
      if (day.day === dayName) {
        return {
          ...day,
          slots: day.slots.length === 0 ? [newSlot] : [],
        };
      }
      return day;
    });
    setAvailableSlots(updatedAvailability);
  };

  return (
    <div>
      {availableSlots?.map((day) => (
        <div key={day.day} className="flex gap-3 flex-wrap items-start">
          <div className="flex gap-3 items-center mb-2 w-40">
            <Switch
              defaultChecked={day.slots.length > 0}
              onChange={() => handleDayToggle(day.day)}
            />
            <p>{day.day}</p>
          </div>

          <div className="flex flex-col">
            {day.slots.map((slot, index) => (
              <TimeInput
                key={index}
                slot={slot}
                slotIndex={index}
                dayName={day.day}
                handleChange={handleSlotChange}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Days;
