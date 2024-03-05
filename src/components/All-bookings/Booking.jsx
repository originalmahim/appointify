import { BsThreeDotsVertical } from "react-icons/bs";

// Importing necessary components and icons
import {
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { SiGooglemeet } from "react-icons/si";
import { BiLogoZoom } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaUnlink } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { formatMeetingLink } from "../../utils/FormatMeetingLink";

// Booking component
export function Booking({ meeting }) {
  const { user } = useContext(AuthContext);

  // shakilahmmed8882@gmail.com => the part before @ sign
  const gmailFirstPart = user?.email?.split("@")[0];

  const link = formatMeetingLink(gmailFirstPart, meeting);

  return (
    // Card container with some styling
    <div className="mt-5 p-1 relative flex h-[90px]  items-center justify-between overflow-hidden bg-white shadow-sm rounded-lg">
      {/* Card body section */}
      <CardBody className="p-0">
        {/* Title and platform icon */}

        <div className="flex gap-2 p-3">
          <div className="bg-gray-50 flex relative justify-center items-center p-2 md:p-3 rounded-full">
            {/* Displaying Zoom or Google Meet icon based on the 'platform' prop */}
            {meeting?.platform === "zoom" ? (
              <BiLogoZoom className=" bg-[#e7e9ec] text-white p-1 rounded-lg text-[20px] sm:text-[28px] md:text-[32px]" />
            ) : (
              <SiGooglemeet className=" bg-[#e7e9ec] text-white p-1 rounded-lg text-[20px] sm:text-[28px] md:text-[32px]" />
            )}
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-active absolute bottom-1 outline outline-[2px] outline-[white] right-[4px]"></div>
          </div>

          <Typography
            variant="h5"
            color="blue-gray"
            className=" gap-1 relative items-center text-[13px] md:text-[15px] sm:text-[16px] text-gray-700 font-normal"
          >
            {meeting?.type}

            <CardFooter className="p-0 pt-1 opacity-70 flex items-center gap-1">
              {/* Link to a meeting with a dynamic path */}
              <FaUnlink className="sm:text-[11px] md:text-[14px] text-gray-500" />

              <Link
                to={`/meeting/shakil/${meeting?._id}`}
                className=" text-[12px] sm:text-[14px] text-primary  z-20 relative"
              >
                <span className="hidden md:block">{link}</span>
                <span className="block md:hidden">appointify.com</span>
              </Link>
            </CardFooter>
          </Typography>
        </div>
      </CardBody>
      <BsThreeDotsVertical className="mr-3"/>
    </div>
  );
}
