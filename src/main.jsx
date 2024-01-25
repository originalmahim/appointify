import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";
import { routes } from "./Routes/Routes";
import "./components/Chatbot/chatbot.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={routes} />
      <Toaster />
    </HelmetProvider>
  </AuthProvider>
);
