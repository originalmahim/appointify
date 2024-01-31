import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "../components/Blog/BlogDetails";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import PricingPage from "../pages/PricingPage/PricingPage";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Inbox from "../pages/Dashboard/Inbox/Inbox";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: () => fetch("blogs.json"),
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // admin routes
      {
        path: "inbox",
        element: (
          <AdminRoute>
            <Inbox />
          </AdminRoute>
        ),
      },
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
