import Lottie from "lottie-react";
import animationData from "../../../assets/banner-lottie.json";
import Container from "../../Container/Container";
import bannerDemo from "../../../assets/images/bannerDemo.png";
import { MdArrowRightAlt } from "react-icons/md";
import TitleAndDescription from "../../TiteleAndDescription/TitleAndDescription";

const Banner = () => {
  const gradientTextStyle = {
    background: "linear-gradient(to right, #3A6FB3, #4FA3D1)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline-block",
  };

  return (
    <section className=" lg:min-h-[100vh] flex items-center py-24 pt-32 lg:pt-24">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row md:mt-8 gap-10 items-center px-2 2xl:px-3">
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >


            <TitleAndDescription title={"Empower Your Day with"}
            description={" Effortlessly organize appointments, meetings, and tasks in one intuitive platform empowering you to elevate productivity and reclaim control over your daily routine"} 
            lineBreak={true} 
            additionalText={"Appointify"}
            type={"h1"}
            />

            <button className="px-4 h-11 bg-[white] text-primary hover:text-white flex items-center gap-1 shadow-lg rounded-lg cursor-pointer hover:bg-gradient-to-r hover:bg-[#FF4F00]  hover:to-head active:scale-95 transition-all duration-400">
              Create a Schedule <MdArrowRightAlt/>
            </button>
          
          <div
              className="absolute -z-10 rotate-45 right-64
             -top-80 rounded-[50px] bg-gradient-to-r from-[#fffbf9]
              to-[#ffffff] w-[1400px] h-[1200px]"
            ></div>
          </div>


          <div className="w-full h-full bg-white p-3 hidden lg:block rounded-lg">
            <img src={bannerDemo} alt="" className="h-full w-full" />
          </div>

          {/*           

          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="w-4/5"
          >
            <Lottie animationData={animationData} />
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default Banner;
