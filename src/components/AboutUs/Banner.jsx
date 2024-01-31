import Lottie from "lottie-react";
import animationData from "../../assets/AboutUsAnimation.json";
import Container from "../Container/Container";

const Banner = () => {
  return (
    <section className="bg-cardBG min-h-[100vh] flex items-center py-24">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 items-center px-2 2xl:px-3">
          <h1
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="font-play text-4xl md:text-5xl font-semibold text-center lg:text-start leading-[44px] lg:leading-[52px] xl:leading-[80px] text-black"
          >
            Transforming scheduling dreams into effortless reality for global
            connections.
          </h1>
          <div
            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
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
