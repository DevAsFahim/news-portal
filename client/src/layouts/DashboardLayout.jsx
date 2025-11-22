import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
      <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
