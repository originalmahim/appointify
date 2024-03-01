const Slot = ({ slot }) => {
  return (
    <div>
      {
        /* Display time slots */
        <div
          className="p-2 px-4 flex items-center justify-center rounded-full my-2
        gap-3 text-center w-full border">
          {slot.start_time}
        </div>
      }
    </div>
  );
};

export default Slot;
