import Lottie from "lottie-react";
import animationData from "../../assets/AboutUsAnimation.json";
import Container from "../Container/Container";

const Banner = () => {
  return (
    <div className="min-h-[100vh] pt-32 lg:pt-48 pb-32">
      <Container>
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-10">
          <div>
            <h1 className="font-play text-3xl lg:text-4xl xl:text-6xl font-semibold text-center lg:text-start leading-[44px] lg:leading-[52px] xl:leading-[80px] text-head">
              Transforming scheduling dreams into effortless reality for global
              connections.
            </h1>
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
    </div>
  );
};

export default Banner;
