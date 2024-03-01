import toast from "react-hot-toast";
import Bird from "./Bird";
import Container from "../../Container/Container";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const NewsLetter = () => {
  const { user } = useAuth();
  const { email, photoURL, displayName } = user;
  const axiosPublic = useAxiosPublic();

  const handleNewsLetter = (e) => {
    e.preventDefault();
    const userInfo = {
      email,
      photoURL,
      displayName,
      registrationTime: new Date(),
    };
    axiosPublic
      .post("newsletters", userInfo)
      .then((res) => {
        if (res.data.success) {
          toast.success("Successfully Subscribed!");
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
              <p className="px-5 mt-6 mb-10 font-medium text-sub-head 2xl:text-lg dark:text-gray-400">
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
