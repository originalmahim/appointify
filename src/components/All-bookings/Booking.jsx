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

export function Booking({ platform }) {
  return (
    <Card className=" mb-5 p-3 relative overflow-hidden">
      <CardBody className="p-0">
        <Typography
          variant="h5"
          color="blue-gray"
          className="flex gap-1 z-20 relative items-center text-[15px] text-gray-700 font-semibold">
          <div className="p-1 pb-2  rounded-full bg-gray-100">
            {platform === "zoom" ? (
              <BiLogoZoom className="text-[blue] text-[20px]" />
            ) : (
              <SiGooglemeet className="text-[#00A745] text-[15px]" />
            )}
          </div>
          Design system
          <div className="ml-auto">
            <AvatarStack />
          </div>
        </Typography>
        <Typography className="text-gray-600 z-20 relative text-[14px]">
          The place is close to Barceloneta Beach and bus stop just 2 min by
        </Typography>
      </CardBody>
      <CardFooter className="p-0 pt-3 flex items-center gap-1">
        <FaUnlink className="text-[14px] text-gray-500" />

        <Link className="text-[14px] text-[blue] opacity-50 z-20 relative">
          shakilahhmmed.appointify.com
        </Link>
      </CardFooter>
      <div className="absolute top-0 -right-32  w-96 h-96 bg-[rgba(255,250,254,0.74)] animation-delay-2000 rounded-full filter blur-[80px] mix-blend-multiply"></div>
    </Card>
  );
}
