
import { Option, Select } from "@material-tailwind/react";

const BufferTime = ({ bufferTime, setBufferTime }) => {
  const handleBufferChange = (value) => {
    setBufferTime(value);
  };

  return (
    <div className="w-1/2">
      <Select
        label="Buffer-time"
        variant="standard"
        value={bufferTime}
        onChange={handleBufferChange}>
        {/* Options with different values */}
        <Option value={5}>5-minutes</Option>
        <Option value={10}>10-minutes</Option>
        <Option value={15}>15-minutes</Option>
      </Select>
    </div>
  );
};

export default BufferTime;
