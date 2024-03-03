import { useState } from 'react';
import TimeZoneDropdown from './TimeZoneDropdown';
import TimeDisplay from './TimeZoneDisplay';

const TimeZoneContainer = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState(''); // State to store the selected time zone

  const handleTimeZoneChange = (zone) => {
    setSelectedTimeZone(zone);
  };

  return (
    <div>
      <h1>Time Zone Synchronization</h1>
      <TimeZoneDropdown onSelectTimeZone={handleTimeZoneChange} />
      <TimeDisplay selectedTimeZone={selectedTimeZone} />
    </div>
  );
};

export default TimeZoneContainer;
