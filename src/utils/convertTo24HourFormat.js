export function convertTo24HourFormat(timeString) {
  const [time, period] = timeString.split(" ");
  let [hours, minutes] = time.split(":");

  // Convert hours to an integer
  hours = parseInt(hours, 10);

  if (period === "PM" && hours !== 12) {
    // Add 12 hours for PM time (except for 12:00 PM)
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    // Handle 12:00 AM (midnight)
    hours = 0;
  }

  // Format the result
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes}`;
  return formattedTime;
}

// Example usage:
const inputTime = "08:20 AM";
const convertedTime = convertTo24HourFormat(inputTime);
console.log(`Converted time: ${convertedTime}`);
