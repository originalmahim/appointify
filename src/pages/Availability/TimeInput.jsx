import { Option, Select } from "@material-tailwind/react";
import { generate12HourTimeArray } from "../../utils/generate12HourTimeArray";
import ActionButton from "./ActionButton";
import { AiOutlineDelete } from "react-icons/ai";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useState } from "react";

export default function TimeInput({
  slot,
  slotIndex,
  dayName,
  handleChange,
  setAvailableSlots
}) {
  const axios = useAxiosPublic();
  const slots = generate12HourTimeArray(15);

  const handleRemoveSlot = () => {
    console.log("remove click");
  };

  const handlePlus = () => {
    console.log("Plus click", slot);
  };
  console.log(slots);
  return (
    <div className="flex items-center gap-5">
      <div>
        <div className="flex gap-5 mb-3">
          <Select
            value={slot?.start_time}
            label="Start Time"
            onChange={(value) =>
              handleChange({ start_time: value }, slotIndex, dayName)
            }
          >
            {slots.filter((time) => slot.end_time !== time).map((time, idx) => (
              <Option value={time} key={idx}>
                {time}
              </Option>
            ))}
          </Select>
          <Select
            value={slot?.end_time}
            label="End Time"
            onChange={(value) =>
              handleChange({ end_time: value }, slotIndex, dayName)
            }
          >
            {slots
              .filter((time) => slot.start_time !== time)
              .map((time, idx) => (
                <Option value={time} key={idx}>
                  {time}
                </Option>
              ))}
          </Select>
          {slotIndex === 0 ? (
            <ActionButton handlePlus={handlePlus} />
          ) : (
            <button onClick={handleRemoveSlot}>
              <AiOutlineDelete className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
