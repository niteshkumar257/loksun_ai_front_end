import React, { useState,useEffect } from 'react';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import {useNavigate} from "react-router-dom"

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  

  const logout = () => {
      setIsLogin(false);
      localStorage.removeItem('token');
      navigate('/login');
  };

  useEffect(() => {
      const token = localStorage.getItem('token');
      setIsLogin(!!token);
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="relative p-4 w-full bg-white text-white flex items-center justify-between">
      <div className="flex items-center justify-between w-full">
        <div className="mr-4 text-gray-dark">
          <Link to="https://octopi.health/">
          <img src="https://octopi.health/static/media/logo.6fac51ee1861351c1d9a.jpg" className='h-10 w-32 object-cover'/>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 ">
          <Link to="/home" className="p-2 text-gray-dark font-bold" >Home</Link>
          {/* <Link to="/profile" className="p-2 text-gray-dark font-bold">Profile</Link> */}
          {
            !isLogin &&  
          <Link to="/login" className="p-2 text-gray-dark font-bold">Login</Link>
          }
          {
            !isLogin && 
          <Link to="/register" className="p-2 text-gray-dark font-bold">Register</Link>
          }
            {
            isLogin && 
          <Link to="/login" className="p-2 text-gray-dark font-bold" onClick={logout}>Logout</Link>
          }
        </div>
      </div>
      <button
        onClick={toggleDrawer}
        className="bg-blue-700 p-2 rounded md:hidden"
      >
        <IoMdMenu className='text-gray-dark text-2xl font-bold'/>
      </button>
      <Drawer open={open} onClose={toggleDrawer} />
    </div>
  );
};

export default Header;
