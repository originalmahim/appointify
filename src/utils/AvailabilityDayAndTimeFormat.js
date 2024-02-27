const AvailabilityDayAndTimeFormat = (selectedDays,startTime,endTime) => {
  return selectedDays.map((day) => {
    return {
      day,
      slots: [{startTime,endTime}],
    };
  });

  // this will make the format 
//   like the pattern you see below
  /* {
  //       "day": "Monday",
         "slots": [
               {"start_time": "09:00", "end_time": "11:00"},
               {"start_time": "13:00", "end_time": "17:00"}
         ]
      */       
     
};

export default AvailabilityDayAndTimeFormat;
