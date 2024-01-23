import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import BlogPage from "../pages/Blog/BlogPage";
import BlogDetails from "../components/Blog/BlogDetails";

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
