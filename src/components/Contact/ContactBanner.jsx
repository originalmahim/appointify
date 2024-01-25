import Lottie from "lottie-react";
import serviceAnimation from "../../assets/service-animation.json";
import Container from "../Container/Container";

const ContactBanner = () => {
  return (
    <>
      {/* <section className="min-h-[70vh] bg-[#E3F3FF] relative pt-24 md:pt-2 lg:pt-1">
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
    </section> */}
      <section className="bg-cardBG min-h-[80vh] flex items-center py-24 ">
        <Container>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              className="md:max-w-lg lg:max-w-xl"
            >
              <h1 className="font-play text-4xl lg:text-5xl font-semibold text-black leading-[60px]">
                How can we help?
              </h1>
              <p className="text-[#121212] font-medium leading-7 mt-5 mb-8">
                Contact us for personalized assistance and support. Our
                dedicated team is here to help you navigate through scheduling
                and ensure a seamless experience tailored to your unique needs.
              </p>
              <button className="btn border-none hover:border-none text-white bg-gradient-blue hover:bg-gradient-to-r hover:from-special hover:to-head px-6">
                Leave a Message
              </button>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
            >
              <Lottie animationData={serviceAnimation} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactBanner;
