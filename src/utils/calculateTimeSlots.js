import toast from "react-hot-toast";

export function calculateTimeSlots(startTime, endTime, interval) {
  // Convert time strings to Date objects
  const startDate = new Date(`01 Jan 1970 ${startTime}:00`);
  const endDate = new Date(`01 Jan 1970 ${endTime}:00`);

  // Check for invalid input (start time after end time)
  if (startDate >= endDate) {
     toast.error("Start time cannot be after end time");
  }

  // Calculate the time difference in milliseconds
  const timeDifference = endDate.getTime() - startDate.getTime();

  // Calculate the number of slots based on interval
  const numSlots = Math.ceil(timeDifference / (interval * 60 * 1000));

  // Create an array to store the time slots
  const timeSlots = [];

  // Loop through each slot and format the time string
  for (let i = 0; i < numSlots; i++) {
    const slotTime = new Date(startDate.getTime() + i * interval * 60 * 1000);
    const formattedTime = slotTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    timeSlots.push(formattedTime);
  }

  return timeSlots;
}

// Example usage
// const startTime = "4:00";
// const endTime = "6:00";
// const interval = 10; // Minutes

// try {
//   const timeSlots = calculateTimeSlots(startTime, endTime, interval);
//   console.log(timeSlots); // Output: ["4:00", "4:10", "4:20", ..., "5:50"]
// } catch (error) {
//   console.error(error.message);
// }
