import signup_bg from "../../assets/images/signup_bg.jpg";
import signup_gif from "../../assets/images/signup.gif";
import { Helmet } from "react-helmet-async";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoEye, IoEyeOff } from "react-icons/io5";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Helmet>
        <title>Appointify - Signup</title>
      </Helmet>

      <div
        className="min-h-screen bg-cover flex items-center justify-center bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${signup_bg})` }}
      >
        {/* Overlay div */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Main Container */}
        <div className="max-w-[800px] w-full min-h-[500px] bg-white rounded-lg p-2 flex items-center shadow-xl relative z-10">
          {/* signup image */}
          <div className="w-1/2">
            <img
              src={signup_gif}
              alt="signup_gif"
              className="hover:animate-pulse"
            />
          </div>

          {/* signup form */}
          <div className="lg:w-1/2 lg:pl-3 lg:pr-16">
            <h3 className="font-play text-3xl font-bold mb-5">
              Create New Account
            </h3>

            {/* social login */}
            <SocialLogin />

            <form className="mt-5">
              {/* email field */}
              <div className="relative">
                <IoIosMail
                  size={20}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-800"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="block w-full py-1 px-3 border-b border-black text-sm text-[#757575] hover:border-special focus:border-special outline-none pl-8 transition"
                />
              </div>

              {/* password field */}
              <div className="relative mt-3">
                <FaLock className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-800" />
                <input
                  type={isVisible ? "text" : "password"}
                  placeholder="Your Password"
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
                <input type="checkbox" className="" name="" id="" />
                <p className="text-sm text-gray-800">
                  I agree with the{" "}
                  <a href="#" className="text-special">
                    Terms & Conditions
                  </a>
                  .
                </p>
              </div>

              {/* signup button */}
              <div className="mt-3">
                <input
                  type="submit"
                  value="Sign Up"
                  className="w-full h-[44px] text-white font-semibold bg-gradient-to-r from-special to-head rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-[#0058AB] hover:to-[#00A6D0] transition transform active:scale-95"
                />
              </div>
            </form>

            <p className="text-sm mt-6 text-gray-800">
              Already have an account?{" "}
              <Link to="/login" className="text-special">
                Please Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
