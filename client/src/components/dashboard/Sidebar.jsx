import React from "react";
import { Link } from "react-router";
import logo from "../../assets/images/logo-white.png";

const Sidebar = () => {
  return (
    <div className="bg-blue p-8">
      <Link to={"/admin"} className="block mb-10">
        <img className="max-w-[180px]" src={logo} alt="logo" />
      </Link>

      <div>
        <Link to="/admin" className="block rounded-md mb-1 px-5 py-2 text-white font-semibold bg-[#091e50] active:bg-[#0539b4] transition-all">
          All News
        </Link>
        <Link to="/admin" className="block rounded-md mb-1 px-5 py-2 text-white font-semibold hover:bg-[#091e50] active:bg-[#0539b4] transition-all">
          Create News
        </Link>
        <Link to="/admin" className="block rounded-md mb-1 px-5 py-2 text-white font-semibold hover:bg-[#091e50] active:bg-[#0539b4] transition-all">
          Update News
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
