// import React from "react";
import { Link } from "react-router-dom"; // for internal routing with React Router
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      className="p-4 shadow-md flex items-center"
      style={{
        backgroundColor: "var(--primary-color)",
        color: "var(--secondary-color)",
      }}
    >
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img
              src="public/assets/images/logo.png"
              alt="Bloomie Logo"
              className="h-full"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        {/* when screen is smaller than large（1024px）, it will be hidden  */}
        <nav className="space-x-6 hidden lg:flex">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/service" className="hover:text-white">
            Service
          </Link>
          <Link to="/resume" className="hover:text-gray-300">
            Resume
          </Link>
          <Link to="/work" className="hover:text-gray-300">
            Work
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        {/* when screen is bigger than large（1024px）, it will be hidden  */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => {
              setMenuOpen(!menuOpen);
              console.log("Menu Open:", menuOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#f7d9d9"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {/* <div className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}> */}
      {/* <div
        className={`lg:hidden ${
          menuOpen ? "block" : "hidden"
        } fixed top-0 right-0  bg-[var(--secondary-color)] transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <nav
          className="space-y-4 px-4 py-2 "
          style={{ backgroundColor: "var(--secondary-color)" }}
        >
          <Link
            to="/"
            style={{ color: "var(--primary-color)" }}
            className="block text-white hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            style={{ color: "var(--primary-color)" }}
            className="block text-white hover:text-gray-300"
          >
            Shop
          </Link>
          <Link
            to="/Seasonal"
            className="block text-white hover:text-gray-300"
            style={{ color: "var(--primary-color)" }}
          >
            Seasonal
          </Link>
          <Link
            to="/Occasion"
            className="block text-white hover:text-gray-300"
            style={{ color: "var(--primary-color)" }}
          >
            Occasion
          </Link>
          <Link
            to="/About"
            className="block text-white hover:text-gray-300"
            style={{ color: "var(--primary-color)" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-gray-300"
            style={{ color: "var(--primary-color)" }}
          >
            Contact
          </Link>
        </nav>
      </div> */}
    </header>
  );
};

export default Header;
