import { Select, Option } from "@material-tailwind/react";
import { generateTimeSlots } from "../../utils/GenerateTimeSlot";

export function SelectStartOrEndTime({ day, time, setTime }) {
  const slots = generateTimeSlots(30);

  return (
    <div className="">
      <Select
        className="min-w-[100px] focus-within:outline-none overflow-hidden"
        label=""
        placeholder={"add your new slot"}
        value={day == time.day && time.val}
        arrow={false}
        onChange={(val) => setTime({ day, val })}>
        {slots?.map((time, index) => (
          <Option key={index} value={time}>
            {time}
          </Option>
        ))}
      </Select>
    </div>
  );
}
