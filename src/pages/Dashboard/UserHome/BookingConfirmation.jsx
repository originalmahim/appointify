import { Link } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaRegCopy } from "react-icons/fa";

const BookingConfirmation = ({ link, event }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="text-center">
      <span className="font-semibold text-[22px]">
        {user && user.displayName}
      </span>
      <h1 className=" leading-[28px] mb-3 text-active">
        you have successfully created an event
      </h1>

      <p className="text-[15px] text-light-gray flex px-11 pb-8">
        You and your guests will be cortinated via the link below . Have a
        fantastic meeting together
        <CiCalendarDate className="" />
      </p>
      <Link
        to={link}
        className="text-[rgb(255,201,175)] flex items-center gap-2 justify-center">
        {`appointify/booking/${event?.type}.com`}
        <FaRegCopy className="text-gray-500" />
      </Link>
    </div>
  );
};

export default BookingConfirmation;
