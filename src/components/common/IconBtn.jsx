import React from "react";

const IconButton = ({ icon, text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 h-12 w-full text-left cursor-pointer transition-colors duration-300 ${
        isActive
          ? "text-klein-900 font-semibold"
          : "text-gray-500 hover:text-klein-600 hover:font-semibold"
      }`}
    >
      <i
        className={`${icon} mr-3 ${
          isActive ? "text-klein-900" : "text-stack-400"
        }`}
      />
      <span>{text}</span>
    </button>
  );
};

export default IconButton;
