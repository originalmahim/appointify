import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Container from "../Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

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

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-lg font-semibold"
              : "text-sm md:text-base lg:text-lg font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/resources"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-lg font-semibold"
              : "text-sm md:text-base lg:text-lg font-medium"
          }
        >
          Resources
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-lg font-semibold"
              : "text-sm md:text-base lg:text-lg font-medium"
          }
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-lg font-semibold"
              : "text-sm md:text-base lg:text-lg font-medium"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-lg font-semibold"
              : "text-sm md:text-base lg:text-lg font-medium"
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed z-10 w-screen">
      <nav className="bg-gray-50">
        <Container>
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 30 24"
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
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-4 z-[1] p-2 drop-shadow-lg bg-base-100 rounded-box w-max"
                >
                  {links}
                </ul>
              </div>
              {/* logo & name */}
              <div className="flex justify-center items-center gap-2 md:gap-4">
                <img
                  className="w-8 md:w-10 lg:w-12 xl:w-14 2xl:16"
                  src={logo}
                  alt="logo-img"
                />
                <Link
                  to="/"
                  className="text-head text-2xl md:text-3xl xl:text-4xl font-play font-bold italic"
                >
                  Appointify
                </Link>
              </div>
            </div>
            {/* <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div> */}
            <div className="navbar-end">
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">{links}</ul>
              </div>
              {user?.email ? (
                // dropdown icon
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 md:w-14 lg:w-16 rounded-full">
                      {user?.photoURL ? (
                        <img
                          className="text-[10px]"
                          src={user?.photoURL}
                          alt="img-error"
                        />
                      ) : (
                        <img
                          className="text-[10px]"
                          src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                          alt="default"
                        />
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content mt-4 z-[1] p-2 drop-shadow-lg bg-base-100 rounded-box w-max"
                  >
                    <>
                      <li>
                        <p className="pointer-events-none">
                          {user?.displayName}
                        </p>
                      </li>
                      <li>
                        <p className="pointer-events-none">{user?.email}</p>
                      </li>
                      <li>
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <button onClick={handleLogout}>Logout</button>
                      </li>
                    </>
                  </ul>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="btn-ghost md:text-lg px-3 py-1.5 rounded-lg"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default NavBar;
