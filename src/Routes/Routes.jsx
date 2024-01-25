import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Pricing from "../pages/PricingPage/Pricing";
import SignUp from "../pages/SignUp/SignUp";
import BlogDetails from "../components/Blog/BlogDetails";
import Contact from "../pages/Contact/Contact";
import BlogPage from "../pages/BlogPage/BlogPage";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";

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
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/blogs",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch("blogs.json"),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: () => fetch("blogs.json"),
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
