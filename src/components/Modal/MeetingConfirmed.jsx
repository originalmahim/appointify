
import dateIcon from "../../assets/icons/date.png";
import successIcon from "../../assets/icons/success.gif";
import SingleAvatar from "../Avatar/SingleAvatar";


import MeetLink from "./MeetLink";
import Remaindar from "./Remaindar";
import Notes from "./Notes";
import Feedback from "./Feedback";
import Gradient from "../Gradient/Gradient";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";


const MeetingConfirmed = ({handleGoBackHome}) => {
  
  
  
  
  //Remaindar state 
  const [remaindar,setRemaindar] = useState(0)
  
  
  // participant and organizer photo url
  const organizerImg =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Stephen_tWitch_Boss_at_Dizzy_Feet_Gala_2014.jpg/220px-Stephen_tWitch_Boss_at_Dizzy_Feet_Gala_2014.jpg";
  const participantImg =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/HH_Polizeihauptmeister_MZ.jpg/220px-HH_Polizeihauptmeister_MZ.jpg";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white relative overflow-auto pb-8 overflow-x-hidden text-center rounded-lg z-50 w-full sm:w-[80%] md:w-[500px] h-[500px] mx-auto my-auto p-4">
        {/* Slight gradient shade */}
        <Gradient />
        <img className="w-36 mx-auto" src={successIcon} alt="" />
        {/* title  */}
        <div className="-mt-3">
          <h1 className=" md:text-[27px] z-50 lg:text-2xl font-bold">
            Woo! Hoo!
          </h1>
          <p className="text-light-gray z-50 text-[15px] md:text-[17px] py-1 pb-8">
            Your meeting is confirmed
          </p>

          <div className=" space-y-3">
            <div className="hidden md:flex justify-center">
              {/* Avatar of of organizer and participant */}
              <SingleAvatar usedIn="success" img={organizerImg} />
              <SingleAvatar usedIn="success" img={participantImg} />
            </div>

            {/* Meeting date */}
            <div className="grid md:grid-cols-2 gap-3 pb-6 md:pt-8">
              <div className="flex items-center gap-3 text-light-gray">
                <figure className="bg-[#e9f4ff] w-9 p-2 rounded-full">
                  <img className="w-6" src={dateIcon} alt="" />
                </figure>
                <p className="text-[14px] md:text-[16px]">2/3/2024</p>
              </div>
              {/* Meeting link, Remaindar and Notes */}
              <MeetLink url={"/link/"} />
              <Remaindar 
              remaindar={remaindar}
              setRemaindar={setRemaindar}/>
              <Notes content={"Point your notes"} />
            </div>
          </div>
          <Feedback />
          <div onClick={()=> handleGoBackHome()} className="lg:p-3 mx-auto mt-8 text-left md:bg-gray-200 lg:w-16 lg:h-16 flex items-center rounded-full"><button className=" text-white  mx-auto text-left bg-primary md:w-24 md:h-24 lg:w-11 lg:h-11 rounded-full flex  items-center justify-center"><IoIosArrowRoundBack className=" lg:text-3xl"/></button></div>
        </div>
      </div>
    </div>
  );
};

export default MeetingConfirmed;
