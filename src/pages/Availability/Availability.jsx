import { useContext, useEffect, useState } from "react";
import useTransTackData from "../../hooks/useTransTackData";
import Loading from "../../components/common/Loading/Loading";
import { AuthContext } from "../../Provider/AuthProvider";
import Days from "./Days";
import AvailabilityHeader from "./AvailabilityHeader";
import Timezone from "../../components/Timezone/Timezone";
import { updateAvailability } from "../../api/availability";

const Availability = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, refetch } = useTransTackData(
    `/users/availability/${user?.email}`
  );
  const [slots, setSlots] = useState(data);
  useEffect(() => {
    setSlots(data);
  }, [data]);
  if (isLoading) {
    return <Loading />;
  }

  console.log(slots);

  const handleSaveData = async() => {
   const res = await updateAvailability(slots,user?.email)
   console.log(res);
  };

  return (
    <>
      <AvailabilityHeader handleSaveData={handleSaveData} />
      <div className="mt-20 flex gap-3">
        <div className="p-10 border-2 ">
          <Days
            availableSlots={slots}
            setAvailableSlots={setSlots}
            refetch={refetch}
            userEmail={user?.email}
            daysArray={data.daysArr}
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold me-2">Timezone</h3>
          {/* <Timezone /> */}
        </div>
      </div>
    </>
  );
};

export default Availability;
