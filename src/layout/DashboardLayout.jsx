import { Link, NavLink, Outlet } from "react-router-dom";
import Container from "../components/Container/Container";
import { IoMdCart } from "react-icons/io";
import { FaBook, FaCalendarAlt, FaListUl } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BiSolidWalletAlt, BiSolidContact } from "react-icons/bi";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { IoBookmarksSharp } from "react-icons/io5";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";
import { MdAddTask } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const DashboardLayout = () => {
  const [isAdmin] = useState(false);
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    const toastId = toast.loading("Logging Out...");
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully.", { id: toastId });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong!", { id: toastId });
      });
  };

  return (
    <section>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content min-h-screen">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden flex justify-end mr-4 mt-2"
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
          <div className="mt-8 lg:mt-12 mb-20">
            <Container>
              <Outlet />
            </Container>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* sidebar content here */}
          <div className="w-72 min-h-screen bg-cardBG py-12">
            <p className="text-2xl font-play font-black uppercase ml-6">
              Appointify
            </p>
            <p className="text-xl font-play font-medium uppercase tracking-[3px] ml-6">
              Schedule Now
            </p>
            <ul className="menu mt-16 space-y-2">
              {isAdmin ? (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/admin-home"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white md:text-lg font-semibold uppercase"
                          : "md:text-lg font-medium uppercase"
                      }
                    >
                      <AiFillHome />
                      Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/add-event"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white md:text-lg font-semibold uppercase"
                          : "md:text-lg font-medium uppercase"
                      }
                    >
                      <MdAddTask />
                      Add Event
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-event"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white md:text-lg font-semibold uppercase"
                          : "md:text-lg font-medium uppercase"
                      }
                    >
                      <FaListUl />
                      Manage Event
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-message"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white md:text-lg font-semibold uppercase"
                          : "md:text-lg font-medium uppercase"
                      }
                    >
                      <FaBook />
                      Manage messages
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/users"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white md:text-lg font-semibold uppercase"
                          : "md:text-lg font-medium uppercase"
                      }
                    >
                      <PiUsersThreeFill />
                      All Users
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/user-home"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white md:text-lg font-semibold uppercase"
                          : "md:text-lg font-medium uppercase"
                      }
                    >
                      <AiFillHome />
                      User Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/make-reservation"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white md:text-lg font-semibold uppercase"
                          : "md:text-lg font-medium uppercase"
                      }
                    >
                      <FaCalendarAlt />
                      Reservation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/payment-history"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white md:text-lg font-semibold uppercase"
                          : "md:text-lg font-medium uppercase"
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
                          ? "text-white md:text-lg font-semibold uppercase"
                          : "md:text-lg font-medium uppercase"
                      }
                    >
                      <IoMdCart />
                      My Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/review"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white md:text-lg font-semibold uppercase"
                          : "md:text-lg font-medium uppercase"
                      }
                    >
                      <MdReviews />
                      Add Review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/bookings"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white md:text-lg font-semibold uppercase"
                          : "md:text-lg font-medium uppercase"
                      }
                    >
                      <TbBrandBooking />
                      My Booking
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <div className="divider px-5"></div>
            <ul className="menu space-y-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white md:text-lg font-semibold uppercase"
                      : "md:text-lg font-medium uppercase"
                  }
                >
                  <AiFillHome />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white md:text-lg font-semibold uppercase"
                      : "md:text-lg font-medium uppercase"
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
                      ? "text-white md:text-lg font-semibold uppercase"
                      : "md:text-lg font-medium uppercase"
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
                      ? "text-white md:text-lg font-semibold uppercase"
                      : "md:text-lg font-medium uppercase"
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
                      ? "text-white md:text-lg font-semibold uppercase"
                      : "md:text-lg font-medium uppercase"
                  }
                >
                  <IoInformationCircleSharp />
                  About Us
                </NavLink>
              </li>
              <li>
                <Link
                  onClick={handleLogout}
                  className="md:text-lg font-medium uppercase"
                >
                  <FiLogOut />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
