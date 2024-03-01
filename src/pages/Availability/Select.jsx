import { Option, Select } from "@material-tailwind/react";
import { generateTimeSlots } from "../../utils/GenerateTimeSlot";

const SelectTime = ({ label, index, value }) => {
  const slots = generateTimeSlots(30);

  return (
    <div>
      <Select
        arrow={false}
        variant="outlined"
        label={label}
        //random time set from the slot
        value={slots[index]}>
        {slots?.map((time, index) => (
          <Option className="z-50" key={index} value={time}>
            {time}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectTime;