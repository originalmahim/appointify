import { Link } from 'react-router-dom';
import background from '../../assets/login/login-bg.jpg'
import login_gif from '../../assets/login/login.gif'
import { useState } from 'react';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { FaLock } from 'react-icons/fa6';
import { IoIosMail } from "react-icons/io";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { signInUser } = useAuth()
    

    // React hook functonalities
    const {
        register,
        handleSubmit,
        watch,
        reset
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const email = data.email
        const password = data.password
        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: "Logged in successfully"
                  });
            })
            .catch(error => {
                console.log(`this ${error} Error Find`)
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "error",
                    title: "Logged in failed"
                  });
            })
        reset()
    }

    console.log(watch("example"))
    return (
        <>
            <Helmet>
                <title>Appointify - Login</title>
            </Helmet>
            <div className='min-h-screen w-full bg-cover flex items-center justify-center bg-center bg-no-repeat relative' style={{
                backgroundImage: `url(${background})`
            }}>
                {/* Overlay div */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                {/* Main Container */}
                <div className="max-w-[800px] w-full min-h-[500px] bg-white rounded-lg p-2 flex items-center shadow-xl relative z-10">
                    {/* signup image */}
                    <div className="w-1/2">
                        <img
                            src={login_gif}
                            alt="signup_gif"
                            className="hover:animate-pulse"
                        />
                    </div>

                    {/* signup form */}
                    <div className="lg:w-1/2 lg:pl-3 lg:pr-16">
                        <h3 className="font-play text-3xl font-bold mb-5">
                            Login
                        </h3>

                        {/* social login */}
                        <SocialLogin/>

                        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                            {/* email field */}
                            <div className="relative">
                                <IoIosMail
                                    size={20}
                                    className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-800"
                                />
                                <input
                                    placeholder='Your Email'
                                    name='email'
                                    {...register("email", { required: true })}
                                    className="block w-full py-1 px-3 border-b border-black text-sm text-[#757575] hover:border-special focus:border-special outline-none pl-8 transition"
                                />
                            </div>

                            {/* password field */}
                            <div className="relative mt-3">
                                <FaLock size={20} className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-800" />
                                <input
                                    type={isVisible ? "text" : "password"}
                                    placeholder='Your Password'
                                    name='password'
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
                                    value="Login"
                                    className="w-full h-[44px] text-white font-semibold bg-gradient-to-r from-special to-head rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-[#0058AB] hover:to-[#00A6D0] transition transform active:scale-95"
                                />
                            </div>
                        </form>

                        <p className="text-sm mt-6 text-gray-800">
                            Are you new at Appointify?{" "}
                            <Link to="/signUp" className="text-special">
                                Please Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;