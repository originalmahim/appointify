import { FiPhoneCall, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import ContactCard from "./ContactCard";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Container from "../Container/Container";

const ContactForm = () => {
  const form = useRef();
  const axiosPublic = useAxiosPublic();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formField = e.target;

    const name = formField.user_name.value;
    const phone = formField.user_phone.value;
    const email = formField.user_email.value;
    const message = formField.message.value;

    const newMessage = { name, phone, email, message };

    const { data } = await axiosPublic.post("/messages", newMessage);

    if (data?._id) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJSSERVICEID,
          import.meta.env.VITE_EMAILJSTEMPLATEID,
          form.current,
          import.meta.env.VITE_EMAILJSPUBLICKEY
        )
        .then(
          (result) => {
            if (result.status === 200) {
              toast.success("Message Sent!");
              formField.reset();
            }
          },
          (error) => {
            toast.error(error.text);
          }
        );
    }
  };

  return (
    <section className="max-w-[1400px] mx-auto mt-24 md:mt-32 lg:mt-36 xl:mt-40">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:justify-between">
          <div className="w-full md:w-1/2">
            <h1
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              className="text-center text-special text-3xl md:text-4xl xl:text-5xl font-play font-bold mb-8 md:mb-12 lg:mb-14 xl:mb-16"
            >
              Send Us a Message
            </h1>
            <form
              ref={form}
              onSubmit={sendEmail}
              data-aos="fade-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
            >
              <div className="flex flex-col lg:flex-row gap-5">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="block w-full p-3 rounded-md border border-gray-600 text-sm text-[#757575] hover:border-special focus:border-special outline-none"
                  required
                />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Phone"
                  className="block w-full p-3 rounded-md  border border-gray-600 text-sm text-[#757575] hover:border-special focus:border-special outline-none"
                  required
                />
              </div>
              <div className="my-5">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="block w-full p-3 rounded-md  border border-gray-600 text-sm text-[#757575] hover:border-special focus:border-special outline-none"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  className="block w-full h-[150px] lg:h-[200px] rounded-md text-sm text-[#757575] border border-gray-600 p-3 hover:border-special focus:border-special outline-none"
                  required
                ></textarea>
              </div>
              <div className="mt-8 flex justify-center">
                <input
                  type="submit"
                  value="Submit Now"
                  className="px-4 h-12 text-white font-semibold bg-gradient-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head active:scale-95"
                />
              </div>
            </form>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="w-full md:w-2/5 flex flex-col gap-5"
          >
            <div className=" bg-[#E3F3FF] rounded-md shadow-lg py-5 w-full lg:w-[80%] ml-auto flex flex-col md:gap-1 lg:gap-2 justify-center items-center md:hover:scale-110 transition duration-300">
              <div className="bg-[#14AE5C] text-white w-12 h-12 rounded-full flex items-center justify-center">
                <FiPhoneCall size={26} />
              </div>
              <div className="flex flex-col justify-center items-center md:gap-1 lg:gap-2">
                <p className="text-2xl font-semibold font-play">Telephone</p>
                <a
                  href="tel:+458 123 657 2324"
                  className="text-lg font-medium text-[#757575]"
                >
                  +458 123 657 2324
                </a>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              className=" bg-[#E3F3FF] rounded-md shadow-lg py-5 w-full lg:w-[80%] ml-auto flex flex-col md:gap-1 lg:gap-2 justify-center items-center md:hover:scale-110 transition duration-300"
            >
              <div className="bg-[#4977B4] text-white w-12 h-12 rounded-full flex items-center justify-center">
                <FiMail size={26} />
              </div>
              <div className="flex flex-col justify-center items-center md:gap-1 lg:gap-2">
                <p className="text-2xl font-semibold font-play">
                  Drop Your Mail
                </p>
                <a
                  href="mailto:appointify99@gmail.com"
                  className="text-lg font-medium text-[#757575]"
                >
                  appointify99@gmail.com
                </a>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              className=" bg-[#E3F3FF] rounded-md shadow-lg py-5 w-full lg:w-[80%] ml-auto flex flex-col md:gap-1 lg:gap-2 justify-center items-center md:hover:scale-110 transition duration-300"
            >
              <div className="bg-[#5e4e77] text-white w-12 h-12 rounded-full flex items-center justify-center">
                <IoLocationOutline size={26} />
              </div>
              <ContactCard
                title={"Location"}
                subTitle={"Banani, Dhaka, Bangladesh"}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
