import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";
import { routes } from "./Routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./components/Chatbot/chatbot.css";
import "./index.css";
import AvailabilityProvider from "./Context/AvailabilityProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(

  <div className="font-body">

  <AuthProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        {/* avaiable slot page provider  */}
        <AvailabilityProvider>
        <RouterProvider router={routes} />
        </AvailabilityProvider>
        <Toaster />
      </QueryClientProvider>
    </HelmetProvider>
  </AuthProvider>

  </div>
);
