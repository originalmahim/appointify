
import { FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import UserMenu from "../MenuItem/UserMenu";

const Sidebar = () => {
  // const [isAdmin] = useAdmin();
  const isAdmin = false;
  const { logOut, user } = useAuth();

  const handleLogout = () => {
    const toastId = toast.loading("Logging Out...");
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully.", {
          id: toastId,
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong!", {
          id: toastId,
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  return (
    <div
      style={{ zIndex: 9999 }}
      className="w-52 min-h-screen flex flex-col py-3 bg-[white] relative z-50"
    >
      {/* <div className="bg-[#fffbf974] h-[50vh]  w-32 filter blur-3xl absolute left-0  top-0"></div> */}

      <p className=" text-2xl font-bold pl-5 sticky top-0 bg-white z-50 flex items-center gap-2 text-primary">
        Appointify
      </p>
      <p className="text-light-gray pl-5 italic">Schedule Now</p>

      <div className="flex flex-col justify-between flex-1 mt-6 mx-2">
        <div className="">
          <UserMenu />
        </div>

        <div>
          <hr />
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <FiLogOut className="text-light-gray" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
