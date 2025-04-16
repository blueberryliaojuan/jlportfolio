import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TabSlider = ({ tabs, paths, initialActiveTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [sliderStyle, setSliderStyle] = useState({});
  const tabsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    updateSliderStyle(activeTab);
  }, [activeTab]);

  useEffect(() => {
    setActiveTab(initialActiveTab);
  }, [initialActiveTab]);

  const updateSliderStyle = (index) => {
    if (tabsRef.current[index]) {
      const tabElement = tabsRef.current[index];
      setSliderStyle({
        width: `${tabElement.offsetWidth}px`,
        transform: `translateX(${tabElement.offsetLeft}px)`,
      });
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    navigate(paths[index]); // 跳转到对应路径
  };

  return (
    <div className="relative bg-gray-100 py-8 md:p-8 flex items-center justify-center">
      <div className="relative flex bg-white rounded-full overflow-hidden">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`relative z-10 px-4 py-2 md:font-semibold text-sm transition-all duration-300 cursor-pointer ${
              activeTab === index
                ? "text-canary-300"
                : "text-klein-900 hover:text-klein-600"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}

        <div
          className="absolute top-0 bottom-0 h-full bg-klein-900 rounded-full transition-all duration-300"
          style={sliderStyle}
        ></div>
      </div>
    </div>
  );
};

export default TabSlider;
