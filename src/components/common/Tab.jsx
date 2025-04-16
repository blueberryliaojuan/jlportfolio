import React, { useState, useRef, useEffect } from "react";

const tabs = ["All", "Software Development", "UI/UX Design & Others"];

const TabSlider = ({ initialActiveTab = 0, onTabChange }) => {
  // ✅ 正确解构 props
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [sliderStyle, setSliderStyle] = useState({});
  const tabsRef = useRef([]);

  // 当 activeTab 变化时，更新滑动条样式
  useEffect(() => {
    updateSliderStyle(activeTab);
  }, [activeTab]);

  // ✅ 监听外部传入的 initialActiveTab 变化，确保同步
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
    if (onTabChange) {
      onTabChange(index); // ✅ 通知父组件当前选中的 Tab
    }
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
                : "text-klein-900 hover:text-klein-600 "
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}

        {/* 动态滑动条 */}
        <div
          className="absolute top-0 bottom-0 h-full bg-klein-900 rounded-full transition-all duration-300"
          style={sliderStyle}
        ></div>
      </div>
    </div>
  );
};

export default TabSlider;
