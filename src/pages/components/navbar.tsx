import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex bg-white sticky top-0 mx-20">
      <NavLink className="flex items-center w-max" to={"/"}>
        <img
          src="/assets/img/logo.svg"
          alt="logo"
          className="w-[120px] m-5"
        ></img>
      </NavLink>

      {/* Navbar Menu*/}
      <div className="flex items-center font-[550] text-[#414242] w-max text-[16px] m-auto h-full right-0 left-0">
        <ul>
          <li>
            <NavLink to="/" className={"m-[10px] hover:text-[#0ea5e9]"}>
              Features
            </NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink to="/" className={"m-[10px] hover:text-[#0ea5e9]"}>
              Pricing
            </NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink to="/" className={"m-[10px] hover:text-[#0ea5e9]"}>
              Blog
            </NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink to="/" className={"m-[10px] hover:text-[#0ea5e9]"}>
              Changelog
            </NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink to="/" className={"m-[10px] hover:text-[#0ea5e9]"}>
              Careers
            </NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink to="/" className={"m-[10px] hover:text-[#0ea5e9]"}>
              Support
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex items-center font-[600] justify-end m-[10px] ">
        <label className="text-[16px]">Log in</label>
      </div>
    </nav>
  );
};

export default Navbar;
