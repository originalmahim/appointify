import { useEffect, useState } from "react";
import Slot from "../Availability/Slots";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Slots = ({ slotDay }) => {
  const axios = useAxiosSecure();
  const [userSlots, setUserSlots] = useState([]);

  useEffect(() => {
    axios.get("/users/availability/shakilahmmed8882@gmail.com").then((res) => {
      if (res?.data?.length > 0) {
        setUserSlots(res.data);
      }
    });
  }, [axios]);

  return (
    <div className="pr-4">
      {/* Show only the slot based on selected day on calendar */}
      {userSlots
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
