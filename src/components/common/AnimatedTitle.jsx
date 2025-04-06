import React, { useEffect, useRef, useState } from "react";

const AnimatedTitle = ({ title }) => {
  const [lineWidth, setLineWidth] = useState(0); // 动态下划线宽度
  const titleRef = useRef(null); // 引用标题元素

  useEffect(() => {
    if (titleRef.current) {
      const textWidth = titleRef.current.getBoundingClientRect().width; // 获取标题文字的实际宽度
      setTimeout(() => setLineWidth(textWidth * 0.7), 100); // 动态设置下划线宽度为文字宽度的 70%
    }
  }, []);

  return (
    <div className="w-full text-left relative">
      {/* 标题 */}
      <h1
        className="heading2 mb-2 relative inline-block text-klein-900"
        ref={titleRef} // 引用标题文字
      >
        {title}
      </h1>
      {/* 动态下划线 */}
      <div
        className="absolute bottom-0 left-0 h-[4px] bg-canary-300 transition-all duration-1000 ease-out"
        style={{ width: `${lineWidth}px` }} // 动态设置宽度
      ></div>
    </div>
  );
};

export default AnimatedTitle;
