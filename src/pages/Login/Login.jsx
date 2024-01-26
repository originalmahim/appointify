import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import login_bg from "../../assets/images/signup_bg.jpg";
import login_gif from "../../assets/images/login.gif";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import { useState } from "react";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { signInUser, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // React hook functonalities
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await signInUser(data?.email, data?.password);
      
      if (result?.user) {
        toast.success("Login Successful!", {
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        });

        // navigate user after successfull sign up and show a toast
        navigate(from, { replace: true });
      }
    } catch (error) {
      toast.error("Login Failed!", {
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
        <title>Appointify | Sign In</title>
      </Helmet>
      <section
        className="min-h-screen bg-cover flex items-center justify-center bg-center bg-no-repeat relative md:px-10 lg:px-0"
        style={{
          backgroundImage: `url(${login_bg})`,
        }}
      >
        {/* Overlay div */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Main Container */}
        <div className="max-w-[800px] w-full min-h-[500px] bg-white md:rounded-lg p-2 md:flex items-center shadow-xl relative z-10 pb-10 md:pb-0 md:my-10 lg:my-0">
          {/* signin image */}
          <div className="md:w-1/2">
            <img
              src={login_gif}
              alt="signup_gif"
              className="hover:animate-pulse"
            />
          </div>

          {/* login form */}
          <div className="md:w-1/2 px-3 md:px-0 lg:pl-3 md:pr-12 lg:pr-16">
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
              {errors.password && (
                <span className="text-red-600">Password required*</span>
              )}

              {/* forget password */}
              <div className="mt-3">
                <p className="text-sm text-special">Forget your password?</p>
              </div>

              {/* signup button */}
              <div className="mt-3">
                {loading ? (
                  <button className="w-full h-[44px] text-white font-semibold bg-gradient-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head transition transform active:scale-95 flex justify-center items-center">
                    <TbFidgetSpinner className="animate-spin" size={20} />
                  </button>
                ) : (
                  <input
                    type="submit"
                    value="Login"
                    className="w-full h-[44px] text-white font-semibold bg-gradient-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head transition transform active:scale-95"
                  />
                )}
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
      </section>
    </>
  );
};

export default Login;
