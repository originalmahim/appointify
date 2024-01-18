import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div className="flex flex-col gap-2 font-inter text-sm text-gray-900">
          <button className="w-full border-2 h-[44px] font-semibold bg-gradient-to-r from-special to-head p-[1px] rounded-lg relative transform active:scale-95 transition">
            <div className="bg-white h-full w-full flex items-center justify-center rounded-lg hover:bg-[#E4EDFF] transition">
              <span className="absolute left-3">
                <FcGoogle size={20} />
              </span>
              Login with Google
            </div>
          </button>
          <button className="w-full border-2 h-[44px] font-semibold bg-gradient-to-r from-special to-head p-[1px] rounded-lg relative transform active:scale-95 transition">
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