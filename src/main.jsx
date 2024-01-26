import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";
import { routes } from "./Routes/Routes";
import "./components/Chatbot/chatbot.css";
import "./index.css";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={routes} />
        <Toaster />
      </HelmetProvider>
    </QueryClientProvider>
  </AuthProvider>
);
