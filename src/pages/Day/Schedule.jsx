import { Button } from "@material-tailwind/react";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Schedule = () => {
  // const [isShow ,setIsShow] = useState()
  const axios = useAxiosPublic();
  const handleSlot = async () => {
    console.log("ok");

    try {
      const logRes = await axios.get("/google");
      console.log(logRes);
      if (logRes.status) {
        window.location.replace(logRes.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container border flex items-center mx-auto h-screen justify-between ">
      <div>left</div>
      <div>
        <Button onClick={handleSlot}>Booking slot</Button>
      </div>
    </div>
  );
};
export default Schedule;
