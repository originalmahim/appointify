export default function getDayNameFromDate(dateString) {
  // Create a Date object from the provided date string
  const date = new Date(dateString);

  // Array of day names
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the day of the week
  const dayIndex = date.getDay();

  // Get the day name from the array
  const dayName = days[dayIndex];

  // Return the day name
  return dayName;
}

// Example usage
// const dateString = "2024-03-12T18:00:00.000Z";
// const dayName = getDayNameFromDate(dateString);
// console.log(dayName); // Output: Sunday
