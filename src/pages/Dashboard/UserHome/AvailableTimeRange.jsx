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


  return (
    <div>
      <div className="mt-4">
        <div className="flex sm:items-center flex-col sm:flex-row mt-2 gap-4">
          <div className="border-b-[1px] border-[#b4b3b3] w-[46%] flex justify-between">
            {/* Start Time Input */}
            <label className="flex gap-1 items-center text-[14px] cursor-pointer text-gray-600">
              From
            </label>
            <input
              required
              className="h-8 rounded-md border px-2 appearance-none"
              type="time"
              name="start"
              value={startTime}
              onChange={handleStartTimeChange}
              // Specify time format to include AM/PM
              // (This works in most modern browsers)
              inputMode="text"
              pattern="[0-9]{2}:[0-9]{2} [APap][mM]"
            />
          </div>
          <span className="text-gray-500">:</span>
          {/* End Time Input */}
          <div className="flex justify-between border-b-[1px] border-[#b4b3b3]">
            <label className="flex gap-1 items-center text-[14px] cursor-pointer text-gray-600">
              To
            </label>
            <input
              required
              className="h-8 rounded-md border-none outline-none cursor-pointer px-2 appearance-none"
              type="time"
              name="end"
              value={endTime}
              onChange={handleEndTimeChange}
              // Specify time format to include AM/PM
              // (This works in most modern browsers)
              inputMode="text"
              pattern="[0-9]{2}:[0-9]{2} [APap][mM]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableTimeRange;
