import { useContext } from "react";
import useTransTackData from "../../hooks/useTransTackData";
import Loading from "../../components/common/Loading/Loading";
import { AuthContext } from "../../Provider/AuthProvider";
import Days from "./Days";
import AvailabilityHeader from "./AvailabilityHeader";
import Timezone from "../../components/Timezone/Timezone";

const Availability = () => {
  const {user} = useContext(AuthContext)
  const { data, isLoading, refetch } = useTransTackData(
    `/users/availability/${user?.email}`
  );


  if (isLoading) {
    return <Loading />;
  }
  // console.log(data.availability);

  return (
    <>
      <AvailabilityHeader />
      <div className="mt-20 flex gap-3">
        <div className="p-10 border-2 ">
          <Days
            availableSlots={data?.availability}
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

