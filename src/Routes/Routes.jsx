import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "signup",
    element: <SignUp />
  }
]);
