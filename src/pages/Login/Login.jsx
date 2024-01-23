import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import login_bg from "../../assets/images/signup_bg.jpg";
import login_gif from "../../assets/images/login.gif";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate()

  // React hook functonalities
  const { register, handleSubmit, watch, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Logged in Successful!", {
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(`this ${error} Error Find`);
        toast.success("Logged in Failed!", {
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        });
      });
    reset();
  };

  console.log(watch("example"));
  return (
    <>
      <Helmet>
        <title>Appointify | Sign In</title>
      </Helmet>
      <div
        className="min-h-screen w-full bg-cover flex items-center justify-center bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${login_bg})`,
        }}
      >
        {/* Overlay div */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Main Container */}
        <div className="max-w-[800px] w-full min-h-[500px] bg-white rounded-lg p-2 flex flex-col lg:flex-row md:flex-row items-center shadow-xl relative z-10">
          {/* signup image */}
          <div className="lg:w-1/2 md:lg:w-1/2 w-full">
            <img
              src={login_gif}
              alt="signup_gif"
              className="hover:animate-pulse"
            />
          </div>

          {/* signup form */}
          <div className="lg:w-1/2 lg:pl-3 lg:pr-16">
            <h3 className="text-center font-play text-3xl font-bold mb-5">
              Sign In
            </h3>

            {/* social login */}
            <SocialLogin />

            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
              {/* email field */}
              <div className="relative">
                <IoIosMail
                  size={20}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-800"
                />
                <input
                  placeholder="Your Email"
                  name="email"
                  size={20}
                  {...register("email", { required: true })}
                  className="block w-full py-1 px-3 border-b border-black text-sm text-[#757575] hover:border-special focus:border-special outline-none pl-8 transition"
                />
              </div>

              {/* password field */}
              <div className="relative mt-3">
                <FaLock
                  size={20}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-800"
                />
                <input
                  type={isVisible ? "text" : "password"}
                  placeholder="Your Password"
                  name="password"
                  {...register("password", { required: true })}
                  className="block w-full py-1 px-3 border-b border-black text-sm text-[#757575] hover:border-special focus:border-special outline-none pl-8 transition"
                />
                <span
                  onClick={() => setIsVisible(!isVisible)}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-800"
                >
                  {isVisible ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                </span>
              </div>

              {/* checkbox */}
              <div className="flex gap-2 mt-3">
                <input type="checkbox" className="" name="" id="" required/>
                <p className="text-sm text-gray-800">
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-special font-semibold hover:font-bold"
                  >
                    Terms & Conditions
                  </a>
                  .
                </p>
              </div>

              {/* signup button */}
              <div className="mt-3">
                <input
                  type="submit"
                  value="Login"
                  className="w-full h-[44px] text-white font-semibold bg-gradient-to-r from-[#5E4E77] to-[#4977B4] rounded-lg cursor-pointer hover:bg-gradient-blue transition transform active:scale-95"
                  
                />
              </div>
            </form>

            <p className="text-center text-sm mt-6 text-gray-800">
              Are you new at Appointify?{" "}
              <Link
                to="/signup"
                className="text-special font-semibold hover:font-bold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
