import toast from "react-hot-toast";
import Bird from "./Bird";
import Container from "../../Container/Container";

const NewsLetter = () => {
  const handleNewsLetter = (e) => {
    e.preventDefault();
    toast.success("Successfully Subscribed!", {
      style: {
        borderRadius: "8px",
        background: "#333",
        color: "#fff",
      },
    });
    e.target.reset();
  };

  return (
    <>
      <section className="max-w-[1400px] mx-auto mt-24 md:mt-32 lg:mt-36 xl:mt-40">
        <Container>
          {/* newsletter side */}
          <div className="text-center flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h1 className="text-special text-3xl md:text-4xl xl:text-5xl font-play font-bold dark:text-slate-300">
                Sign up for our newsletter
              </h1>
              <p className="px-5 my-8 font-medium text-details dark:text-gray-400">
                Stay up to date with the announcements and exclusive discounts
                feel free to sign up with your email.
              </p>
              <form onSubmit={handleNewsLetter} className="join">
                <input
                  className="border-2 px-4 h-12 w-full lg:w-4/5 xl:w-11/12 rounded-l-xl"
                  type="email"
                  placeholder="Email"
                  required
                />
                <button
                  type="submit"
                  className="px-4 h-12 rounded-r-xl text-white font-semibold bg-gradient-blue cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head active:scale-95"
                >
                  Subscribe
                </button>
              </form>
            </div>
            {/* animation side */}
            <div className="flex-1">
              <Bird />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NewsLetter;
