const ContactForm = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="md:w-3/5 py-16 px-8 md:px-12 lg:px-0">
        <h3 className="text-3xl font-bold text-center mb-10">
          Send Us a Message
        </h3>
        <form>
          <div className="flex flex-col lg:flex-row gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="block w-full p-3 rounded-md  border border-gray-700 text-sm text-[#757575] hover:border-special focus:border-special outline-none transition"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="block w-full p-3 rounded-md  border border-gray-700 text-sm text-[#757575] hover:border-special focus:border-special outline-none transition"
            />
          </div>
          <div className="my-5">
            <input
              type="email"
              placeholder="Your Email"
              className="block w-full p-3 rounded-md  border border-gray-700 text-sm text-[#757575] hover:border-special focus:border-special outline-none transition"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              className="block w-full h-[150px] lg:h-[200px] rounded-md text-sm text-[#757575] border border-gray-700 p-3"
            ></textarea>
          </div>
          <div className="mt-5 flex justify-center">
            <input
              type="submit"
              value="Submit Now"
              className="px-8 h-[44px] text-white font-semibold bg-gradient-to-r from-[#5E4E77] to-[#4977B4] rounded-lg cursor-pointer hover:bg-gradient-blue transition transform active:scale-95"
            />
          </div>
        </form>
      </div>
      <div></div>
    </section>
  );
};

export default ContactForm;
