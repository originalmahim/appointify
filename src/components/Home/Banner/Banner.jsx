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
    <section className="bg-cardBG min-h-[100vh] flex items-center py-24">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 items-center px-2 2xl:px-3">
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <h1 className="text-black text-5xl font-play font-semibold leading-[60px]">
              Empower Your Day with
              <br />
              Appointify
              <span style={gradientTextStyle} className="text-6xl">
                .
              </span>
            </h1>

            <p className="text-sub-head 2xl:text-lg font-medium leading-7 mt-6 mb-10">
              Effortlessly organize appointments, meetings, and tasks in one
              intuitive platform, empowering you to elevate productivity and
              reclaim control over your daily routine.
            </p>

            <button className="px-4 h-12 text-white font-semibold bg-gradient-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head active:scale-95">
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
