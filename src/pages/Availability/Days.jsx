import { Switch } from "@material-tailwind/react";
import TimeInput from "./TimeInput";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const Days = ({ availableSlots, daysArray, refetch, userEmail }) => {
  const [isDayOn, setIsDayOn] = useState(false);
  const [selectedDay, setSelectedDay] = useState([]);
  const axios = useAxiosPublic();
  // console.log(data);
  const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
console.log(isDayOn);
  const handleDaySubmit = (name,val) => {

    console.log(name,val);

    setSelectedDay([...selectedDay, name]);
    // slotPost(name)
  };

  async function postNewSlot(slotName) {
    const newSlot = {
      day: slotName,
      slots: [{ start_time: "07:00", end_time: "11:00" }],
    };
    try {
      const res = await axios.post(`/users/availability/${userEmail}`, newSlot);
      if (res.status === 200) {
        refetch();
      }
    } catch (err) {
      console.error(err);
    }
  }
  async function removeAllSlot(slotId) {
    try {
      const res = await axios.delete(
        `/users/removeSlot/forhadairdrop@gmail.com/slots/:slotId`
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      {dayName.map((name, idx) => (
        <div key={name} className="flex gap-3 items-start">
          <div className="flex gap-3 items-center w-40">
            <Switch
              defaultChecked={daysArray.includes(name)}
            //   onChange={setIsDayOn(!isDayOn)}
              onClick={(val) => handleDaySubmit(name,val)}
            />

            <p>{name}</p>
          </div>

          <div className="flex flex-col">
            {availableSlots?.map(
              (days) =>
                days.day === name &&
                days.slots.map((slot, idx) => (
                  <TimeInput
                    key={slot._id}
                    postNewSlot={postNewSlot}
                    slotIndex={idx}
                    refetch={refetch}
                    slot={slot}
                    userEmail={userEmail}
                    dayName={name}
                  />
                ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Days