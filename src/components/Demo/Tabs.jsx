import { FaGoogleDrive } from "react-icons/fa";
import { GiGrowth, GiTreeGrowth } from "react-icons/gi";

import { EventCallCarrd } from "./EventCallCarrd";

const Tabs = () => {
  return (
    <>
      <div className=" ">
        <div className="flex-col md:flex-row flex  gap-8 pb-8">
            <div className="flex-1">
          <EventCallCarrd />

            </div>
          <div className="flex-1 space-y-3">
          <div className="p-6 rounded-lg bg-white border bg-card text-card-foreground shadow-sm w-full">
              <div className="flex items-center  gap-3 space-y-1.5 p-6 pl-0 pb-3">
              <FaGoogleDrive className="text-[red] text-2xl"/>

                <h3 className="text-[20px] font-semibold whitespace-nowrap leading-none tracking-tight">
                  Events with few clicks
                </h3>
              </div>
                <p className="text-details leading-[24px] text-muted-foreground ml-11">
                  Experience top-notch features with our services Lorem ipsum dolor, sit amet consectetur adipisicing 
                </p>
              </div>
            <div className="p-6 rounded-lg bg-white border bg-card text-card-foreground shadow-sm w-full">
              <div className="flex items-center  gap-3 space-y-1.5 p-6 pl-0 pb-3">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black size-7"
                >
                  <path d="M3 7V5c0-1.1.9-2 2-2h2" />
                  <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
                  <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
                  <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                  <rect width={7} height={5} x={7} y={7} rx={1} />
                  <rect width={7} height={5} x={10} y={12} rx={1} />
                </svg>
                <h3 className="text-[20px] font-semibold whitespace-nowrap leading-none tracking-tight">
                  Flexible streaming 
                </h3>
              </div>
                <p className="text-details leading-[24px] text-muted-foreground ml-11">
                  Experience top-notch features with our services Lorem ipsum dolor, sit amet consectetur adipisicing 
                </p>
              
              </div>
            <div className="p-6 rounded-lg bg-gradient-to-r from-[hsl(190,100%,42%)] to-[hsl(190,100%,46%)]  border bg-card  text-card-foreground shadow-sm w-full">
              <div className="flex items-center  gap-3 space-y-1.5 p-6 pl-0 pb-3">
                <GiTreeGrowth className=" text-white text-3xl"/>
                <h3 className="text-[20px] text-white md:text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  Grow faster with pro's help
                </h3>
              </div>
                <p className="text-[#ececec] leading-[24px] text-muted-foreground ml-11">
                  Experience top-notch features with our services Lorem ipsum dolor, sit amet consectetur adipisicing 
                </p>
                <div className="text-right mt-6">
                <button className="  text-[#6e6e6e] w-1/3 md:w-1/2 hover:text-black transition-all duration-300 ml-9 items-center bg-[white] rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white/90 h-10 px-4 py-2 mt-4">
                  Get Started
                </button>

                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
