import { Option, Select } from "@material-tailwind/react";
import { generate12HourTimeArray } from "../../../utils/generate12HourTimeArray";

const AvailableTimeRange = ({
  setStartTime,
  setEndTime,
  startTime,
  endTime,
}) => {
  // Handler functions for input changes
  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
    
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const timeArray = generate12HourTimeArray(15);

  return (
    <div>
      <div className="mt-4">
        <div className="flex sm:items-center flex-col justify-around sm:flex-row mt-2 gap-4">
          <div className="border-b-[1px] border-[#b4b3b3] w-[46%] flex justify-between">
            {/* Start Time Input */}
            <Select
              value={startTime}
              onChange={(e) => handleStartTimeChange(e)}
              size="md"
              label="Start time"
            >
              {timeArray?.map((time) => (
                <Option value={time}>{time}</Option>
              ))}
            </Select>
          </div>
          {/* End Time Input */}
          <span className="text-gray-500">:</span>
          <div className="flex justify-between border-b-[1px] border-[#b4b3b3]">
         

          <Select
              value={endTime}
              onChange={handleStartTimeChange}
              size="md"
              label="End time"
            >
              {timeArray?.map((time) => (
                <Option value={time}>{time}</Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableTimeRange;
