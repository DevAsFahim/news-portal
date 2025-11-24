import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/images/logo-white.png";

const classes =
  "block rounded-md mb-1 px-5 py-2 text-white font-semibold hover:bg-[#091e50] active:bg-[#0539b4] transition-all duration-500";

const Sidebar = () => {
  return (
    <div className="bg-blue p-8">
      <Link to={"/admin"} className="block mb-10">
        <img className="max-w-[180px]" src={logo} alt="logo" />
      </Link>

      <div>
        <NavLink
          to="/admin/news"
          className={({ isActive }) =>
            `${classes} ${isActive ? "bg-[#091e50]" : ""}`
          }
        >
          All News
        </NavLink>
        <NavLink
          to="/admin/categories"
          className={({ isActive }) =>
            `${classes} ${isActive ? "bg-[#091e50]" : ""}`
          }
        >
          Categories
        </NavLink>
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `${classes} ${isActive ? "bg-[#091e50]" : ""}`
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/admin/create-user"
          className={({ isActive }) =>
            `${classes} ${isActive ? "bg-[#091e50]" : ""}`
          }
        >
          Create User
        </NavLink>
        <NavLink
          to="/admin/create-news"
          className={({ isActive }) =>
            `${classes} ${isActive ? "bg-[#091e50]" : ""}`
          }
        >
          Create News
        </NavLink>
        <NavLink
          to="/admin/update-news"
          className={({ isActive }) =>
            `${classes} ${isActive ? "bg-[#091e50]" : ""}`
          }
        >
          Update News
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
