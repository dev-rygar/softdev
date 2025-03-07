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
    <nav className="fixed top-0 w-screen bg-white py-3 shadow-2xl md:px-[10rem]">
      {/* Sidebar */}
      <ul
        className={`fixed top-0 right-0 z-[999] flex h-screen w-[300px] flex-col items-start justify-start bg-white/20 shadow-2xl backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <li className="relative h-[50px]">
          <button
            onClick={toggleSidebar}
            className="mt-4 flex h-full items-center px-8 no-underline hover:bg-gray-100"
          >
            <CloseIcon />
          </button>
        </li>
        {NAV_LINKS.map((link) => (
          <li key={link} className="h-[50px]">
            <a
              href="#"
              className="flex h-full items-center px-8 no-underline hover:bg-gray-100"
              onClick={toggleSidebar}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Main Navigation */}
      <ul className="mx-1 flex w-full list-none items-center justify-end">
        <li className="nav-item h-[50px]">
          <a
            href="#"
            className="flex h-full flex-col items-center justify-center px-8"
          >
            <span className="text-xl font-bold tracking-wide uppercase">
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
              className="hidden font-bold text-gray-800 no-underline hover:bg-gray-100 md:flex md:h-full md:items-center md:px-8"
            >
              {link}
            </a>
          </li>
        ))}
        <li className="h-[50px]">
          <button
            onClick={toggleSidebar}
            className="flex h-full items-center px-8 no-underline hover:bg-gray-100 md:hidden"
          >
            <MenuIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
}
