import { createContext, useEffect, useState } from "react";
import RandomStartAndEndTime from "../utils/RandomStartAndEndTime";

export const AvailabilityContext = createContext();
const AvailabilityProvider = ({ children }) => {
  const { startTime, endTime } = RandomStartAndEndTime();
  // + new slot when added this state will toggle true false 
  const [isAddedNewSlot, setIsAddedNewSlot] = useState(false);
  
  // State management
  const generateRandomTimes = () => {
    const { startTime, endTime } = RandomStartAndEndTime();
    setStartTime(startTime);
    setEndTime(endTime);
  };
  
  useEffect(() => {
    if (isAddedNewSlot) {
      generateRandomTimes();
      // Reset the flag after generating new times
      setIsAddedNewSlot(false); 
    }
  }, [isAddedNewSlot]);
  

  
  const [start_time, setStartTime] = useState(startTime);
  const [end_time, setEndTime] = useState(endTime);

  const availabilityData = {
    // time
    setStartTime,
    setEndTime,
    start_time,
    end_time,

    // new slot adder
    setIsAddedNewSlot,
    isAddedNewSlot,
  };

  return (
    <AvailabilityContext.Provider value={availabilityData}>
      {children}
    </AvailabilityContext.Provider>
  );
};

export default AvailabilityProvider;
