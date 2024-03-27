import emailBox from "../../../assets/images/email.png";
import floatUser from "../../../assets/images/floatUser.png";
import floatSendEmail from "../../../assets/images/floatSendEmail.png";
import floatEmail from "../../../assets/images/floatEmail.png";

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
      <section className="relative md:mt-5 lg:mt-9 xl:mt-11">
        <Container>
          {/* newsletter side */}

          <div className="flex justify-center mx-auto size-28 sm:size-32 md:size-44 lg:size-56 p-5 bg-gradient-to-t from-[#e3e3e3b4] to-[hsla(190,100%,46%,0)] rounded-full">
            <img src={emailBox} alt="" />
          </div>

          <div className="">
            <div className="text-center">
              <div className="">
                <TitleAndDescription
                  customStyle={"text-center"}
                  title={"Sign up for our newsletter"}
                  description={
                    "Stay up to date with exclusive discounts feel free to sign up with your email."
                  }
                />
              </div>
              <form onSubmit={handleNewsLetter} className="join">
                <input
                  className="border-2 bg-white shadow-lg px-4 h-12 w-[100%] lg:w-[340px] rounded-l-xl"
                  type="email"
                  name="email"
                  placeholder="domain@example.com"
                  required
                />
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="bg-gradient-to-r  from-[hsl(190,100%,42%)] to-[hsl(190,100%,46%)] text-white rounded-r-lg p-2  shadow-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <img src={floatUser} className="absolute opacity-10 bottom-8 left-9" alt="" />
          <img src={floatSendEmail} className="absolute opacity-20  top-8 right-9" alt="" />
          
        </Container>



      </section>
    </>
  );
};

export default NewsLetter;
