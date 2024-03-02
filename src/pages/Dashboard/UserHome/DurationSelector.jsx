import { Option, Select } from "@material-tailwind/react";

const DurationSelector = ({ setSelectedHour, setSelectedMinute }) => {
  // Handler functions for hour and minute changes
  const handleHourChange = (value) => {
    setSelectedHour(value);
  };

  const handleMinuteChange = (value) => {
    setSelectedMinute(value);
  };

  return (
    <div className="flex items-center justify-between space-x-2 mt-2">
      {/* Set Hour */}
      <div className="flex items-center space-x-2">
        <div className="w-1/2">
          <Select label="Hour" variant="standard" onChange={handleHourChange}>
            <Option value="1 hour">1 hour</Option>
            <Option value="2 hours">2 hours</Option>
            <Option value="3 hours">3 hours</Option>
            <Option value="4 hours">4 hours</Option>
          </Select>
        </div>
      </div>
      <span className="text-gray-500">:</span>

      {/* Set Minutes */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <div className="w-1/2">
            <Select
              label="Minutes"
              variant="standard"
              onChange={handleMinuteChange}>
              <Option value="10 minutes">10 minutes</Option>
              <Option value="20 minutes">20 minutes</Option>
              <Option value="30 minutes">30 minutes</Option>
              <Option value="40 minutes">40 minutes</Option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DurationSelector;
