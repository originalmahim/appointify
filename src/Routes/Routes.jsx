import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Pricing from "../pages/Pricing/Pricing";
import SignUp from "../pages/SignUp/SignUp";
import BlogDetails from "../components/Blog/BlogDetails";
import BlogPage from "../pages/Blog/BlogPage";

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
        path: '/blogs',
        element: <BlogPage></BlogPage>
      },
      {
        path: '/blog/:id',
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch('blogs.json')
      }
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
