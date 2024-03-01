/* eslint-disable react/prop-types */

const DaySchedule = ({ day }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md flex gap-5">
      <h2 className="text-lg font-semibold">{day.day}</h2>
      <ul className="list-disc ml-4">
        {day.slots.map((slot) => (
          <li key={slot._id}>
            {slot.start_time} - {slot.end_time}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Day = () => {
  const days = [
    {
      day: "Tuesday",
      slots: [
        {
          start_time: "06:00",
          end_time: "11:00",
          _id: "65df04bf336126e3277c982b",
        },
        {
          start_time: "06:00",
          end_time: "11:00",
          _id: "65df04cc336126e3277c983c",
        },
      ],
      _id: "65df04bf336126e3277c982a",
    },
    {
      day: "Sunday",
      slots: [
        {
          start_time: "07:00",
          end_time: "11:00",
          _id: "65df55ac660fea1ede848d7e",
        },
        {
          start_time: "09:00",
          end_time: "04:00",
          _id: "65df563f660fea1ede848d86",
        },
        {
          start_time: "02:00",
          end_time: "04:00",
          _id: "65df56fea942815b3e13dc2c",
        },
      ],
      _id: "65df55ac660fea1ede848d7d",
    },
  ];

  return (
    <>
      <div className="">
        {days.map((day) => (
          <DaySchedule key={day._id} day={day} />
        ))}
      </div>
      <div className="mx-10">
        {/* <ConfirmBook /> */}
      </div>
    </>
  );
};

export default Day;

import { Button, Option, Select, Switch } from "@material-tailwind/react";
import { AiOutlineCopy, AiOutlinePlus } from "react-icons/ai";
import useAxiosPublic from "../../hooks/useAxiosPublic";
export function TimeSchedule() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex gap-3 items-center">
        <Switch />
        <p>Sunday</p>
      </div>
      <div className="flex gap-5">
        <Select label="Select Version">
          <Option>9:00am</Option>
        </Select>
        <Select label="Select Version">
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
      </div>
      <div className="flex gap-5">
        <button>
          <AiOutlinePlus />
        </button>
        <button>
          <AiOutlineCopy />
        </button>
        <button></button>
      </div>
    </div>
  );
}

export function ConfirmBook() {
  const axios = useAxiosPublic();
  const handleConfirmBooking = async () => {
    try {
      const logRes = await axios.get("/google");
      console.log(logRes);
      if (logRes.status) {
        // window.location.replace(logRes.data)
        const sRes = await axios.get("/schedule_event");
        console.log(sRes);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mx-10">
      <Button onClick={handleConfirmBooking}>Confirm Booking</Button>
    </div>
  );
}
