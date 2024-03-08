import { Option, Select } from "@material-tailwind/react";
import { generate12HourTimeArray } from "../../utils/generate12HourTimeArray";
import ActionButton from "./ActionButton";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from 'react-hot-toast'

export default function TimeInput({ postNewSlot, dayName,  slot, slotIndex,userEmail, refetch }) {
  const axios = useAxiosPublic();
  const [selectSlots, setSelectedSlots] = useState("");
  const [itemPlus, setItemPlus] = useState(false);
  // console.log(dValue.length);
  const handleSlotSubmit = (time) => {
    console.log(time);
    setSelectedSlots(time);
  };
  const handlePlus = (time) => {
    console.log("item plus");
    setItemPlus(true);
    postNewSlot(dayName);
  };

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
            handleSlotSubmit={handleSlotSubmit}
            selectSlots={selectSlots}
            FdValue={slot?.start_time}
            label="Start Time"
          />
          <SlotTimesOption
            handleSlotSubmit={handleSlotSubmit}
            selectSlots={selectSlots}
            EdValue={slot?.end_time}
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
function SlotTimesOption({ label,FdValue,EdValue }) {
  const slots = generate12HourTimeArray(15);
  const [value, setValue] = useState("");
  // console.log(FdValue);
  // console.log(EdValue);

console.log(value);

  return (
    <>
      <Select
        size="md"
        value={value}
        label={FdValue || EdValue}
        onChange={(val) => setValue(val)}
      >
        {slots?.map((time) => (
          <Option value={time} key={time}>
            {time}
          </Option>
        ))}
      </Select>
    </>
  );
}
