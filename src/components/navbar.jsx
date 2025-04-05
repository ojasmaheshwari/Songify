import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    {
      name: "Home",
      href: "/home",
    },
    {
      name: "Your Playlist",
      href: "/playlist",
    },
    {
      name: "Top Songs",
      href: "/top",
    },
  ];

  return (
    <>
      <div className="flex flex-row bg-slate-900 w-full h-14 items-center px-2 justify-between">
        <h1 className="text-white text-xl font-semibold">Songify</h1>
        <CiMenuBurger
          color="white"
          size={28}
          className="lg:hidden md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className="hidden md:flex lg:flex flex-row text-white">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} className="px-2">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`w-full ${
          menuOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        } transition duration-150 ease-linear`}
      >
        <ul
          className={`w-full bg-slate-800 flex flex-col items-center justify-center text-white $${
            menuOpen ? "" : "hidden"
          }`}
        >
          {navLinks.map((link, idx) => (
            <li
              className="w-full bg-slate-800 text-center hover:bg-slate-700 py-1 transition-all"
              key={idx}
            >
              <a href={link.href} className="block w-full h-full">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
