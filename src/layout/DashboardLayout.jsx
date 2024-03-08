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

const DashboardLayout = () => {
  // const [isAdmin] = useAdmin();
  const isAdmin = false
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
            <div className="">
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

            <div
              style={{ zIndex: 9999 }}
              className="w-52 min-h-screen flex flex-col py-3 bg-[white] relative z-50"
            >
              {/* <div className="bg-[#fffbf974] h-[50vh]  w-32 filter blur-3xl absolute left-0  top-0"></div> */}

              <p className=" text-2xl font-bold pl-5 sticky top-0 bg-white z-50 flex items-center gap-2 text-primary">
                Appointify
              </p>
              <p className="text-light-gray pl-5 italic">Schedule Now</p>

              <ul className="menu mt-3 space-y-1">
                {isAdmin ? (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/admin-home"
                        className={` text-[16px]`}
                      >
                        <CiHome />
                        Admin Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/profile"
                        className={`${({ isActive }) =>
                          isActive ? "bg-[red]" : "bg-[red]"} text-[16px]`}
                      >
                        <CiUser />
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/add-blog"
                        className={`${({ isActive }) =>
                          isActive ? "bg-[red]" : "bg-[red]"} text-[16px]`}
                      >
                        <MdAddTask />
                        Add Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/manage-blog"
                        className={`${({ isActive }) =>
                          isActive ? "bg-[red]" : "bg-[red]"} text-[16px]`}
                      >
                        <FaListUl />
                        Manage Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/inbox"
                        className={`${({ isActive }) =>
                          isActive ? "bg-[red]" : "bg-[red]"} text-[16px]`}
                      >
                        <TbMessage />
                        Inbox
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/users"
                        className={`${({ isActive }) =>
                          isActive ? "bg-[red]" : "bg-[red]"} text-[16px]`}
                      >
                        <FcManager />
                        Manage Users
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/subscriptions"
                        className={`${({ isActive }) =>
                          isActive ? "bg-[red]" : "bg-[red]"} text-[16px]`}
                      >
                        <MdOutlineSubscriptions />
                        Subscriptions
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/profile"
                        className={`${({ isActive }) =>
                          isActive ? "bg-[red]" : "bg-[red]"} text-[16px]`}
                      >
                        <FaUser />
                        Profile
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink
                        to="/dashboard/manage-booking"
                        className={`${({ isActive }) =>
                          isActive ? "bg-[red]" : "bg-[red]"} text-[16px]`}
                      >
                        <FaCalendarAlt />
                        Manage Booking
                      </NavLink>
                    </li> */}

                    {/* <li>
                      <NavLink
                        to="/dashboard/payment-history"
                        className={({ isActive }) =>
                          isActive
                            ? ""
                            
                        }
                      >
                        <BiSolidWalletAlt />
                        Payment History
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/cart"
                        className={({ isActive }) =>
                          isActive
                            ? ""
                            
                        }
                      >
                        <IoMdCart />
                        My Cart
                      </NavLink>
                    </li> */}

                    {/* <li>
                      <NavLink
                        to="/dashboard/bookings"
                        className={`${({ isActive }) =>
                          isActive ? "bg-[red]" : "bg-[red]"} text-[16px]`}
                      >
                        <TbBrandBooking />
                        My Bookings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/add-review"
                        className={`${({ isActive }) =>
                          isActive ? "bg-[red]" : "bg-[red]"} text-[16px]`}
                      >
                        <MdReviews />
                        Add Review
                      </NavLink>
                    </li> */}
                  </>
                )}
              </ul>
              <div className="divider py-0"></div>
              <ul className="menu">
                <li>
                  <NavLink
                    to="/dashboard/user-home"
                    className={`${({ isActive }) =>
                      isActive ? "bg-[red]" : "bg-[red]"} text-[16px]`}
                  >
                    <AiFillHome />
                    User Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/availability"
                    className={`${({ isActive }) =>
                      isActive ? "bg-[red]" : "bg-[red]"} text-[16px]`}
                  >
                    <CiHome />
                    Availability
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={`${({ isActive }) =>
                      isActive ? "bg-[red]" : "bg-[red]"} text-[16px]`}
                  >
                    <CiHome />
                    Home
                  </NavLink>
                </li>

                {/* <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? ""
                      
                  }
                >
                  <IoBookmarksSharp />
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive
                      ? ""
                      
                  }
                >
                  <MdOutlinePriceChange />
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? ""
                      
                  }
                >
                  <BiSolidContact />
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive
                      ? ""
                      
                  }
                >
                  <IoInformationCircleSharp />
                  About Us
                </NavLink>
              </li> */}
                <li>
                  <Link onClick={handleLogout} className="">
                    <FiLogOut className="text-light-gray" />
                    Logout
                  </Link>
                </li>
              </ul>

              <div className=" flex  flex-col mt-auto  justify-end pl-4 cursor-pointer">
                <div className="flex gap-2">
                  <div>
                    <SingleAvatar img={user && user.photoURL} />
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <h6 className="font-semibold">
                        {user && user.displayName}
                      </h6>
                      <SlArrowDown className="text-[12px]" />
                    </div>
                    <p className="text-light-gray">
                      {user && `${user.email.slice(0, 5)}....@gmail.com`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardLayout;