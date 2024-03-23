import Lottie from "lottie-react";
import animationData from "../../../assets/banner-lottie.json";
import Container from "../../Container/Container";
// import appointifyHeroPlaceholder from "../../../assets/images/appointifyHeroPlaceholder.MP4";
import placeholder from "../../../assets/images/Blue and Pink Soft Magazine Cover Mockup Instagram Post.MP4";
import appointifyHeroPlaceholder from "../../../assets/images/waveBg.MP4";
import { MdArrowRightAlt } from "react-icons/md";
import TitleAndDescription from "../../TiteleAndDescription/TitleAndDescription";
import { CalendarSVG } from "./CalendarSVG";
import { BgVideo } from "./BgVideo";
import { Flag } from "./Flag";
import { CardDemo } from "./CardDemo";

const Banner = () => {
  const gradientTextStyle = {
    background: "linear-gradient(to right, #3A6FB3, #4FA3D1)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline-block",
  };

 
  return (
    <div className="bg-white pt-16 select-none">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="absolute top-0 left-0 w-full h-[80vh]  rounded-r-3xl" />

        <BgVideo />

        <div className="relative z-10  flex-col items-start space-y-6">
          <div className=" gap-3 items-center">
            <div className="">
              <TitleAndDescription

              type={"h1"}
                customStyle={"text-center"}
                title={"Create your free Appintify account"}
                description={
                  "Effortlessly organize appointments, meetings, and tasks in one platform"
                }
              />

                <div className="flex gap-3 justify-center items-center mb-14">
              <Flag />

              <button className="btn btn-wide bg-cyan-400 text-white hover:bg-cyan-500">Explore</button>
                </div>
            </div>

            <div className=" md:flex justify-center gap-8">
              <CalendarSVG />
              <CardDemo />  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
