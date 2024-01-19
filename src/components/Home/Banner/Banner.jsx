import Lottie from "lottie-react";
import animationData from "../../../assets/images/banner-lottie.json";

const Banner = () => {
  const gradientTextStyle = {
    background: "linear-gradient(to right, #205cff, #49d2ff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline-block",
  };

  return (
    <section className="grid grid-cols-2 justify-between items-center gap-10 bg-[#E4EDFF] px-28 py-48">
      <div>
        <h1 className="font-play text-5xl font-semibold text-black leading-[60px]">
          Empower Your Day with
          <br />
          Appointify
          <span style={gradientTextStyle} className="text-6xl">
            .
          </span>
        </h1>

        <p className="font-inter text-[#121212] font-medium leading-7 mt-10 mb-16">
          Effortlessly organize appointments, meetings, and tasks in one
          intuitive platform, empowering you to elevate productivity and reclaim
          control over your daily routine.
        </p>

        <button className="btn border-none hover:border-none text-white font-inter bg-gradient-to-r from-[#205cff] to-[#49d2ff] px-6">
          Create a Schedule
        </button>
      </div>

      <div>
        <Lottie animationData={animationData} />
      </div>
    </section>
  );
};

export default Banner;
