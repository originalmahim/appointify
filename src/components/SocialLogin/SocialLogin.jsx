import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGithub } = useAuth();
  const navigate = useNavigate();

  // login with google
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result?.user);

      if (result?.user) {
        toast.success("Login Successful!", {
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate("/");
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
  }

  const handleGithubSignIn = async () => {
    try {
      const result = await signInWithGithub();
      console.log(result?.user);

      if (result?.user) {
        toast.success("Login Successful!", {
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate("/");
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
    <div className="flex flex-col gap-2 font-inter text-sm text-gray-900">
      <button
        onClick={handleGoogleSignIn}
        className="w-full border-2 h-[44px] font-semibold bg-gradient-to-r from-special to-head p-[1px] rounded-lg relative transform active:scale-95 transition"
      >
        <div className="bg-white h-full w-full flex items-center justify-center rounded-lg hover:bg-[#E4EDFF] transition">
          <span className="absolute left-3">
            <FcGoogle size={20} />
          </span>
          Login with Google
        </div>
      </button>
      <button
        onClick={handleGithubSignIn}
        className="w-full border-2 h-[44px] font-semibold bg-gradient-to-r from-special to-head p-[1px] rounded-lg relative transform active:scale-95 transition">
        <div className="bg-white h-full w-full flex items-center justify-center rounded-lg hover:bg-[#E4EDFF] transition">
          <span className="absolute left-3">
            <FaGithub className="text-gray-700" size={20} />
          </span>
          Login with Github
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
