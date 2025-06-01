import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPaintBrush,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { id: "section0", icon: faBriefcase, text: "Experience" },
    { id: "section1", icon: faPaintBrush, text: "Education" },
    { id: "section2", icon: faTools, text: "Skills" },
    { id: "section3", icon: faUser, text: "Specialties" },
    { id: "section4", icon: faUser, text: "About" },
  ];

  const handleClick = (id, index) => {
    setActiveIndex(index); // 立即设置高亮状态

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const yOffset = -180; // 根据 header 的固定高度调整
      const yPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-180px 0px -70% 0px", // Adjust to account for header and pre-trigger
      threshold: 0.1, // At least 10% of section visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleSectionId = entry.target.id;
          const index = navItems.findIndex(
            (item) => item.id === visibleSectionId
          );
          if (index !== -1) setActiveIndex(index);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect(); // Cleanup observer
    };
  }, [navItems]);

  return (
    <div className="w-full bg-gray-100 relative">
      {/* Moving background indicator */}
      <div
        className="absolute  w-11/12 h-10 bg-whitish rounded-lg transition-transform duration-100"
        style={{
          transform: `translateY(calc(${activeIndex} * 3rem))`, // Dynamically calculate position
        }}
      >
        <div className="absolute left-0 w-1 h-full bg-canary-300 rounded"></div>
      </div>

      {/* Navigation menu */}
      <ul className="relative space-y-4">
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className={`group relative flex items-center space-x-4 px-4 py-1 cursor-pointer transition-all duration-100 ${
              activeIndex === index ? "text-klein-600" : "text-stack-400"
            } hover:text-klein-900`}
            onClick={() => handleClick(item.id, index)}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={`text-lg ${
                activeIndex === index ? "text-klein-600" : "text-stack-400"
              } group-hover:text-klein-900`}
            />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
