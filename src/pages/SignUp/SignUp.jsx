import signup_bg from "../../assets/images/signup_bg.jpg";
import signup_gif from "../../assets/images/signup.gif";
import { Helmet } from "react-helmet-async";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoEye, IoEyeOff } from "react-icons/io5";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handle signup
  const onSubmit = async (data) => {
    try {
      const result = await createUser(data?.email, data?.password);
      if (result?.user) {
        toast.success("Registration Successful!", {
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate("/");
      }
    } catch (error) {
      toast.error("Registration Failed!", {
        style: {
          borderRadius: "8px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Appointify | Sign Up</title>
      </Helmet>

      <section
        className="min-h-screen bg-cover flex items-center justify-center bg-center bg-no-repeat relative px-8 lg:px-0"
        style={{ backgroundImage: `url(${signup_bg})` }}
      >
        {/* Overlay div */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Main Container */}
        <div className="max-w-[800px] w-full min-h-[500px] bg-white rounded-lg p-2 md:flex items-center shadow-xl relative z-10 my-10 lg:my-0">
          {/* signup image */}
          <div className="lg:w-1/2">
            <img
              src={signup_gif}
              alt="signup_gif"
              className="hover:animate-pulse"
            />
          </div>

          <div className="md:w-1/2 lg:pl-3 lg:pr-16">
            <h3 className="text-center font-play text-3xl font-bold mb-5">
              Create New Account
            </h3>

            {/* social login */}
            <SocialLogin />

            {/* signup form */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
              {/* email field */}
              <div className="relative">
                <IoIosMail
                  size={20}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-800"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="block w-full py-1 px-3 border-b border-black text-sm text-[#757575] hover:border-special focus:border-special outline-none pl-8 transition"
                  {...register("email", { required: true })}
                />
              </div>
              {errors.email && (
                <span className="text-red-600">Email required*</span>
              )}

              {/* password field */}
              <div className="relative mt-3">
                <FaLock
                  size={20}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-800"
                />
                <input
                  type={isVisible ? "text" : "password"}
                  placeholder="Your Password"
                  className="block w-full py-1 px-3 border-b border-black text-sm text-[#757575] hover:border-special focus:border-special outline-none pl-8 transition"
                  {...register("password", { required: true })}
                />
                <span
                  onClick={() => setIsVisible(!isVisible)}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-800"
                >
                  {isVisible ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-600">Password required*</span>
              )}

              {/* checkbox */}
              <div className="flex gap-2 mt-3">
                <input
                  type="checkbox"
                  {...register("terms", { required: true })}
                />
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
              {errors.terms && (
                <span className="text-red-600">
                  Please accept the terms and conditions.
                </span>
              )}

              {/* signup button */}
              <div className="mt-3">
                <input
                  type="submit"
                  value="Sign Up"
                  className="w-full h-[44px] text-white font-semibold bg-gradient-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head transition transform active:scale-95"
                />
              </div>
            </form>

            <p className="text-center text-sm mt-6 text-gray-800">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-special font-semibold hover:font-bold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
