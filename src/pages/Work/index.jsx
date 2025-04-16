import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";

import Tab from "@/components/common/Tab";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

//all the projects I have
const allData = [
  {
    id: "project03",
    name: "Ines Piano Academy",
    category: "Software Development",
    tabIndex: 1,
    scope: "Front-End Project and Marketing",
    skills: [
      "HTML",
      "CSS",
      "JS",
      "Tailwind",
      "JS Plugin",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
    description:
      "A web application for a piano academy that allows users to browse courses and instructors. It includes a user-friendly interface and a responsive design.",
    demo: "https://inesacademy.juanliao.net/",
    github: "https://github.com/blueberryliaojuan/INES",
    detailPage: "/work/InesPianoAcademy",
    image: "/img/ines/InesMockup00.jpg",
  },
  {
    id: "project01",
    name: "Sufficient Grounds Coffee Shop",
    category: "Software Development",
    tabIndex: 1,
    scope: "Front-End Project",
    skills: ["HTML", "CSS", "Vanilla JS", "AGILE"],
    description:
      "A web application for a coffee shop that allows users to browse the menu and products. It includes a user-friendly interface and a responsive design.",
    demo: "https://sufficientgrounds.juanliao.net/",
    github: "https://github.com/blueberryliaojuan/SufficientGround-1",
    detailPage: "/work/SufficientGrounds",
    image: "/img/sufficientGrounds/sufficientGroundsMock00.jpg",
  },

  {
    id: "project02",
    name: "Dish Ordering System",
    category: "Software Development",
    tabIndex: 1,
    scope: "Front-End Project",
    skills: [
      "HTML",
      "CSS",
      "JS",
      "Bootstrap",
      "JS Plugin",
      "Adobe Illustrator",
    ],
    description:
      "A web application that allows users to order food online. It includes a user-friendly interface, a menu display, and a shopping cart feature.",
    demo: "https://juanskitchen.juanliao.net/",
    github: "https://github.com/blueberryliaojuan/Juan-s-Kitchen",
    detailPage: "/work/DishOrdering",
    image: "/img/dishOrder/orderSystemMock01.jpg",
  },

  {
    id: "project04",
    name: "VGBC",
    category: "UI/UX Design & Others",
    tabIndex: 2,
    scope: "UI/UX Design",
    skills: ["Figma", "Adobe Illustrator"],
    description:
      "A web application for a piano academy that allows users to browse courses and instructors. It includes a user-friendly interface and a responsive design.",
    demo: "/work/vgbc",
    figma: "",
    github: "#",
    detailPage: "/work/VGBC",
    image: "/img/vgbc/mockup00.jpg",
  },
];

const filterToIndexMap = {
  0: 0, // "All"
  1: 1, // "Software Development"
  2: 2, // "UI/UX Design & Others"
};

const ProjectShowcase = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [tabIndex, setTabIndex] = useState(0); // 选中的 Tab 索引

  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("filter"); // get filter from url
  console.log("filterValue", filterValue);

  useEffect(() => {
    const filterValue = searchParams.get("filter");
    if (filterValue && filterToIndexMap[filterValue] !== undefined) {
      setTabIndex(filterToIndexMap[filterValue]); //  过滤值映射到索引
    } else {
      setTabIndex(0); //  default is "All"
    }
  }, [searchParams]);

  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    // 根据 tabIndex 筛选数据
    const newFilteredData = allData.filter(
      (project) => tabIndex === 0 || project.tabIndex === tabIndex
    );
    setFilteredData(newFilteredData);
    setCurrentProjectIndex(0); // 切换 Tab 时重置索引
  }, [tabIndex]);

  //the pre and next project
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % filteredData.length;
      console.log("Next Project Index:", nextIndex);
      return nextIndex;
    });
  };
  const previousProject = () => {
    setCurrentProjectIndex((prevIndex) => {
      const prevIndexUpdated =
        prevIndex === 0 ? filteredData.length - 1 : prevIndex - 1;
      console.log("Previous Project Index:", prevIndexUpdated);
      return prevIndexUpdated;
    });
  };

  // 更新鼠标位置
  const [buttonVisible, setButtonVisible] = useState(false);
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setButtonPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setButtonVisible(true); // 鼠标在图片上时，显示按钮
  };

  return (
    <div className=" bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />
      <main className="flex flex-col flex-1 bg-gray-100">
        {/* Tab Section */}
        <div className="flex justify-end">
          <Tab
            className="mb-4 mr-4"
            initialActiveTab={tabIndex} //  `filter`
            onTabChange={setTabIndex} // 点击时更新状态
          />
        </div>

        {/* Content Section */}

        <div className="flex flex-1 flex-wrap items-start justify-between gap-6 mx-14 lg:mx-16">
          {/* Left Section */}
          <div className="flex-1  space-y-4 lg:pl-16 mt-40">
            <div className="space-x-4">
              <div className="roundIcon font-bold bg-canary-300 text-klein-900 mb-2">
                {`0${currentProjectIndex + 1}`}
              </div>
              <h1 className="heading3 font-bold text-blue-800">
                {filteredData[currentProjectIndex].scope}
              </h1>

              <h2 className="heading4 mt-4">
                {filteredData[currentProjectIndex].name}
              </h2>
            </div>

            {/* Tag Section */}
            <div className="flex flex-wrap gap-2 mt-16">
              {filteredData[currentProjectIndex].skills.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border rounded-full text-sm text-klein-900 border-klein-900"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <Link
                to={filteredData[currentProjectIndex].demo}
                target="_blank"
                className="btn  self-end"
              >
                Live Demo
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 -rotate-45"
                />
              </Link>
              <Link
                to={filteredData[currentProjectIndex].github}
                target="_blank"
                className="btn  self-end"
              >
                Github
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 -rotate-45"
                />
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="flex-2 flex flex-col items-center justify-center group relative "
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setButtonVisible(false)}
          >
            <Link
              to={filteredData[currentProjectIndex].detailPage}
              className="w-3/4 "
            >
              <img
                src={filteredData[currentProjectIndex].image}
                alt={filteredData[currentProjectIndex].name}
                className="rounded-lg"
              />
            </Link>
            {/* 按钮：仅在 hover 时显示，并跟随鼠标 */}
            {buttonVisible && (
              // the button will intercept the click event, preventing the Link's click event from being triggered properly.
              // so there is "pointer-events-none"
              <button
                className="absolute roundIcon bg-canary-300 opacity-80 text-sm w-16 h-16 text-klein-900  pointer-events-none"
                style={{
                  top: `${buttonPosition.y}px`,
                  left: `${buttonPosition.x}px`,
                  transform: "translate(-90%, -90%)", // position the pointer at the right bottom of the button
                }}
              >
                Click to Browse
              </button>
            )}
          </div>
        </div>
        {/* Navigation */}
        <div className="flex  h-48 justify-end items-start w-full mt-6 px-4 pr-60">
          <button
            className={`mr-4 roundIcon  text-white  ${
              filteredData.length === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-klein-900 hover:bg-klein-600 hover:text-canary-300 cursor-pointer"
            }`}
            disabled={filteredData.length === 1}
            onClick={previousProject}
          >
            <FontAwesomeIcon icon={faArrowRight} className="-rotate-180" />
          </button>
          <button
            className={`roundIcon  text-white  ${
              filteredData.length === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-klein-900 hover:bg-klein-600 hover:text-canary-300 cursor-pointer"
            }`}
            disabled={filteredData.length === 1}
            onClick={nextProject}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProjectShowcase;
