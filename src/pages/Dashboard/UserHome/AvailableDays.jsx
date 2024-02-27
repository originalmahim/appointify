import { Checkbox } from "@material-tailwind/react";

const AvailableDays = ({ availableDays, onDaysToggle, handleDayToggle }) => {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div
      className={`${
        onDaysToggle ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-500`}>
      {onDaysToggle && (
        <ul
          role="menu"
          data-popover="menu"
          data-popover-placement="bottom"
          className="absolute z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
          <li
            role="menuitem"
            className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"></li>

          <div className="grid grid-cols-2">
            {week?.map((day) => (
              <div key={day} className="flex items-center">
                <Checkbox
                  checked={availableDays.includes(day)}
                  onChange={() => handleDayToggle(day)}
                />
                <span className=" text-gray-700">{day}</span>
              </div>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default AvailableDays;
