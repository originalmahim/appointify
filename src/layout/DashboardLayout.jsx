import toast from "react-hot-toast";
import { AiFillHome } from "react-icons/ai";
import { FaCalendarAlt, FaListUl } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdAddTask, MdReviews } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { TbBrandBooking, TbMessage } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router-dom";
import Container from "../components/Container/Container";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const { logOut } = useAuth();

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
          <div className="drawer-content bg-gray-50 min-h-screen">
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
            <div className="mt-8 lg:mt-14 mb-20">
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
            <div className="w-64 min-h-screen bg-cardBG py-10 lg:py-12">
              <p className="text-2xl font-play font-black uppercase ml-6">
                Appointify
              </p>
              <p className="text-lg font-medium uppercase tracking-[3px] ml-6">
                Schedule Now
              </p>
              <ul className="menu mt-16">
                {isAdmin ? (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/admin-home"
                        className={({ isActive }) =>
                          isActive
                            ? "text-special md:text-lg font-semibold uppercase"
                            : "md:text-lg font-medium uppercase"
                        }
                      >
                        <AiFillHome />
                        Admin Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/add-blog"
                        className={({ isActive }) =>
                          isActive
                            ? "text-special md:text-lg font-semibold uppercase"
                            : "md:text-lg font-medium uppercase"
                        }
                      >
                        <MdAddTask />
                        Add Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/manage-blog"
                        className={({ isActive }) =>
                          isActive
                            ? "text-special md:text-lg font-semibold uppercase"
                            : "md:text-lg font-medium uppercase"
                        }
                      >
                        <FaListUl />
                        Manage Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/inbox"
                        className={({ isActive }) =>
                          isActive
                            ? "text-special md:text-lg font-semibold uppercase"
                            : "md:text-lg font-medium uppercase"
                        }
                      >
                        <TbMessage />
                        Inbox
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/users"
                        className={({ isActive }) =>
                          isActive
                            ? "text-special md:text-lg font-semibold uppercase"
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
                            ? "text-special md:text-lg font-semibold uppercase"
                            : "md:text-lg font-medium uppercase"
                        }
                      >
                        <AiFillHome />
                        User Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/manage-booking"
                        className={({ isActive }) =>
                          isActive
                            ? "text-special md:text-lg font-semibold uppercase"
                            : "md:text-lg font-medium uppercase"
                        }
                      >
                        <FaCalendarAlt />
                        Manage Booking
                      </NavLink>
                    </li>

                    {/* <li>
                      <NavLink
                        to="/dashboard/payment-history"
                        className={({ isActive }) =>
                          isActive
                            ? "text-special md:text-lg font-semibold uppercase"
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
                            ? "text-special md:text-lg font-semibold uppercase"
                            : "md:text-lg font-medium uppercase"
                        }
                      >
                        <IoMdCart />
                        My Cart
                      </NavLink>
                    </li> */}

                    <li>
                      <NavLink
                        to="/dashboard/bookings"
                        className={({ isActive }) =>
                          isActive
                            ? "text-special md:text-lg font-semibold uppercase"
                            : "md:text-lg font-medium uppercase"
                        }
                      >
                        <TbBrandBooking />
                        My Bookings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/add-review"
                        className={({ isActive }) =>
                          isActive
                            ? "text-special md:text-lg font-semibold uppercase"
                            : "md:text-lg font-medium uppercase"
                        }
                      >
                        <MdReviews />
                        Add Review
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
              <div className="divider px-5"></div>
              <ul className="menu">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-special md:text-lg font-semibold uppercase"
                        : "md:text-lg font-medium uppercase"
                    }
                  >
                    <AiFillHome />
                    Home
                  </NavLink>
                </li>
                {/* <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-special md:text-lg font-semibold uppercase"
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
                      ? "text-special md:text-lg font-semibold uppercase"
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
                      ? "text-special md:text-lg font-semibold uppercase"
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
                      ? "text-special md:text-lg font-semibold uppercase"
                      : "md:text-lg font-medium uppercase"
                  }
                >
                  <IoInformationCircleSharp />
                  About Us
                </NavLink>
              </li> */}
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
    </>
  );
};

export default DashboardLayout;
