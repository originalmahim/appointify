import Lottie from "lottie-react";
import serviceAnimation from "../../assets/service-animation.json";
import Container from "../Container/Container";

const ContactBanner = () => {
  return (
    <section className="bg-cardBG min-h-[100vh] flex items-center py-24">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between px-2 2xl:px-3">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
          >
            <h1 className="text-black text-4xl md:text-5xl font-play font-semibold leading-[60px]">
              How can we help?
            </h1>
            <p className="text-sub-head 2xl:text-lg font-medium leading-7 mt-6 mb-10">
              Contact us for personalized assistance and support. Our dedicated
              team is here to help you navigate through scheduling and ensure a
              seamless experience tailored to your unique needs.
            </p>
            <button className="px-4 h-12 text-white font-semibold bg-gradient-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head active:scale-95">
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
  );
};

export default ContactBanner;
