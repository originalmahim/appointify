import React, { useEffect, useState } from "react";
import RandomStartAndEndTime from "../../utils/RandomStartAndEndTime";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { generateTimeSlots } from "../../utils/GenerateTimeSlot";
import { Option, Select } from "@material-tailwind/react";

const AllSlots = ({ slotDay, slotIndex, dayData, handleRemoveSlot }) => {
  const { startTime, endTime } = RandomStartAndEndTime();
  const [slotInfo, setSlotInfo] = useState({
    start_time: startTime,
    end_time: endTime,
    id: "",
  });

  console.log(slotInfo);

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

  const x = slotDay.slots;

  return (
    <div>
      {x?.map((z, index) => (
        <div key={index} className="grid my-3 grid-cols-3 gap-2 ml-8 ">
          {/* Start Time */}
          <Select
            arrow={false}
            variant="outlined"
            label={"Start time"}
            onChange={setSlotInfo}
            value={slotInfo.start_time || z.start_time}>
            {slots?.map((time, index) => (
              <Option className="z-50" key={index} value={time}>
                {time}
              </Option>
            ))}
          </Select>

          {/* End Time */}
          <Select
            arrow={false}
            variant="outlined"
            label={"End time"}
            onChange={(e) => handleEndTimeChange(e.target.value)}
            value={slotInfo.end_time || z.end_time}>
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
      ))}
    </div>
  );
};

export default AllSlots;
