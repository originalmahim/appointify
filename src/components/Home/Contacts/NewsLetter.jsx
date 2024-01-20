import Bird from "./Bird";

const NewsLetter = () => {
  const handleNewsLetter = (e) => {
    e.preventDefault();
    alert("You will get notified!");
  };

  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center mt-10 md:mt-20">
        {/* newsletter side */}
        <div className="flex-1 dark:text-gray-300 ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
              <h2 className="mb-4 text-3xl tracking-tight font-extrabold dark:text-gray-300 sm:text-4xl">
                Sign up for our newsletter
              </h2>
              <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
                Stay up to date with the announcements and exclusive discounts
                feel free to sign up with your email.
              </p>
              <form onSubmit={handleNewsLetter} className="join">
                <input
                  className="border-2 px-3 h-[45px] rounded-l-full"
                  type="text"
                  placeholder="Email"
                />
                <button
                  type="submit"
                  className="px-3 h-[44px] rounded-r-full text-white font-semibold bg-gradient-blue cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head transition transform active:scale-95"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* animation side */}
        <div className="flex-1">
          <Bird></Bird>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
