import Lottie from "lottie-react";
import animationData from "../../../assets/banner-lottie.json";
import Container from "../../Container/Container";

const Banner = () => {
  const gradientTextStyle = {
    background: "linear-gradient(to right, #3A6FB3, #4FA3D1)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline-block",
  };

  return (
    <section className=" min-h-[100vh] flex items-center py-24">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center px-2 2xl:px-3">
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold  md:leading-[45px] lg:leading-[60px]">
              Empower Your Day with
              <br className="hidden md:block"/>
              Appointify
            </h1>

            <div className="absolute -z-10 rotate-45 -left-32
             -top-32 rounded-[50px] bg-gradient-to-r from-[#fffafe]
              to-[#ffffff] w-[800px] h-[900px]"></div>

            <p className="  text-gray-600 lg:text-lg leading-7 md:mt-6 lg:mt-4  mb-7">
              Effortlessly organize appointments, meetings, and tasks in one
              intuitive platform, empowering you to elevate productivity and
              reclaim control over your daily routine.
            </p>

            <button className="px-4 h-12 text-white bg-primary rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head active:scale-95">
              Create a Schedule
            </button>
          </div>

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
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
