import { useContext } from "react";
import useTransTackData from "../../hooks/useTransTackData";
import Loading from "../../components/common/Loading/Loading";
import { AuthContext } from "../../Provider/AuthProvider";
import Days from "./Days";

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
      <div className="mx-10 mt-20 ">
        <Days
          availableSlots={data?.availability}
          refetch={refetch}
          userEmail={user?.email}
          daysArray={data.daysArr}
        />
      </div>
    </>
  );
};

export default Availability;

