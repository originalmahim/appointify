import { useEffect, useState } from "react";
import useTransTackData from "../../hooks/useTransTackData";
import Loading from "../../components/common/Loading/Loading";
import { calculateTimeSlots } from "../../utils/calculateTimeSlots";

const Slots = ({ slotDay, eventId, handleSlotSubmit }) => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [slotsInterval, setSlotsInterval] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const { data, isLoading } = useTransTackData(
    `/events/eventAvailability/${eventId}/${slotDay}`,
    slotDay
  );

  if (isLoading) <Loading />;
  useEffect(() => {
    if (data) {
      setAvailableSlots(data?.eventSpecificDaySlots);
      setSlotsInterval(data?.eventDuration);
    }
  }, [data]);

  useEffect(() => {
    const AvailableTimeSlots = () => {
      availableSlots?.map(({ start_time, end_time }) => {
        const timeSlot = calculateTimeSlots(
          start_time,
          end_time,
          slotsInterval
        );
        setTimeSlots(timeSlot);
      });
    };

    AvailableTimeSlots();
  }, [availableSlots, slotsInterval]);

  return (
    <div className="w-full">
      {timeSlots?.map((timeSlot) => (
        <div
          onClick={() => handleSlotSubmit(timeSlot)}
          className="border-2 mb-2 text-center py-2 cursor-pointer hover:bg-gray-300 hover:text-black"
          key={timeSlot}
        >
          <p className="">{timeSlot}</p>
        </div>
      ))}
    </div>
  );
};

export default Slots;
