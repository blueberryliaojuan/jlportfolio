import React from "react";
import AnimatedTitle from "@/components/common/AnimatedTitle.jsx";

const Experience = () => {
  const experiences = [
    {
      id: 0,
      date: "2025.03-now",
      title: "Peer Tutor",
      company: "BCIT",
      link: "https://www.bcit.ca/",
      intro:
        "Assisting students in web development courses with hands-on support and guidance.",
    },
    {
      id: 1,
      date: "2020.09-2024.04",
      title: "Front-End Developer",
      company: "Wende Technology Co., Ltd.",
      link: "http://www.wendcn.com/",
    },
    {
      id: 2,
      date: "2003.09-2010.02",
      title: "Marketing Manager of South America Market",
      company: "Xingraphics Ltd.",
      link: "https://www.xingraphics.com/index_en.html",
    },
    {
      id: 3,
      date: "2001.09-2003.08",
      title: "Export Manager",
      company: "Bethel Shaft Collar Manufacturing Co., Ltd.",
      link: "http://www.btl.cn/en/",
    },
  ];

  return (
    <div className="bg-gray-100 mt-24 mb-24">
      <div className="container mx-auto">
        <AnimatedTitle title="Experience" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {experiences.map((experience) => (
            <div key={experience.id} className="bg-whitish p-6 rounded-lg">
              <p className="text-stack-400 text-sm mb-2">{experience.date}</p>
              <h3 className="text-lg font-bold text-klein-900 mb-1">
                {experience.title}
              </h3>
              <p className="text-klein-600">
                <a
                  href={experience.link}
                  target="_blank"
                  rel={experience.company}
                  className="hover:underline"
                >
                  {experience.company}
                </a>
              </p>
              <p className="text-sm mt-1">{experience.intro}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
