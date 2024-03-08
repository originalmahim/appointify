import { Switch } from "@material-tailwind/react";
import TimeInput from "./TimeInput";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Days = ({ availableSlots, daysArray, refetch, userEmail }) => {
const [selectedDay, setSelectedDay] = useState(daysArray || []); // Initialize with daysArray
const [isPostingOrRemoving, setIsPostingOrRemoving] = useState(false); // Flag for ongoing operations
const axios = useAxiosPublic();
const dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const handleToggle = async (name) => {
  // Prevent multiple operations during ongoing actions
  if (isPostingOrRemoving) return;

  setIsPostingOrRemoving(true); // Set flag to indicate operation in progress

  try {
    if (selectedDay.includes(name)) {
      await removeAllSlot(name);
      setSelectedDay(selectedDay.filter((day) => day !== name));
    } else {
      await postNewSlot({
        day: name,
        slots: [{ start_time: "09:00", end_time: "05:00" }],
      });
      setSelectedDay([...selectedDay, name]);
    }
    refetch(); // Refetch data after successful operation
    toast.success(
      selectedDay.includes(name)
        ? "Slot removed successfully!"
        : "Slot created successfully!"
    );
  } catch (err) {
    console.error(err);
    toast.error(
      selectedDay.includes(name)
        ? "Error removing slot."
        : "Error creating slot."
    );
  } finally {
    setIsPostingOrRemoving(false); // Reset flag after operation
  }
};

  async function postNewSlot(slotName) {
    try {
      const res = await axios.post(
        `/users/availability/${userEmail}`,
        slotName
      );
      if (res.status === 200) {
        // refetch(); // Refetch data after successful post
        // toast.success("Slot created successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error creating slot.");
    }
  }

  async function removeAllSlot(dayName) {
    try {
      const res = await axios.delete(
        `/users/removeDay/${userEmail}/day/${dayName}`
      );
      if (res.status === 200) {
        // refetch(); // Refetch data after successful deletion
        // toast.success(res.data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Error removing slots.");
    }
  }



  const shouldDisplayTimeInput = (day) =>
    availableSlots?.some(
      (slotData) => slotData.day === day && slotData.slots.length > 0
    );

  return (
    <div>
      {dayName.map((name, idx) => (
        <div key={name} className="flex gap-3 items-start">
          <div className="flex gap-3 items-center mb-2 w-40">
            <Switch
              defaultChecked={selectedDay.includes(name)}
              onClick={() => handleToggle(name)}
              disabled={isPostingOrRemoving} // Disable button during operations
            />
            <p>{name}</p>
          </div>

          <div className="flex flex-col">
            {shouldDisplayTimeInput(name) &&
              availableSlots?.map(
                (days) =>
                  days.day === name &&
                  days.slots.map((slot, idx) => (
                    <TimeInput
                      key={slot._id}
                      postNewSlot={postNewSlot}
                      slotIndex={idx}
                      refetch={refetch}
                      slot={slot}
                      userEmail={userEmail}
                      dayName={name}
                    />
                  ))
              )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Days;
