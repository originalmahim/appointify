import { useEffect, useState } from 'react';
import { format } from 'date-fns-tz';

const TimeDisplay = ({ selectedTimeZone }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedTime = format(now, 'HH:mm:ss XXX', { timeZone: selectedTimeZone });
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [selectedTimeZone]);

  return <p>Current Time: {currentTime}</p>;
};

export default TimeDisplay;
