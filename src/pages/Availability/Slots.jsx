const Slot = ({ slot }) => {
  return (
    <div className="px-2">
      {
        /* Display time slots */
        <div
          className="p-2 px-4 text-[#6a6969] flex items-center justify-center rounded-full my-3
        gap-3 text-center w-full border border-[#b9b9b9]">
          {slot.start_time}
        </div>
      }
    </div>
  );
};

export default Slot;
