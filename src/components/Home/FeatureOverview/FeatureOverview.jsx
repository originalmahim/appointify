import Lottie from "lottie-react";
import clientForm from "../../../assets/clientForm.json";
import schedule from "../../../assets/images/Schedule.jpg";
import automate from "../../../assets/images/automate.jpg";
import card1 from "../../../assets/images/card1Image.jpg";
import customer1 from "../../../assets/images/customer1.jpg";
import customer2 from "../../../assets/images/customer2.jpg";
import stack from "../../../assets/stack.mp4";
import Container from "../../Container/Container";
import TitleAndDescription from "../../TiteleAndDescription/TitleAndDescription";

import bookingEventImg from "../../../assets/images/bookingEvent.png";
import GradientShed from "../../GradientShade/GradientShed";

const FeatureOverview = () => {
  return (
    <section className="max-w-[1400px] mx-auto ">
      <Container>
        <div className="text-center relative">
          <TitleAndDescription
            title={"Our Feature"}
            type={"h2"}
            description={
              "Here are what we provide let's take brief overview in it"
            }
          />
        </div>

        {/* Gradient shade */}

        <GradientShed
          position={"-top-[200px] -right-[1400px] w-[2000px] h-[2000px]"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {/* Zoom and Google */}
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="bg-white lg:col-span-2 shadow-lg  rounded-lg"
          >
            <div className="">
              <div className="pl-4 sm:pl-0">
                <img
                  className=" h-40 md:h-52 lg:h-72 object-cover object-top md:object-center w-full rounded-lg"
                  src="https://cdn.dribbble.com/userupload/3908561/file/original-8fa26578764ae7b4c9b158eb1c07ec90.png?resize=752x"
                  alt=""
                />
              </div>
              <div className="p-4 pb-8">
                <h2 className="mb-3 text-lg md:text-xl">Zoom and Google</h2>
                <p className="text-justify text-sm md:text-base text-light-gray">
                  Integrate Zoom and Google features for seamless virtual events
                  and collaboration.
                </p>
              </div>
            </div>
          </div>

          {/* First Section - Booking Event */}
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="bg-white shadow-lg"
          >
            <div className="">
              <div className="pl-4 sm:pl-0">
                <img
                  className="object-cover object-top md:object-center h-40  md:h-52 lg:h-72 w-full rounded-lg"
                  src={bookingEventImg}
                  alt=""
                />
              </div>
              <div className="p-4 pb-8">
                <h2 className="mb-3 text-lg md:text-xl">Booking Event</h2>
                <p className="text-justify text-sm md:text-base text-light-gray">
                  Simplify event management by easily booking and organizing
                  events.
                </p>
              </div>
            </div>
          </div>

          {/* Second Section - Setting Event Calendar */}
          <div
            data-aos="fade-up-right"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="bg-white shadow-lg rounded-lg"
          >
            <div className="">
              <div className="pl-4 sm:pl-0">
                <img
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="object-cover object-top md:object-center h-40  md:h-52 lg:h-72 w-full rounded-lg"
                  src="https://cdn.dribbble.com/userupload/3234396/file/original-afbe9420bc45b933609ccb0d58412752.png?resize=400x300&vertical=center"
                  alt=""
                />
              </div>
              <div className="p-4 pb-8">
                <h2 className="mb-3 text-lg md:text-xl">
                  Setting Event Calendar
                </h2>
                <p className="text-justify text-sm md:text-base text-light-gray">
                  Craft personalized calendars to streamline and enhance the
                  event management experience.
                </p>
              </div>
            </div>
          </div>

          {/* Collaboration  */}
          <div className="bg-white shadow-lg lg:col-span-2 rounded-lg">
            <div className="pl-4 sm:pl-0">
              <img
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="ver h-40 md:h-52 lg:h-72 object-cover object-top md:object-center w-full rounded-lg"
                src="https://cdn.dribbble.com/users/4341791/screenshots/8574595/media/3cbca4ba607b111c4d4702f210062a62.gif"
                alt=""
              />
            </div>
            <div className="p-4 pb-8">
              <h2 className="mb-3 text-lg md:text-xl">
                Effortless collaboration
              </h2>
              <p className="text-justify text-sm md:text-base text-light-gray">
                Integrate Zoom and Google features for seamless virtual events
                and collaboration.
              </p>
            </div>
          </div>

          {/* Continue the pattern for the remaining sections */}
        </div>
      </Container>
    </section>
  );
};

export default FeatureOverview;
