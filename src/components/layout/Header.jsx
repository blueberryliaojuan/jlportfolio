import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // closes the mobile menu when a link is clicked.
  const closeMenu = () => setMenuOpen(false);

  // Determines the appropriate CSS class for a navigation link based on the current path.
  const getLinkClassName = (path) => {
    // Check if the path is the root "/" and if the current location is also the root.
    // This ensures the "Home" link is active only when the user is on the homepage.
    if (path === "/" && location.pathname === "/") {
      return "text-klein-900 bg-canary-300 px-4 py-2 rounded-md";
    }
    // Check if the path is not "/" and if the current location starts with the given path.
    // This ensures links like "Work" are active for both "/work" and its subpaths like "/work/InesPianoAcademy".
    if (path !== "/" && location.pathname.startsWith(path)) {
      return "text-klein-900 bg-canary-300 px-4 py-2 rounded-md";
    }
    // Default class for links that are not active.
    return "text-klein-900 hover:bg-canary-300 px-4 py-2 rounded-md";
  };

  return (
    <header className="fixed top-0 left-0  z-50 w-full p-12 bg-whitish  h-28 flex items-center">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-12" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-6">
          <Link to="/" className={getLinkClassName("/")}>
            Home
          </Link>
          <Link to="/profile" className={getLinkClassName("/profile")}>
            Profile
          </Link>
          <Link to="/work" className={getLinkClassName("/work")}>
            Work
          </Link>
        </nav>

        {/* Social and Contact Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/juan-liao-5711072b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-klein-900 hover:text-klein-600"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/blueberryliao/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-klein-900 hover:text-klein-600"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
          <a
            href="tel:6047249688"
            className="text-klein-900 hover:text-klein-600"
          >
            <FontAwesomeIcon icon={faPhone} className="text-xl" />
          </a>
          <a
            href="mailto:275538929@qq.com"
            className="text-klein-900 hover:text-klein-600"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden">
          <button
            className="p-2 text-klein-900 hover:text-klein-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="text-3xl w-8 h-8"
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-20 right-4 bg-white shadow-lg rounded-md w-48 z-50">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <Link
                  to="/"
                  className={getLinkClassName("/")}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/profile"
                  className={getLinkClassName("/profile")}
                  onClick={closeMenu}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className={getLinkClassName("/work")}
                  onClick={closeMenu}
                >
                  Work
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
