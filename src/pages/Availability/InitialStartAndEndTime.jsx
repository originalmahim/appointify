import { useEffect, useState } from "react";
import { generateTimeSlots } from "../../utils/GenerateTimeSlot";
import { Option, Select } from "@material-tailwind/react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import RandomStartAndEndTime from "../../utils/RandomStartAndEndTime";



const InitialStartAndEndTime = ({ slotIndex, dayData, handleRemoveSlot }) => {
  const { startTime, endTime } = RandomStartAndEndTime();
  const [start_time, setStartTime] = useState(startTime);
  const [end_time, setEndTime] = useState(endTime);

  const axios = useAxiosPublic();
  const { user } = useAuth();
  const slots = generateTimeSlots(30);

  // State to track whether data has been sent
  const [dataSent, setDataSent] = useState(false);

  useEffect(() => {
    // Check if data has been sent before making the request
    if (!dataSent) {
      const slotData = {
        day: "Monday",
        slots: [{ start_time: "11:00 AM", end_time: "05:30 PM" }],
      };

      // Set dataSent to true to avoid multiple requests
      setDataSent(true);

      // store this slot into the database
      axios
        ?.post(`/users/availability/${user && user?.email}`, slotData)
        .then((res) => console.log(res.data));
    }
  }, [dayData?.day]);

  return (
    <div>

      <div key={slotIndex} className="grid my-3 grid-cols-3 gap-2 ml-8">
        {/* Start Time */}
        <Select
          arrow={false}
          variant="outlined"
          label={"Start time"}
          onChange={setStartTime}
          value={start_time}>
          {slots?.map((time, index) => (
            <Option className="z-50" key={index} value={time}>
              {time}
            </Option>
          ))}
        </Select>

        {/* End Time */}
        <Select
          onChange={setEndTime}
          arrow={false}
          variant="outlined"
          label={"End time"}
          value={end_time}>
          {slots?.map((time, index) => (
            <Option className="z-50" key={index} value={time}>
              {time}
            </Option>
          ))}
        </Select>

        {/* Remove Slot Button */}
        <div className="h-5 w-5 bg-black flex justify-center items-center rounded-full">
          <button
            onClick={() => handleRemoveSlot(dayData.day)}
            className="text-white">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitialStartAndEndTime;
