export function generate12HourTimeArray(intervalMinutes) {
  const times = [];
  for (let hours = 0; hours < 24; hours++) {
    for (let minutes = 0; minutes < 60; minutes += intervalMinutes) {
      const formattedHours = String(hours % 12 || 12).padStart(2, "0");
      const formattedMinutes = String(minutes).padStart(2, "0");
      const period = hours < 12 ? "AM" : "PM";
      times.push(`${formattedHours}:${formattedMinutes}`);
    }
  }
  return times;
}

// const tenMinuteIntervals12Hour = generate12HourTimeArray(10);
// console.log(tenMinuteIntervals12Hour);
