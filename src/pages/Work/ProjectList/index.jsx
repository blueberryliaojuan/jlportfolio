import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Tab from "@/components/common/Tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const allData = [
  {
    id: "project03",
    name: "Ines Piano Academy",
    category: "Web Development",
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
    demo: "https://inesacademy.juanliao.site/",
    github: "https://github.com/blueberryliaojuan/INES",
    detailPage: "/work/InesPianoAcademy",
    image: "/img/ines/InesMockup00.jpg",
  },
  {
    id: "project01",
    name: "Sufficient Grounds Coffee Shop",
    category: "Web Development",
    tabIndex: 1,
    scope: "Front-End Project",
    skills: ["HTML", "CSS", "Vanilla JS", "AGILE"],
    description:
      "A web application for a coffee shop that allows users to browse the menu and products. It includes a user-friendly interface and a responsive design.",
    demo: "https://sufficientgrounds.juanliao.site/",
    github: "https://github.com/blueberryliaojuan/SufficientGround-1",
    detailPage: "/work/SufficientGrounds",
    image: "/img/sufficientGrounds/sufficientGroundsMock00.jpg",
  },
  {
    id: "project02",
    name: "Dish Ordering System",
    category: "Web Development",
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
    demo: "https://juanskitchen.juanliao.site/",
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
    demo: "",
    figma:
      "https://www.figma.com/design/8gM6LQL61OLEZai0MqE1WO/VGBC?node-id=220-604&p=f&t=EKgEJFDvIykNSZmg-0",
    github: "",
    detailPage: "/work/VGBC",
    image: "/img/vgbc/mockup00.jpg",
  },
];

const ProjectList = () => {
  const [tabIndex, setTabIndex] = useState(0); // index of current tab, 0 for All, 1 for Web Development, 2 for UI/UX Design & Others
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    // filter data according to tabIndex
    const newFilteredData = allData.filter(
      (project) => tabIndex === 0 || project.tabIndex === tabIndex
    );
    setFilteredData(newFilteredData);
  }, [tabIndex]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-1 flex-col  mx-auto max-w-screen-xl mt-28">
        <div className="my-12 flex justify-end">
          <Tab
            initialActiveTab={tabIndex} //  `filter`
            onTabChange={(index) => {
              // console.log("Tab changed to: ", index);
              setTabIndex(index);
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300"
            >
              {/* Outer link */}
              {/* nesting <a> elements is invalid and will cause hydration errors in frameworks like React */}
              <Link to={project.detailPage} className="lg:w-3/4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-60 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-600 my-4">
                  {project.description}
                </p>
                {/* Tag Section */}
                <div className="flex flex-wrap justify-start  gap-2 h-24 mt-8 ">
                  {project.skills.map((tag) => (
                    <span
                      key={tag}
                      className="h-6 px-4 border rounded-full text-sm text-klein-900 border-klein-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8 mb-4 ">
                  {project.demo && (
                    <Link
                      to={project.demo}
                      target="_blank"
                      className="btn-small self-end"
                    >
                      Live Demo
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 -rotate-45"
                      />
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      to={project.github}
                      target="_blank"
                      className="btn-small  self-end"
                    >
                      Github
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 -rotate-45"
                      />
                    </Link>
                  )}
                  {project.figma && (
                    <Link
                      to={project.figma}
                      target="_blank"
                      className="btn-small self-end"
                    >
                      Figma
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 -rotate-45"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectList;
