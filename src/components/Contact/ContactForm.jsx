import { FiPhoneCall, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import ContactCard from "./ContactCard";

const ContactForm = () => {
  return (
    <section className="bg-gray-200">
      <div className="max-w-6xl mx-auto py-10 lg:py-14 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="w-full md:w-3/5 py-16 px-8 md:px-12 lg:px-0">
          <h3
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="text-3xl font-bold text-center mb-10"
          >
            Send Us a Message
          </h3>
          <form
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
          >
            <div className="flex flex-col lg:flex-row gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="block w-full p-3 rounded-md border border-gray-600 text-sm text-[#757575] hover:border-special focus:border-special outline-none transition"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="block w-full p-3 rounded-md  border border-gray-600 text-sm text-[#757575] hover:border-special focus:border-special outline-none transition"
              />
            </div>
            <div className="my-5">
              <input
                type="email"
                placeholder="Your Email"
                className="block w-full p-3 rounded-md  border border-gray-600 text-sm text-[#757575] hover:border-special focus:border-special outline-none transition"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="block w-full h-[150px] lg:h-[200px] rounded-md text-sm text-[#757575] border border-gray-600 p-3 hover:border-special focus:border-special outline-none transition"
              ></textarea>
            </div>
            <div className="mt-5 flex justify-center">
              <input
                type="submit"
                value="Submit Now"
                className="px-8 h-[44px] text-white font-semibold bg-gradient-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head transition transform active:scale-95"
              />
            </div>
          </form>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          className="w-full md:w-2/5 flex flex-col gap-5 md:pr-12 lg:pr-0 px-8 md:px-0"
        >
          <div className=" bg-[#E3F3FF] rounded-md shadow-lg py-5 w-full lg:w-[80%] ml-auto flex flex-col md:gap-1 lg:gap-2 justify-center items-center">
            <div className="bg-[#14AE5C] text-white w-12 h-12 rounded-full flex items-center justify-center">
              <FiPhoneCall size={26} />
            </div>
            <ContactCard title={"Telephone"} subTitle={"+458 123 657 2324"} />
          </div>

          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className=" bg-[#E3F3FF] rounded-md shadow-lg py-5 w-full lg:w-[80%] ml-auto flex flex-col md:gap-1 lg:gap-2 justify-center items-center"
          >
            <div className="bg-[#4977B4] text-white w-12 h-12 rounded-full flex items-center justify-center">
              <FiMail size={26} />
            </div>
            <ContactCard
              title={"Drop Your Mail"}
              subTitle={"appointify99@gmail.com"}
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className=" bg-[#E3F3FF] rounded-md shadow-lg py-5 w-full lg:w-[80%] ml-auto flex flex-col md:gap-1 lg:gap-2 justify-center items-center"
          >
            <div className="bg-[#5e4e77] text-white w-12 h-12 rounded-full flex items-center justify-center">
              <IoLocationOutline size={26} />
            </div>
            <ContactCard
              title={"Location"}
              subTitle={"Mirpur-1, Dhaka, Bangladesh"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
