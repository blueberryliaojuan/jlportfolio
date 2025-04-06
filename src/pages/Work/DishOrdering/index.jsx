import React from "react";
import Header from "@/components/layout/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import { useRef, useEffect } from "react";

const projectData = {
  id: "project01",
  name: "Sufficient Grounds Coffee Shop",
  category: "Software Development",
  scope: "Front-End Project",
  skills: ["HTML", "CSS", "Vanilla JS", "AGILE"],
  description:
    "A web application for a coffee shop that allows users to browse the menu and products. It includes a user-friendly interface and a responsive design.",
  demo: "https://sufficientgrounds.juanliao.net/",
  github: "/work",
  src: "/img/sufficientGroundsMock00.jpg",
};

const carouselImages = [
  "/img/sufficientGroundsScreenShot01.jpg",
  // "/img/sufficientGroundsScreenShot02.jpg",
  "/img/sufficientGroundsScreenShot05.jpg",
  "/img/sufficientGroundsScreenShot08.jpg",
  "/img/sufficientGroundsScreenShot09.jpg",
];
const SufficientGround = () => {
  // const prevRef = useRef(null);
  // const nextRef = useRef(null);
  return (
    <>
      <Header></Header>
      <main className="flex-1 bg-gray-100 ">
        <div className="py-12">
          {/* Hero Section */}
          <section className="p-12 flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/img/sufficientGroundsMock01.jpg"
                alt="Project Preview"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left p-12">
              <h2 className="heading4 font-bold text-gray-700">
                Front-End Project
              </h2>
              <h1 className="heading2 font-happyMonkey  font-bold text-klein-900 mt-4">
                {projectData.name}
              </h1>
              <p className=" mt-16">
                <span className="font-semibold ">Contributors: </span> <br />{" "}
                Juan - Web Developer, Project Manager
                <br /> Mikhaila - Graphic Designer
              </p>
              {/* Tag Section */}
              <div className="flex flex-wrap gap-2 mt-16">
                {projectData.skills.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border rounded-full text-sm text-klein-900 text-klein-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <Link
                  to={projectData.demo}
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
                  to={projectData.github}
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
          </section>

          {/* Overview Section */}
          <section className="p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2  p-16 rounded-lg ">
              <h2 className="heading2 font-bold text-klein-900">Overview</h2>
              <p className="p mt-4 text-gray-700">
                The project aimed to create a responsive website for a coffee
                shop, consisting of six key pages: Home, About, Menu, Products,
                How to Brew, and Contact. The Home page introduces the brand and
                highlights key offerings, while the About page tells the story
                behind the coffee shop. The Menu page provides customers with
                detailed information about the available drinks, and the
                Products page showcases retail coffee and related items. The How
                to Brew section offers valuable brewing tips, and the Contact
                page allows customers to easily reach out with inquiries. Each
                page was designed with user experience in mind, ensuring easy
                navigation and accessibility across devices.
              </p>
            </div>
          </section>

          {/* Features & Functionality */}
          <section className="p-12">
            <h2 className="heading2 detail-subtitle">
              Features & Functionality
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
                <h3 className="heading3 detail-card-title ">Feature</h3>
                <p className="p font-bold mt-4 text-gray-700">
                  Intuitive Navigation
                </p>
                <p className="p mt-2 text-gray-700">
                  The website features a clear menu structure, making it easy
                  for users to quickly find information across pages like Home,
                  Menu, and Contact.
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Mobile Responsiveness
                </p>
                <p className="p mt-2 text-gray-700">
                  The site is fully responsive, offering a seamless experience
                  on mobile devices, ensuring functionality and a clean layout
                  on all screen sizes.
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Easy-to-Read Content
                </p>
                <p className="p mt-2 text-gray-700">
                  I used legible fonts and high-contrast colors to ensure that
                  all text is easy to read, improving user accessibility.
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Consistent Branding
                </p>
                <p className="p mt-2 text-gray-700">
                  The design maintains a consistent visual identity, using
                  matching colors and fonts to reinforce the brand and create a
                  cohesive experience.
                </p>
              </div>
              <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
                <h3 className="heading3 detail-card-title">Function</h3>
                <p className="p font-bold mt-4 text-gray-700">Menu Display</p>
                <p className="p mt-2 text-gray-700">
                  The Menu page showcases all products in an organized,
                  easy-to-read format, with interactive elements to enhance user
                  engagement.
                </p>
                <p className="p font-bold mt-4 text-gray-700">Contact Form</p>
                <p className="p mt-2 text-gray-700">
                  A user-friendly form with clear fields and validation,
                  allowing visitors to easily send inquiries.
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  How to Brew Section
                </p>
                <p className="p mt-2 text-gray-700">
                  Provides customers with helpful brewing tips, offering
                  educational content on how to prepare their favorite coffee.
                </p>
              </div>
            </div>
          </section>

          {/* Carousel*/}
          <div className="p-12">
            <Swiper
              modules={[Navigation]}
              navigation
              loop
              spaceBetween={20}
              slidesPerView={1}
              className="rounded-lg "
            >
              {carouselImages.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="aspect-[16/9] w-full">
                    <img
                      src={src}
                      alt={`Slide ${idx}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Code Practices & Workflow */}
          <section className="p-12">
            <h2 className="heading2 detail-subtitle">
              Code Practices & Development Workflow
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
                <h3 className="heading3 detail-card-title ">
                  Organization & Efficiency
                </h3>
                <p className="p font-bold mt-4 text-gray-700">
                  CSS Optimization
                </p>
                <p className="p mt-2 text-gray-700">
                  I utilized CSS variables to maintain consistent styling across
                  the site, ensuring efficient updates and reducing repetitive
                  code.
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Reusable Functions
                </p>
                <p className="p mt-2 text-gray-700">
                  Wrote JavaScript functions for filtering data, avoiding
                  redundancy and improving maintainability.
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Data Management
                </p>
                <p className="p mt-2 text-gray-700">
                  I saved data in a JSON file and implemented JavaScript
                  functions to handle data filtering, ensuring a streamlined and
                  dynamic user experience.
                </p>
              </div>
              <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
                <h3 className="heading3 detail-card-title">
                  Development Workflow
                </h3>
                <p className="p font-bold mt-4 text-gray-700">
                  Version Control
                </p>
                <p className="p mt-2 text-gray-700">
                  Using Git, I tracked changes systematically, making it easy to
                  manage iterations and collaborate while safeguarding progress.
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Debugging and Testing
                </p>
                <p className="p mt-2 text-gray-700">
                  Employed browser developer tools and iterative testing to
                  troubleshoot and refine features efficiently.
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Task Management
                </p>
                <p className="p mt-2 text-gray-700">
                  Broke down the development process into manageable steps,
                  staying organized and ensuring steady progress.
                </p>
              </div>
            </div>
          </section>

          {/* Agile Methodology */}
          <section className="p-12">
            <h2 className="heading2 detail-subtitle">Agile Methodology</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
                <img src="/img/sufficientGroundsAgile00.jpg" alt="" />
              </div>
              <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
                <h3 className="heading3 detail-card-title">
                  Development Workflow
                </h3>

                <p className="p mt-2 text-gray-700">
                  The project followed Agile principles to ensure iterative
                  development and continuous collaboration. Weekly sprints were
                  used to break down the project into manageable tasks,
                  prioritize features, and maintain progress. Regular meetings
                  facilitated seamless communication between the designer and
                  developer, ensuring alignment with user needs and project
                  goals. Feedback loops allowed for quick adjustments, resulting
                  in a more user-focused and polished website.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default SufficientGround;
