import toast from "react-hot-toast";
import Bird from "./Bird";
import Container from "../../Container/Container";
// import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TitleAndDescription from "../../TiteleAndDescription/TitleAndDescription";

const NewsLetter = () => {
  // const { user } = useAuth();
  // const { email, photoURL, displayName } = user;
  const axiosPublic = useAxiosPublic();

  const handleNewsLetter = (e) => {
    e.preventDefault();
    const userInfo = {
      email: e.target.email.value,
      registrationTime: new Date(),
    };
    axiosPublic
      .post("newsletters", userInfo)
      .then((res) => {
        if (!res.data.isExist) {
          toast.success("Successfully Subscribed!");
          e.target.reset();
        } else {
          toast.error("User email already Exists!", {
            style: {
              borderRadius: "10px",
              background: "#ffcccc",
              color: "black",
            },
          });
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
          <div className=" flex flex-col-reverse md:flex-row items-center gap-6">
            <div className="flex-1">
            <div className="text-left">
              <TitleAndDescription
              title={"Sign up for our newsletter"}
              description={"Stay up to date with the announcements and exclusive discounts feel free to sign up with your email."}
              />
            </div>
              <form onSubmit={handleNewsLetter} className="join">
                <input
                  className="border-2 px-4 h-12 w-[100%] lg:w-[340px] rounded-l-xl"
                  type="email"
                  name="email"
                  placeholder="domain@example.com"
                  required
                />
                <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-primary text-white p-2 rounded-r-sm"
                >
                  Subscribe
                </button>

                </div>
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
