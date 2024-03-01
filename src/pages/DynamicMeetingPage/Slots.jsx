import { useEffect, useState } from "react";
import Slot from "../Availability/Slots";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Slots = ({ slotDay }) => {
  const axios = useAxiosSecure();
  const [userSlots, setUserSlots] = useState([]);

  useEffect(() => {
    axios.get("/users/shakilahmmed8882@gmail.com").then((res) => {
      if (res?.data?.length > 0) {
        setUserSlots(res.data);
      }
    });
  }, [axios]);

  const daysWithSlots = [
    {
      day: "Wednesday",
      slots: [
        { start_time: "09:00am", end_time: "10:00am" },
        { start_time: "01:30pm", end_time: "02:30pm" },
        { start_time: "04:00pm", end_time: "05:00pm" },
      ],
    },
    {
      day: "Friday",
      slots: [
        { start_time: "10:30am", end_time: "11:30am" },
        { start_time: "02:00pm", end_time: "03:00pm" },
        { start_time: "05:30pm", end_time: "06:30pm" },
      ],
    },
    {
      day: "Sunday",
      slots: [
        { start_time: "08:00am", end_time: "09:00am" },
        { start_time: "12:30pm", end_time: "01:30pm" },
        { start_time: "03:00pm", end_time: "04:00pm" },
        { start_time: "08:00am", end_time: "09:00am" },
        { start_time: "12:30pm", end_time: "01:30pm" },
        { start_time: "03:00pm", end_time: "04:00pm" },
        { start_time: "08:00am", end_time: "09:00am" },
        { start_time: "12:30pm", end_time: "01:30pm" },
        { start_time: "03:00pm", end_time: "04:00pm" },
        { start_time: "08:00am", end_time: "09:00am" },
        { start_time: "12:30pm", end_time: "01:30pm" },
        { start_time: "03:00pm", end_time: "04:00pm" },
        { start_time: "08:00am", end_time: "09:00am" },
        { start_time: "12:30pm", end_time: "01:30pm" },
        { start_time: "03:00pm", end_time: "04:00pm" },
        { start_time: "08:00am", end_time: "09:00am" },
        { start_time: "12:30pm", end_time: "01:30pm" },
        { start_time: "03:00pm", end_time: "04:00pm" },
        { start_time: "08:00am", end_time: "09:00am" },
        { start_time: "12:30pm", end_time: "01:30pm" },
        { start_time: "03:00pm", end_time: "04:00pm" },
      ],
    },
  ];

  return (
    <div>
      {/* Show only the slot based on selected day on calendar */}
      {daysWithSlots
        .filter((day) => day.day === slotDay)
        .map((day) => (
          <div key={day.day} className="">
            {day.slots?.map((slot, index) => (
              <Slot key={`${day.day}-${index}`} slot={slot} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default Slots;
