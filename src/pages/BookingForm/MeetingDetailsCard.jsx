import SingleAvatar from "../../components/Avatar/SingleAvatar";
import Calendar from "../DynamicMeetingPage/Calendar/Calendar";
import { WiTime1 } from "react-icons/wi";

const MeetingDetailsCard = () => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-sm p-3 ">
        <div className="">
          <div className="mt-3 pt-3 flex items-center gap-3 ">
            <SingleAvatar
              img={
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              }
            />
            <div className="flex items-center md:text-[14px] lg:text-[16px] justify-between w-full">
              <p>Organizeer</p>
              <p className="flex items-center gap-1 text-light-gray">
                <WiTime1 className="md:text-[14px] lg:text-[18px] text-active" />
                30m
              </p>
            </div>
          </div>
          <div className=" rounded-lg pt-5 bg-white ">
            <h2 className="md:text-[18px] lg:text-[20px]">Design system</h2>
            <p className="text-[13px] md:text-[14px] lg:text-[16px] text-light-gray mt-1 pb-5">
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>

        <Calendar type={"confirm-form"} />
      </div>
    </div>
  );
};

export default MeetingDetailsCard;
