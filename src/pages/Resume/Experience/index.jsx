import React from "react";
import AnimatedTitle from "@/components/common/AnimatedTitle.jsx";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      date: "2020.09-2024.04",
      title: "Front-End Developer",
      company: "Wende Technology Co., Ltd.",
    },
    {
      id: 2,
      date: "2003.09-2010.02",
      title: "Marketing Manager of South America Market",
      company: "Xingraphics Ltd.",
    },
    {
      id: 3,
      date: "2001.09-2003.08",
      title: "Export Manager",
      company: "Bethel Shaft Collar Manufacturing Co., Ltd.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-12">
        {/* Title */}
        {/* <h1 className="text-2xl font-bold text-blue-900 mb-2">
          Work Experience
        </h1> */}
        <AnimatedTitle title="Work Experience" />

        {/* <div className="h-1 w-16 bg-canary-300 mb-8"></div> */}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-whitish p-6 rounded-lg  hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-stack-400 text-sm mb-2">{experience.date}</p>
              <h3 className="text-lg font-bold text-klein-900 mb-1">
                {experience.title}
              </h3>
              <p className="text-klein-900">{experience.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
