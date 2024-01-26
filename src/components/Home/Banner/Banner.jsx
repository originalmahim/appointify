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
    <section className="bg-cardBG min-h-[100vh] flex items-center py-48 ">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 items-center px-2 ">
          <div>
            <h1 className="font-play text-5xl font-semibold text-black leading-[60px]">
              Empower Your Day with
              <br />
              Appointify
              <span style={gradientTextStyle} className="text-6xl">
                .
              </span>
            </h1>

            <p className="text-[#121212] font-medium leading-7 mt-10 mb-16">
              Effortlessly organize appointments, meetings, and tasks in one
              intuitive platform, empowering you to elevate productivity and
              reclaim control over your daily routine.
            </p>

            <button className="btn border-none hover:border-none text-white bg-gradient-blue hover:bg-gradient-to-r hover:from-special hover:to-head px-6">
              Create a Schedule
            </button>
          </div>

          <div
            data-aos="zoom-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <Lottie animationData={animationData} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
