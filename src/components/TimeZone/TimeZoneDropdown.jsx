const TimeZoneDropdown = ({ onSelectTimeZone }) => {
  const timeZones = [
    "America/New_York",
    "Europe/London",
    "Asia/Tokyo" /* Add more time zones as needed */,
  ];

  const handleTimeZoneChange = (event) => {
    const selectedTimeZone = event.target.value;
    onSelectTimeZone(selectedTimeZone);
  };

  return (
    <select onChange={handleTimeZoneChange}>
      {timeZones.map((zone) => (
        <option key={zone} value={zone}>
          {zone}
        </option>
      ))}
    </select>
  );
};

export default TimeZoneDropdown;
