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
        <div className="p-6 h-[calc(100%-[60px])] md:h-[calc(100%-[70px])] xl:h-[calc(100%-[90px])] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
