import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md px-3 xl:px-0">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex justify-center items-center py-5">
          <img className="max-w-[180px]" src={logo} alt="logo" />
        </Link>

        <nav className="flex items-center justify-center gap-8">
          <Link
            className="text-lg font-bold hover:text-blue"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-lg font-bold hover:text-blue"
            to="/politics"
          >
            Politics
          </Link>
          <Link
            className="text-lg font-bold hover:text-blue"
            to="/sports"
          >
            Sports
          </Link>
          <Link
            className="text-lg font-bold hover:text-blue"
            to="/technology"
          >
            Technology
          </Link>
          <Link
            className="text-lg font-bold hover:text-blue"
            to="/media"
          >
            Media
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
