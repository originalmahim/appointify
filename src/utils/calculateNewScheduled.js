export function calculateNewScheduled(dateString, scheduleTime) {
  console.log(scheduleTime);
  // Validate date and time formats for robustness
  const datePattern1 = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD
  const datePattern2 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/; // YYYY-MM-DDTHH:MM:SS.sssZ (including milliseconds and timezone)

  // Check both date patterns and throw an error if neither match
  if (!dateString.match(datePattern1) && !dateString.match(datePattern2)) {
    throw new Error(
      "Invalid date format. Expected either YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS.sssZ."
    );
  }

  // Parse the date and time strings into Date objects
  let date;
  if (dateString.match(datePattern1)) {
    // Handle YYYY-MM-DD format
    date = new Date(dateString);
  } else {
    // Handle YYYY-MM-DDTHH:MM:SS.sssZ format
    // Create a new Date object without timezone information
    date = new Date(dateString.slice(0, -1));
  }

  const hours = parseInt(scheduleTime.split(":")[0], 10);
  const minutes = parseInt(scheduleTime.split(":")[1], 10);

  // Set the hours and minutes of the date to the scheduled time, without modifying the timezone
  date.setUTCHours(hours, minutes, 0, 0); // Use setUTCHours to preserve timezone

  // Return the newly scheduled date as an ISO string, including the timezone
  return date.toISOString();
}

// // Example usage:
// const dateString = "2024-03-05T12:08:20.000Z"; // Your input date
// const scheduleTime = "11:40";

// try {
//   const newScheduledDate = getNewScheduledDate(dateString, scheduleTime);
//   console.log(newScheduledDate); // Output: "2024-03-05T11:40:00.000Z"
// } catch (error) {
//   console.error(error.message);
// }
