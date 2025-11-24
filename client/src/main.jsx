import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import router from "./routes/routes.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);
