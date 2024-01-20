import Lottie from "lottie-react";
import clientForm from "../../../assets/clientForm.json";
import schedule from "../../../assets/images/Schedule.jpg";
import automate from "../../../assets/images/automate.jpg";
import card1 from "../../../assets/images/card1Image.jpg";
import customer1 from "../../../assets/images/customer1.jpg";
import customer2 from "../../../assets/images/customer2.jpg";
import stack from "../../../assets/stack.mp4";

const FeatureOverview = () => {
  return (
    <section className="max-w-[830px] p-5 mx-auto my-20">
      <div className="p-10 rounded-lg sm:h-[300px] flex flex-col sm:flex-row-reverse justify-between bg-cardBG">
        <div className="sm:w-2/5 h-[300px]">
          <div className="pl-4 sm:pl-0">
            <img
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="object-cover h-48 w-full rounded-lg"
              src={card1}
              alt=""
            />

            <div className="w-28 sm:w-32 py-2 rounded-md -mt-12 -ml-10 sm:-ml-14">
              <img
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1600"
                className=" rounded-lg"
                src={schedule}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="sm:w-2/5 h-[200px] sm:h-[300px]">
          <h2 className="font-play mb-3 font-bold text-lg md:text-xl lg:text-2xl">
            Manage your schedule effortlessly
          </h2>
          <p className="text-justify text-sm md:text-base">
            Empower yourself with flexible tools to organize and prosper on your
            terms – tailor precisely when and how clients can schedule with you,
            conduct virtual appointments or classes, and reserve personal time
            as needed.
          </p>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row gap-2 my-2">
        <div className="w-full p-10 sm:w-1/2 bg-cardBG h-[520px] rounded-lg">
          <h2 className="font-play mb-3 font-bold text-lg md:text-xl lg:text-2xl">
            Expand your clientele and foster engagement
          </h2>
          <p className="text-justify text-sm md:text-base">
            Craft personalized intake forms to streamline and enhance the
            customer experience. Harness the potential of robust loyalty tools
            to stimulate business growth and foster lasting relationships that
            encourage customers to return.
          </p>

          <div className=" relative">
            <div className="mt-5 flex justify-center">
              <div className=" w-48  bg-white rounded-lg">
                <Lottie animationData={clientForm} autoPlay={true} />
              </div>
            </div>
            <img
              className=" absolute -top-4 right-10 w-10 h-10 rounded-full object-contain"
              src={customer1}
              alt=""
            />
            <img
              className=" absolute -bottom-4 left-10 w-10 h-10 rounded-full bg-cover"
              src={customer2}
              alt=""
            />
          </div>
        </div>
        <div className="w-full p-10 sm:w-1/2 bg-cardBG h-[520px] rounded-lg">
          <h2 className="font-play mb-3 font-bold text-lg md:text-xl lg:text-2xl">
            Facilitate automated appointment bookings
          </h2>
          <p className="text-justify text-sm md:text-base">
            Effortlessly oversee multiple locations and empower clients to
            effortlessly modify or reschedule appointments on their own.
            Streamline the process by sending automated receipts and timely
            reminder notifications at each step of the scheduling journey,
            ensuring clients stay punctual.
          </p>
          <div className="mt-10 flex justify-center">
            <img
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="w-52 bg-cover rounded-lg"
              src={automate}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="p-10 rounded-lg sm:h-[300px] flex flex-col-reverse sm:flex-row justify-between bg-cardBG">
        <div className="sm:w-2/5 h-[200px] sm:h-[300px]">
          <h2 className="font-play mb-3 font-bold text-lg md:text-xl lg:text-2xl">
            Safeguard your time and optimize your revenue
          </h2>
          <p className="text-justify text-sm md:text-base">
            Experience peace of mind with no-show protection tools such as
            secure credit card storage and deposits. Easily provide recurring
            subscriptions, packages, and gift cards to boost your income
            seamlessly.
          </p>
        </div>
        <div className="sm:w-2/5 ">
          <video autoPlay loop muted playsInline src={stack}></video>
        </div>
      </div>
    </section>
  );
};

export default FeatureOverview;
