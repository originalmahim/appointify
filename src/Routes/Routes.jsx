import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
  },
]);
