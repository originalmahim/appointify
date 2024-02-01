import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "../../assets/images/logo.png";
import useUserData from "../../hooks/useUserData";
import Container from "../Container/Container";

const NavBar = () => {
  const { logOut } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userDB] = useUserData();
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    const toastId = toast.loading("Logging Out...", {
      style: {
        borderRadius: "8px",
        background: "#333",
        color: "#fff",
      },
    });
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
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-lg font-semibold"
              : "text-sm md:text-base lg:text-lg font-medium"
          }
        >
          Blogs
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
    <div className="fixed z-50 w-screen">
      <nav
        className={`${
          isScrolled ? "bg-gray-50 transition duration-1000" : "bg-cardBG"
        }`}
      >
        <Container>
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} className="mr-5 p-1 lg:hidden">
                  <HiOutlineMenuAlt1 className="scale-[1.2] md:scale-150"></HiOutlineMenuAlt1>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-4 z-[1] p-2 drop-shadow-lg bg-base-100 rounded-box w-36"
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
              {userDB?.email ? (
                // dropdown icon
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar 2xl:mr-3"
                  >
                    <div className="w-10 md:w-14 lg:w-16 rounded-full">
                      {userDB?.photo ? (
                        <img
                          className="text-[10px]"
                          src={userDB?.photo}
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
                        <p className="pointer-events-none">{userDB?.name}</p>
                      </li>
                      <li>
                        <p className="pointer-events-none">{userDB?.email}</p>
                      </li>
                      {userDB?.role === "admin" && (
                        <li>
                          <Link to="/dashboard/admin-home">Dashboard</Link>
                        </li>
                      )}
                      {userDB?.role === "user" && (
                        <li>
                          <Link to="/dashboard/user-home">Dashboard</Link>
                        </li>
                      )}
                      <li>
                        <button onClick={handleLogout}>Logout</button>
                      </li>
                    </>
                  </ul>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="btn-ghost md:text-lg font-medium px-3 py-1.5 rounded-lg 2xl:mr-1"
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
