import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, credit, logout } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {user ? (
          <div className="flex gap-2 sm:gap-3 items-center">
            <button
              onClick={() => navigate("/buy")}
              className="flex gap-2 items-center bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full 
                hover:scale-105 transition-all duration-700"
            >
              <img className="w-5" src={assets.credit_star} alt="Credit Star" />
              <p className=" text-xs sm:text-sm font-medium text-gray-600 ">
                Credits Left : {credit}
              </p>
            </button>

            <p className="text-gray-600 max-sm:hidden pl-4">Hi, {user.name}</p>

            <div className="relative group">
              <img
                className="w-10 drop-shadow"
                src={assets.profile_icon}
                alt="User Profile"
              />
              <div className="absolute hidden group-hover:block text-black rounded pt-12 top-0 z-10 right-0">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li
                    onClick={logout}
                    className="py-1 px-2 cursor-pointer pr-10"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 sm:gap-5 items-center">
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              Pricing
            </p>
            <button
              className="rounded-full bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
