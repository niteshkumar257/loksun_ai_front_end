import React from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Drawer = ({ open, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-blue transition-transform duration-300 z-50 ${
        open ? "transform translate-x-0" : "transform -translate-x-full"
      } md:w-1/3 lg:w-1/4 xl:w-1/5`}
    >
      <button className="absolute top-2 right-2 text-2xl" onClick={onClose}>
        &times;
      </button>
      <nav className="p-4">
        <ul>
          <li className="mb-2">
            <Link to="/home" className="text-gray-light font-bold" onClick={onClose}>
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/profile" className="text-gray-light font-bold" onClick={onClose}>
              Profile
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/login" className="text-gray-light font-bold" onClick={onClose}>
              Login
            </Link>
          </li>

          <li className="mb-2">
            <Link to="/register" className="text-gray-light font-bold" onClick={onClose}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Drawer;
