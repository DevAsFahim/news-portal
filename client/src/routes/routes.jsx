import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import SingleNews from "../pages/SingleNews.jsx";
import Login from "../pages/Login.jsx";
import DashboardMain from "../pages/dashboard/Main.jsx";
import Dashboard from "../pages/dashboard/admin/Dashboard.jsx";
import Register from "../pages/register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "/single-news", Component: SingleNews },
    ],
  },
  {
    path: "/admin",
    Component: DashboardMain,
    children: [
      {index: true, Component: Dashboard}
    ]
  },

  {
    path: "/login",
    Component: Login
  },
  {
    path: "/register",
    Component: Register
  }
]);

export default router