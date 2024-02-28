import React, { useState } from "react";

const Availability = () => {
  const [availability, setAvailability] = useState({
    sunday: [{ start: "9:00am", end: "5:00pm" }],
    monday: [{ start: "9:00am", end: "5:00pm" }],
    tuesday: [{ start: "9:00am", end: "5:00pm" }],
    wednesday: [{ start: "9:00am", end: "5:00pm" }],
    thursday: [{ start: "9:00am", end: "5:00pm" }],
    friday: [{ start: "9:00am", end: "5:00pm" }],
    saturday: [{ start: "9:00am", end: "5:00pm" }],
  });

  const addSlot = (day) => {
    const newAvailability = { ...availability };
    newAvailability[day] = [
      ...newAvailability[day],
      { start: "9:00am", end: "5:00pm" },
    ];
    setAvailability(newAvailability);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Availability</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border bg-white border-gray-300">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-2 border">Day</th>
              <th className="p-2 border">Start Time</th>
              <th className="p-2 border">End Time</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(availability).map((day) => (
              <React.Fragment key={day}>
                {availability[day].map((slot, index) => (
                  <tr key={`${day}-${index}`}>
                    <td className="p-2 border">
                      {index === 0 ? (
                        <span
                          className="cursor-pointer"
                          onClick={() => addSlot(day)}>
                          {day.charAt(0).toUpperCase() + day.slice(1)} +
                        </span>
                      ) : null}
                    </td>
                    <td className="p-2 border">{slot.start}</td>
                    <td className="p-2 border">{slot.end}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Additional Content */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Additional Content</h3>
        <p>
          This is where you can add more information about your availability or
          any other relevant content.
        </p>
      </div>
    </div>
  );
};

export default Availability;
