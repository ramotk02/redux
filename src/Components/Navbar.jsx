import React from "react";
import Logo from "./assets/logo2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="h-[80px] bg-slate-700 flex justify-between px-5 items-center ">
      <img src={Logo} alt="pic" className="h-[70px] " />

      <div>
        <nav>
          <ul className="flex gap-10">
            <li className="px-4 py-2 cursor-pointer hover:bg-slate-600 text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-slate-600 text-white">
              <Link to="/services">Services</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-slate-600 text-white">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-slate-600 text-white">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
