import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import useTransTackData from "../../../hooks/useTransTackData";

export default function Calendar({ date, setDate, allowedDays }) {
  const { data, isLoading } = useTransTackData(
    `/users/availability/forhadairdrop@gmail.com`
  );

  // Function to determine if a date is not enabled
  const isNotEnabledDay = (day) => {
    const dayName = day.toLocaleString("en-US", { weekday: "long" });
    return !allowedDays?.includes(dayName);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg">
        <DayPicker
          mode="single"
          selected={date}
          onSelect={setDate}
          showOutsideDays
          className="border-4"
          modifiers={{
            disabled: isNotEnabledDay,
          }}
          classNames={{
            caption:
              "flex justify-center py-2 mb-4 relative items-center text-sm font-medium text-gray-900",
            nav: "flex items-center",
            nav_button:
              "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", // Added focus styles
            nav_button_previous: "absolute left-1.5",
            nav_button_next: "absolute right-1.5",
            table:
              "w-full border-collapse md:max-w-md lg:max-w-lg xl:max-w-2xl", // Adjust max-width for different screen sizes
            head_row: "flex font-medium text-gray-900",
            head_cell: "m-0.5 w-14 font-normal text-sm",
            row: "flex w-full mt-2",
            cell: "text-gray-600 rounded-md h-9 w-14 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: "h-9 w-14 p-0 font-normal",
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
    </div>
  );
}
