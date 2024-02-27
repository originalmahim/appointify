
const AvailableTimeRange = ({setStartTime,setEndTime,startTime,endTime}) => {
  

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
        <label className="block text-sm font-medium">
          When are you free to take bookings?
        </label>
        <div className="flex sm:items-center flex-col sm:flex-row mt-2 gap-4">
          {/* Start Time Input */}
          <label className="block text-sm font-medium">From</label>
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

          {/* End Time Input */}
          <label className="block text-sm font-medium">To</label>
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
  );
};

export default AvailableTimeRange;
