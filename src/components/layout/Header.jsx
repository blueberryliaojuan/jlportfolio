import { Link, useLocation } from "react-router-dom"; // for internal routing with React Router
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";

// Import Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // 获取当前路径

  // Handle menu state when it's toggled
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  // 根据当前路径set active
  const getLinkClassName = (path) => {
    // console.log("location.pathname", location.pathname);
    // console.log("path", path);

    // 判断路径是否以指定路径开头（用于其他链接）
    if (path !== "/" && location.pathname.startsWith(path)) {
      console.log("Other pages");
      console.log("location.pathname", location.pathname);
      console.log("path", path);
      return "hover:bg-canary-300 text-klein-900 p-2 rounded-md bg-canary-300";
    }
    //默认返回正常样式
    return "hover:bg-canary-300 text-klein-900 p-2 rounded-md";
  };

  return (
    <header className="p-4 flex items-center bg-whitish h-20 lg:h-32">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src="/logo.png" alt="" className="h-12" />
          </Link>
        </div>

        {/* Navigation Links */}
        {/* when screen is smaller than small（640px）, it will be hidden  */}
        <nav className="space-x-6 hidden sm:flex ">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "header-item-active"
                : "header-item-default"
            }
          >
            Home
          </Link>
          <Link
            to="/service"
            className={
              location.pathname === "/service"
                ? "header-item-active"
                : "header-item-default"
            }
          >
            Service
          </Link>
          <Link
            to="/resume/experience"
            className={
              location.pathname.startsWith("/resume")
                ? "header-item-active"
                : "header-item-default"
            }
          >
            Resume
          </Link>
          <Link
            to="/work"
            className={
              location.pathname.startsWith("/work")
                ? "header-item-active"
                : "header-item-default"
            }
          >
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
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/blueberryliao/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-klein-900 hover:text-klein-600"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
          </a>
          <a
            href="tel:6047249688"
            className="text-klein-900 hover:text-klein-600"
          >
            <FontAwesomeIcon icon={faPhone} className="text-2xl" />
          </a>
          <a
            href="mailto:275538929@qq.com"
            className="text-klein-900 hover:text-klein-600"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        {/* when screen is bigger than sm（640px）, it will be hidden  */}
        <div className="sm:hidden w-8 h-8">
          <Menu
            right
            isOpen={menuOpen}
            onStateChange={handleStateChange}
            width={"auto"}
            customBurgerIcon={
              <FontAwesomeIcon
                icon={faBars} // Use FontAwesomeIcon component for the hamburger icon
                className="text-klein-900 w-8 h-8"
              />
            }
            styles={{
              // Adjust the menu styling
              bmMenuWrap: {
                position: "fixed",
                top: 0,
                right: 0,
                zIndex: 40,
              },
              bmMenu: {
                background: "#FEFEFE",
                padding: "2.5em 1.5em 0",
                fontSize: "1.15em",
                maxHeight: "30vh", // Set the maximum height of the menu (30% of the viewport height)
                overflowY: "auto", // Enable scrolling if content exceeds max height
              },
              bmOverlay: {
                background: "transparent",
                display: "none",
              },
              bmItemList: {
                padding: "0.8em",
              },
              bmItem: {
                display: "block",
                textAlign: "left",
                padding: "10px",
              },
            }}
          >
            <Link to="/" className={getLinkClassName("/")}>
              Home
            </Link>
            <Link to="/service" className={getLinkClassName("/service")}>
              Service
            </Link>
            <Link
              to="/resume/experience"
              className={getLinkClassName("/resume")}
            >
              Resume
            </Link>
            <Link to="/work" className={getLinkClassName("/work")}>
              Work
            </Link>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
