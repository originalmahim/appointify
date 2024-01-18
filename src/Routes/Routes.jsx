import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "signup",
    element: <SignUp />
  }
]);
