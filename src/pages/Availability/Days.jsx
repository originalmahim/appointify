import { Switch } from "@material-tailwind/react";
import TimeInput from "./TimeInput";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Days = ({ availableSlots, daysArray, refetch, userEmail }) => {
  const [selectedDay, setSelectedDay] = useState(daysArray || []); // Initialize with daysArray
  const [isChecked, setIsChecked] = useState(false);
  const [slots, setSlots] = useState(availableSlots);
  const [newSlotsArr, setNewSlotsArr] = useState([]);
  const axios = useAxiosPublic();
  const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  const weekAvailability = [
    {
      day: "Saturday",
      slots: [{ start_time: "09:00", end_time: "05:00" }],
    },
    {
      day: "Sunday",
      slots: [],
    },
    {
      day: "Monday",
      slots: [],
    },
    {
      day: "Tuesday",
      slots: [], 
    },
    {
      day: "Wednesday",
      slots: [],
    },
    {
      day: "Thursday",
      slots: [], 
    },
    {
      day: "Friday",
      slots: [], 
    },
  ];

  const handleToggle = async (name) => {
   setIsChecked(!isChecked);
    const newSlot = {
      day: name,
      slots: [{ start_time: "09:00", end_time: "05:00" }],
    };
    const isExist = slots.find(item => item.day === name)
    // console.log("day" in isExist);
    if(isExist){
      const filtered = slots?.filter(item => item.day !== name)
      setSlots([...filtered])
    }else{
      setSlots([...slots,newSlot])
      console.log('not ok');
      setNewSlotsArr([...newSlotsArr,newSlot])
    }
    
    // setNewSlotsArr([...newSlotsArr,newSlot])
  };

  console.log(newSlotsArr);

  async function postNewSlot(newSlot) {
    try {
      const res = await axios.post(`/users/availability/${userEmail}`, newSlot);
      if (res.status === 200) {
        refetch(); // Refetch data after successful post
        // toast.success("Slot created successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error creating slot.");
    }
  }

  return (
    <div>
      {weekAvailability.map((day, idx) => (
        <div key={day.day} className="flex gap-3 flex-wrap items-start">
          <div className="flex gap-3 items-center mb-2 w-40">
            <Switch
              defaultChecked={selectedDay.includes(name)}
              onChange={handleToggle.bind(null, name)}
            />
            <p>{day.day}</p>
          </div>

          <div className="flex flex-col">
            {
              day.slots.map((slot,idx) => <TimeInput key={idx} slot={slot}/>)
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Days;
