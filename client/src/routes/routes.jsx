import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import SingleNews from "../pages/SingleNews.jsx";
import Login from "../pages/Login.jsx";
import DashboardMain from "../pages/dashboard/Main.jsx";
import Dashboard from "../pages/dashboard/admin/Dashboard.jsx";
import Register from "../pages/register.jsx";
import Users from "../pages/dashboard/admin/Users.jsx";
import CreateUser from "../pages/dashboard/admin/CreateUser.jsx";
import UpdateUser from "../pages/dashboard/admin/UpdateUser.jsx";

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
      {index: true, Component: Dashboard},
      {
        path: "users",
        Component: Users
      },
      {
        path: "create-user",
        Component: CreateUser
      },
      {
        path: "user/:userId",
        Component: UpdateUser
      },
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