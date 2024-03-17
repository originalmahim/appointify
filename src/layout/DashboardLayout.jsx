import toast from "react-hot-toast";
import { AiFillHome } from "react-icons/ai";
import { FaCalendarAlt, FaListUl, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdAddTask, MdOutlineSubscriptions, MdReviews } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { TbBrandBooking, TbMessage } from "react-icons/tb";
import { MdSubscriptions } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import Container from "../components/Container/Container";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";

import { AiOutlineDashboard } from "react-icons/ai";
import { CiHome, CiUser } from "react-icons/ci";
import { FcManager } from "react-icons/fc";
import SingleAvatar from "../components/Avatar/SingleAvatar";
import { SlArrowDown } from "react-icons/sl";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
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
    <>
      <Helmet>
        <title>Appointify | Dashboard</title>
      </Helmet>
      <section>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-[#F8FAFC] min-h-screen">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-ghost bg-white drawer-button lg:hidden flex justify-end mr-4 mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div className="border-4">
              <Container>
                <Outlet />
              </Container>
            </div>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            {/* sidebar content here */}
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardLayout;
