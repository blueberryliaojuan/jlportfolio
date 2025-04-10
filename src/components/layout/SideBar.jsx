import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPaintBrush,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ currentSection }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = (text, index) => {
    setActiveIndex(index);
    navigate(`/resume/${text.toLowerCase()}`); // 根据 text 导航到路径
  };

  const navItems = [
    { id: 0, icon: faBriefcase, text: "Experience" },
    { id: 1, icon: faPaintBrush, text: "Education" },
    { id: 2, icon: faTools, text: "Skills" },
    { id: 3, icon: faUser, text: "About" },
  ];

  return (
    <div className="w-1/6 bg-gray-100 p-8 py-16 relative">
      {/* 移动的背景和指示器 */}
      <div
        className="absolute left-4 w-11/12 h-12 bg-whitish rounded-lg transition-transform duration-300"
        style={{
          transform: `translateY(${activeIndex * 64}px)`, // 根据 activeIndex 改变位置
        }}
      >
        <div className="absolute left-0 w-1 h-full bg-canary-300 rounded"></div>
      </div>

      {/* 导航菜单 */}
      <ul className="relative space-y-4">
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className={`group relative flex items-center space-x-4 px-6 py-3 cursor-pointer transition-all duration-300 ${
              activeIndex === index ? "text-klein-600" : "text-stack-400"
            }  hover:text-klein-900`}
            onClick={() => handleClick(item.text, index)}
          >
            {/* 图标 */}
            <FontAwesomeIcon
              icon={item.icon}
              className={`text-lg  ${
                activeIndex === index ? "text-klein-600" : "text-stack-400"
              } group-hover:text-klein-900`}
            />
            {/* 文本 */}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
