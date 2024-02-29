/*
  Example usage:
  <Slots
    day={{
      start_time: "16:00",
      end_time: "20:00",
      __id: "65debedc293382e",
    }}
  />
*/

const Slots = ({ slot }) => {
  return (
    <div>
      {
        /* Display time slots */
        <div className="grid grid-cols-2 gap-3 m-1">
          <div
            className="outline w-48 outline-[#c4c4c4] outline-[1px] p-2 rounded-lg"
            key={slot.start_time}>
            {slot.start_time}
          </div>
          <div
            className="outline w-48 ml-6  outline-[#c4c4c4] outline-[1px] p-2 rounded-lg"
            key={slot.start_time}>
            {slot.end_time}
          </div>
        </div>
      }
    </div>
  );
};

export default Slots;
