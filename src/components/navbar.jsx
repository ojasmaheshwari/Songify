import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router";
import styles from "./navbar.module.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        {
            name: "Home",
            href: "/",
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
                            <Link to={link.href} className="px-2">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className={`w-full ${
                    menuOpen ? "max-h-64" : "max-h-0"
                } bg-slate-800 transition-all duration-150 ease-in`}
            >
                <ul
                    className={`w-full bg-slate-800 flex flex-col items-center justify-center text-white
                    ${
                        menuOpen ? "" : "hidden"
                    } transition-all duration-150 ease-in`}
                >
                    {menuOpen
                        ? navLinks.map((link, idx) => (
                              <li
                                  className="w-full bg-slate-800 text-center hover:bg-slate-700 py-1 transition-all"
                                  key={idx}
                              >
                                  <Link
                                      to={link.href}
                                      className="block w-full h-full"
                                      onClick={() => setMenuOpen(false)}
                                  >
                                      {link.name}
                                  </Link>
                              </li>
                          ))
                        : ""}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
