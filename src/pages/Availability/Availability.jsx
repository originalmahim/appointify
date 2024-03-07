import { Button, Option, Select, Switch } from "@material-tailwind/react";
import { AiOutlineCopy, AiOutlinePlus } from "react-icons/ai";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { generate12HourTimeArray } from "../../utils/generate12HourTimeArray";
import { useEffect, useState } from "react";
import useTransTackData from "../../hooks/useTransTackData";
import Loading from "../../components/common/Loading/Loading";

const Availability = () => {
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
    const { data,isLoading } = useTransTackData(
      `/users/availability/forhadairdrop@gmail.com`
    );


    if(isLoading){
      return <Loading/>
    }
console.log(data.availability);



  return (
    <>
      {/* <div className="">
        {days.map((day) => (
          <DaySchedule key={day._id} day={day} />
        ))}
      </div> */}
      <div className="mx-10 mt-20 ">
        <Days availableSlots={data?.availability} daysArray={data.daysArr} />
      </div>
    </>
  );
};

export default Availability;

  const Days = ({availableSlots,daysArray}) => {
    const [isDayOn,setIsDayOn] = useState(false)
    const [selectedDay, setSelectedDay] = useState([]);
    const axios = useAxiosPublic()
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

  const handleDaySubmit =(name)=>{
    console.log(name);
    setIsDayOn(!isDayOn)
    setSelectedDay([...selectedDay,name])
    // slotPost(name)
  }


async function slotPost(slotName){
  const newSlot = {
    day: slotName,
    slots: [{ start_time: "07:00", end_time: "11:00" }],
  };
  try {
   const res =  await axios.post(`/users/availability/forhadairdrop@gmail.com`,newSlot);
   console.log(res);
  } catch (err) {
    console.error(err);
    
  }

} 
async function slotRemove(slotId){

  try {
   const res = await axios.delete(
     `/users/removeSlot/forhadairdrop@gmail.com/slots/:slotId`);
   console.log(res);
  } catch (err) {
    console.error(err);
    
  }

} 



  // console.log(selectedDay);
    return (
      <div>
        {dayName.map((name, idx) => (
          <div key={name} className="flex gap-3 items-start">
            <div className="flex gap-3 items-center w-40">
              <Switch defaultChecked={daysArray.includes(name)} onClick={() => handleDaySubmit(name)} />

              <p>{name}</p>
            </div>
            {/* <Select label="Select Version">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select> */}
            <div className="flex flex-col">
              {availableSlots?.map(
                (days) =>
                  days.day === name &&
                  days.slots.map((slot) => <TimeInput key={days._id} />)
              )}
              {/* <TimeInput /> */}
            </div>
          </div>
        ))}
      </div>
    );
  };

export function TimeInput() {
  const [selectSlots, setSelectedSlots] = useState("");
  const [itemPlus,setItemPlus] = useState(false)

  const handleSlotSubmit = (time) => {
    console.log(time);
    setSelectedSlots(time);
  };
  const handlePlus = (time) => {
    console.log("item plus");
    setItemPlus(true)

  };

  return (
    <div className="flex items-center gap-5">
      <div>
        <div className="flex gap-5 mb-3">
          {/* {[1, 2, 3].map(idx=>)} */}
          <SlotTimes
            handleSlotSubmit={handleSlotSubmit}
            selectSlots={selectSlots}
            label="Start Time"
          />
          <SlotTimes
            handleSlotSubmit={handleSlotSubmit}
            selectSlots={selectSlots}
            label="End Time"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <button>
          <AiOutlinePlus onClick={handlePlus} />
        </button>
        <button>
          <AiOutlineCopy />
        </button>
        <button></button>
      </div>
    </div>
  );
}

export function SlotTimes({ handleSlotSubmit, selectSlots, label }) {
  const slots = generate12HourTimeArray(15);
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
      {/* {days.map((day) => {})} */}
      <Select label={label}>
        {slots?.map((time) => (
          <Option onClick={() => handleSlotSubmit(time)} key={time}>
            {time}
          </Option>
        ))}
      </Select>
    </>
  );
}











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