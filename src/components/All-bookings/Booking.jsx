// Importing necessary components and icons
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import AvatarStack from "../common/Avatar/Avatar";
import { SiGooglemeet } from "react-icons/si";
import { BiLogoZoom } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaUnlink } from "react-icons/fa";

// Booking component
export function Booking({ meeting }) {
  return (
    // Card container with some styling
    <Card className=" p-3 relative overflow-hidden h-36">
      {/* Card body section */}
      <CardBody className="p-0">
        {/* Title and platform icon */}
        <Typography
          variant="h5"
          color="blue-gray"
          className="flex gap-1 z-20 relative items-center text-[16px] text-gray-700 font-semibold">
          <div className="p-1 pb-2 rounded-full bg-gray-100">
            {/* Displaying Zoom or Google Meet icon based on the 'platform' prop */}
            {meeting?.platform === "zoom" ? (
              <BiLogoZoom className="text-[blue] text-[20px]" />
            ) : (
              <SiGooglemeet className="text-[#00A745] text-[15px]" />
            )}
          </div>
          {meeting?.type}
          {/* Avatar stack on the right side */}
          <div className="ml-auto">
            <AvatarStack />
          </div>
        </Typography>
        {/* Description text */}
        <Typography className="text-gray-600 z-20 relative mt-2 text-[14px]">
          The place is close to Barceloneta Beach and bus stop just 2 min by
        </Typography>
      </CardBody>

      <CardFooter className="p-0 pt-3 flex items-center gap-1">
        {/* Link to a meeting with a dynamic path */}
        <FaUnlink className="text-[14px] text-gray-500" />

        <Link
          to={`/meeting/shakil/${meeting?._id}`}
          className="text-[14px] text-[blue] opacity-50 z-20 relative">
          shakilahhmmed.appointify.com
        </Link>
      </CardFooter>

      {/* Background circle for visual effect */}
      <div className="absolute top-0 -right-32 w-96 h-96 bg-[rgba(255,250,254,0.74)] animation-delay-2000 rounded-full filter blur-[80px] mix-blend-multiply"></div>
    </Card>
  );
}
