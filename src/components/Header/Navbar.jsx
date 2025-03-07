import React, { useState, useEffect } from "react";
import { MenuIcon, CloseIcon } from "./Icons.jsx";

const NAV_LINKS = ["Careers", "Company", "Contact"];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Close sidebar when screen resizes to md breakpoint (>=768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false); // Force close sidebar
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-2xl py-3 md:px-[10rem] fixed w-screen top-0">
      {/* Sidebar */}
      <ul
        className={`fixed top-0 right-0 h-screen w-[300px] z-[999] bg-white/20 backdrop-blur-md shadow-2xl flex flex-col items-start justify-start 
           transition-transform duration-300 ease-in-out ${
             isSidebarOpen ? "block" : "hidden"
           }`}
      >
        <li className="h-[50px] relative">
          <button
            onClick={toggleSidebar}
            className="flex h-full px-8 no-underline items-center hover:bg-gray-100 mt-4"
          >
            <CloseIcon />
          </button>
        </li>
        {NAV_LINKS.map((link) => (
          <li key={link} className="h-[50px]">
            <a
              href="#"
              className="flex h-full px-8 no-underline items-center hover:bg-gray-100"
              onClick={toggleSidebar}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Main Navigation */}
      <ul className="w-full list-none flex justify-end items-center mx-1">
        <li className="nav-item h-[50px]">
          <a
            href="#"
            className="h-full px-8 flex flex-col justify-center items-center"
          >
            <span className="text-xl tracking-wide font-bold uppercase">
              De
              <span className="bg-linear-to-r from-[#0d0c0c] to-[#ea1f1f] bg-clip-text text-transparent">
                v
              </span>
              soft
            </span>{" "}
            <span className="text-xs tracking-widest uppercase">
              Philippines
            </span>
          </a>
        </li>
        {NAV_LINKS.map((link) => (
          <li key={link} className="h-[50px]">
            <a
              href="#"
              className="hidden md:flex md:h-full md:px-8 no-underline md:items-center hover:bg-gray-100"
            >
              {link}
            </a>
          </li>
        ))}
        <li className="h-[50px]">
          <button
            onClick={toggleSidebar}
            className="md:hidden flex h-full px-8 no-underline items-center hover:bg-gray-100"
          >
            <MenuIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
}
