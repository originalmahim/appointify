import { useState } from "react";

import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Calendar({ setSelectedDay, setSelectedDate, type }) {
  const [date, setDate] = useState(new Date());

  // Function to get the formatted day of the week
  const getFormattedDay = (selectedDate) => {
    const options = { weekday: "long" };
    return selectedDate.toLocaleDateString("en-US", options);
  };

  // Function to get the date in iOS format
  const getIOSFormattedDate = (selectedDate) => {
    return selectedDate.toISOString().split("T")[0];
  };

  // Callback function to update the selected day in the parent component
  const handleDaySelect = (selectedDate) => {
    setDate(selectedDate);
    // date in IOS format
    const formattedDay = getFormattedDay(selectedDate);
    const iosFormattedDate = getIOSFormattedDate(selectedDate);
    console.log(selectedDate);
    // storing to the state coming from top component
    setSelectedDate(iosFormattedDate);
    setSelectedDay(formattedDay);
  };

  // where this calendar component is called?
  const isApplyInConfirmPage = type === "confirm-form";

  return (
    <div className={`${isApplyInConfirmPage ? "" : "p-3"} w-full h-full`}>
      <DayPicker
        mode="single"
        selected={date}
        onSelect={handleDaySelect}
        showOutsideDays
        className={`${
          isApplyInConfirmPage ? "p-2" : "p-5"
        } border-0 w-full bg-white`}
        classNames={{
          caption: "flex justify-center py-2 mb-4 relative items-center",
          caption_label: "text-sm font-medium text-gray-900",
          nav: "flex items-center",
          nav_button:
            "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
          nav_button_previous: "absolute left-1.5 my-drawer",
          nav_button_next: "absolute right-1.5",
          table: "w-full border-collapse",
          head_row:
            "flex w-full justify-between mt-2 font-medium text-gray-900",
          head_cell: `
          ${isApplyInConfirmPage ? "text-[13px]" : "text-sm"}
          m-0.5  font-normal 
          `,
          row: "flex w-full justify-between mt-2",
          cell: `
          ${isApplyInConfirmPage ? "text-[13px] h-6 w-6" : "text-sm h-9 w-9"}
          text-gray-600  rounded-md  text-center p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20`,
          day: `
          ${isApplyInConfirmPage ? "w-6 h-6" : "h-9 w-9"}
          p-0 font-normal`,
          day_range_end: "day-range-end",
          day_selected:
            "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
          day_today: "rounded-md bg-gray-200 text-gray-900",
          day_outside:
            "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
          day_disabled: "text-gray-500 opacity-50",
          day_hidden: "invisible",
        }}
        components={{
          IconLeft: ({ ...props }) => (
            <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
          ),
          IconRight: ({ ...props }) => (
            <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
          ),
        }}
      />
    </div>
  );
}
