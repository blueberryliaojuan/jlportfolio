import React, { useState } from "react";
import Header from "@/components/layout/Header";
import "./index.css";
import { BannerSlider } from "@/components/common/BannerSlider";
import Tab from "@/components/common/Tab";

const ProjectShowcase = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  // 更新鼠标位置
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setButtonPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className=" bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />
      <main className="flex flex-col flex-1 bg-gray-100">
        {/* Tab Section */}
        <div className="flex justify-end">
          <Tab className="mb-4 mr-4" />
        </div>

        {/* Content Section */}

        <div className="flex flex-1 flex-wrap items-center justify-between gap-6">
          {/* Left Section */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-lime-400 rounded-full text-blue-800 font-bold text-xl">
                01
              </div>
              <h1 className="text-2xl font-bold text-blue-800">
                Front-End Project
              </h1>
            </div>

            {/* Tag Section */}
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "Vanilla JS", "AGILE"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border rounded-full text-sm text-blue-800 border-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-lime-400 text-blue-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-lime-500 focus:ring-4"
              >
                Live Demo →
              </a>
              <a
                href="#"
                className="bg-lime-400 text-blue-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-lime-500 focus:ring-4"
              >
                Github →
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="flex-2 flex flex-col items-center justify-center relative"
            onMouseMove={handleMouseMove}
          >
            <img
              src="https://via.placeholder.com/500"
              alt="Project Showcase"
              className="w-3/4 rounded-lg "
            />
            {/* 按钮：仅在 hover 时显示，并跟随鼠标 */}
            <button
              className="absolute bg-lime-400 px-4 py-2 rounded-full text-blue-800 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                top: `${buttonPosition.y}px`,
                left: `${buttonPosition.x}px`,
                transform: "translate(-50%, -50%)", // 居中
              }}
            >
              Click to Browse
            </button>

            {/* Navigation */}
            <div className="flex flex-2 justify-center items-center w-full mt-6 px-4">
              <button className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full text-gray-800 hover:bg-gray-400 cursor-pointer">
                ←
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-blue-700 text-white rounded-full hover:bg-blue-800 cursor-pointer">
                →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectShowcase;
