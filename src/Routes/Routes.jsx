import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: '/login',
    element: <Login></Login>
  }
]);
