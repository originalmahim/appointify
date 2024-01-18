import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
