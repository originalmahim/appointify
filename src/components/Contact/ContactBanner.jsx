import Lottie from "lottie-react";
import serviceAnimation from "../../assets/service-animation.json";

const ContactBanner = () => {
  return (
    <section className="min-h-[70vh] bg-[#E3F3FF] relative pt-24 md:pt-2 lg:pt-1">
      <div className="md:flex md:pl-[44px] lg:pl-[100px] lg:pr-10">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          className="lg:w-1/2 mx-10 md:mx-0 flex flex-col justify-center text-center md:text-left"
        >
          <h2 className="text-4xl lg:text-[45px] font-semibold mb-5 font-play">
            How can we help?
          </h2>
          <p className="text-lg font-semibold text-gray-700">
            Get in touch and let us know how we can help.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <Lottie animationData={serviceAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
