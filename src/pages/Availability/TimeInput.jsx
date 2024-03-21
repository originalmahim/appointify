import { Option, Select } from "@material-tailwind/react";
import { generate12HourTimeArray } from "../../utils/generate12HourTimeArray";
import ActionButton from "./ActionButton";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from 'react-hot-toast'

export default function TimeInput({ postNewSlot, dayName,lastSlot,  slot, slotIndex,userEmail, refetch }) {
  const axios = useAxiosPublic();
  const [selectSlots, setSelectedSlots] = useState("");
  const [startSlot, setStartSlot] = useState("");
  const [endSlot, setEndSlot] = useState("");

  const handlePlus = () => {
    console.log("item plus");
 const newSlot = {
        day: dayName,
        slots: [{ start_time: "09:00", end_time: "05:00" }],
      }
    postNewSlot(newSlot);
  };
console.log(startSlot);
  const handleRemoveSlot = async (id) => {
    try {
      const res = await axios.delete(
        `/users/removeSlot/${userEmail}/slots/${id}`
      );
      if(res.status){
        toast.success(res.data.message)
      }
      
      refetch();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex items-center gap-5">
      <div>
        <div className="flex gap-5 mb-3">
          <SlotTimesOption
            handleChange={setStartSlot}
            inputDefault={slot?.start_time}
            label="Start Time"
          />
          <SlotTimesOption
            handleChange={setEndSlot}
            inputDefault={slot?.end_time}
            label="End Time"
          />
          {slotIndex === 0 ? (
            <ActionButton handlePlus={handlePlus} />
          ) : (
            <button>
              <AiOutlineDelete
                onClick={() => handleRemoveSlot(slot?._id)}
                className="h-4 w-4"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
function SlotTimesOption({ label, inputDefault, handleChange,value }) {
  const slots = generate12HourTimeArray(15);

  return (
    <>
      <Select
        value={inputDefault}
        label={label}
        onChange={(val, idx) => handleChange(val, idx)}
      >
        {slots?.map((time, idx) => (
          <Option value={time} key={idx}>
            {time}
          </Option>
        ))}
      </Select>
    </>
  );
}
