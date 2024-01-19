import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGithub } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // handle social media login
  // google
  const handleGoogle = () => {
    signInWithGoogle()
      .then(res => {
        console.log("User by Google Sign In", res.user)
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
        navigate(location.state || '/')
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
  }

  // github
  const handleGitHub = () => {
    signInWithGithub()
      .then(res => {
        console.log("User by gitHub Sign In", res.user)
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
        navigate(location.state || '/')
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
  }
  return (
    <div className="flex flex-col gap-2 font-inter text-sm text-gray-900">
      {/* login with google button */}
      <button
        className="w-full border-2 h-[44px] font-semibold bg-gradient-to-r from-special to-head p-[1px] rounded-lg relative transform active:scale-95 transition"
        onClick={handleGoogle}>
        <div className="bg-white h-full w-full flex items-center justify-center rounded-lg hover:bg-[#E4EDFF] transition">
          <span className="absolute left-3">
            <FcGoogle size={20} />
          </span>
          Login with Google
        </div>
      </button>
      
      {/* login with github button */}
      <button className="w-full border-2 h-[44px] font-semibold bg-gradient-to-r from-special to-head p-[1px] rounded-lg relative transform active:scale-95 transition"
        onClick={handleGitHub}>
        <div className="bg-white h-full w-full flex items-center justify-center rounded-lg hover:bg-[#E4EDFF] transition">
          <span className="absolute left-3">
            <FaGithub color="#000000" size={20} />
          </span>
          Login with Github
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;