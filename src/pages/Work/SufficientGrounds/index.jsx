import React from "react";
import Header from "@/components/layout/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import "./index.css";

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
  src: "/img/sufficientGrounds/sufficientGroundsMock02.jpg",
};

const brandingImages = [
  {
    src: "/img/sufficientGrounds/branding.jpg",
    alt: "Sufficient Grounds branding color palette",
  },
  {
    src: "/img/sufficientGrounds/moodboard.jpg",
    alt: "Typography design for Sufficient Grounds",
  },
  {
    src: "/img/sufficientGrounds/retailCoffeeMockup.jpg",
    alt: "Logo mockup 1 for Sufficient Grounds",
  },
  {
    src: "/img/sufficientGrounds/shopMockup.jpg",
    alt: "Logo mockup 2 for Sufficient Grounds",
  },
  {
    src: "/img/sufficientGrounds/userStories.jpg",
    alt: "Logo mockup 3 for Sufficient Grounds",
  },
];

const websiteImages = [
  {
    src: "/img/sufficientGrounds/sufficientGroundsScreenShot01.jpg",
    alt: "Screenshot 1 of Sufficient Grounds website",
  },
  {
    src: "/img/sufficientGrounds/sufficientGroundsScreenShot05.jpg",
    alt: "Screenshot 2 of Sufficient Grounds website",
  },
  {
    src: "/img/sufficientGrounds/sufficientGroundsScreenShot08.jpg",
    alt: "Screenshot 3 of Sufficient Grounds website",
  },
  {
    src: "/img/sufficientGrounds/sufficientGroundsScreenShot09.jpg",
    alt: "Screenshot 4 of Sufficient Grounds website",
  },
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
          <section className="detail-section hero-section ">
            <div className="md:w-1/2 flex justify-center">
              <img
                src={projectData.src}
                alt={projectData.name}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className=" detail-project-text">
              <h2 className="heading4 font-bold text-gray-700">
                {projectData.scope}
              </h2>
              <h1 className="heading2 font-happyMonkey  font-bold text-klein-900 mt-4">
                {projectData.name}
              </h1>
              <p className=" mt-16">
                <span className="font-semibold mb-4">Contributors: </span>{" "}
                <br /> Juan - Web Developer, Scrum Leader
                <br />{" "}
                <Link
                  to="https://mikhaila.ca/"
                  target="_blank"
                  className="text-klein-900 font-light text-decoration-underline"
                >
                  Mikhaila
                </Link>{" "}
                - Graphic Designer, Content Creator
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

          {/* Project Introduction Section */}
          <section className="detail-section">
            <div className="p-16  ">
              <h2 className="heading2 font-bold text-klein-900">
                Project Introduction
              </h2>
              <p className="p mt-4 text-gray-700">
                The "Sufficient Grounds Coffee Shop" project was part of a
                school assignment where we were tasked with creating a unique
                coffee shop brand. This included branding design and website
                development. My role as both the developer and scrum leader
                involved leading the team and ensuring smooth collaboration,
                while also designing and building the coffee shop's website
                based on the brand identity my partner developed. I focused on
                creating an engaging and functional online presence for the
                business, ensuring it met both the brand’s vision and user
                needs.
              </p>
            </div>
            <div className="p-4  flex flex-col h-full">
              <div className="w-full h-full">
                <img
                  src="/img/sufficientGrounds/name.jpg"
                  alt="introduction of brand name"
                  className="rounded-lg "
                />
              </div>
            </div>
          </section>

          {/* design */}
          <section className="detail-section">
            <div className="p-4  flex flex-col h-full ">
              <div className="w-full h-full py-8">
                <Swiper
                  modules={[Pagination]}
                  pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  spaceBetween={20}
                  slidesPerView={1}
                  className="h-full w-full rounded-lg"
                >
                  {brandingImages.map((image, index) => (
                    <SwiperSlide
                      key={index}
                      className="flex items-center justify-center h-full"
                    >
                      <div className="h-full flex justify-center items-center bg-gray-100">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="object-contain max-w-full max-h-full"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="  p-16  ">
              <h2 className="heading2 font-bold text-klein-900">
                Design Overview
              </h2>
              <p className="p mt-4 text-gray-700">
                The design process was centered around crafting a modern,
                welcoming, and accessible brand identity that resonates with the
                target audience. The branding design by{" "}
                <Link
                  to="https://mikhaila.ca/"
                  target="_blank"
                  className="text-klein-900 font-light text-decoration-underline"
                >
                  Mikhaila
                </Link>
                , focused on creating a cohesive visual style with an inviting
                color palette, clean typography, and imagery that reflects the
                warmth and quality of the coffee shop. The branding was
                consistently applied across all touchpoints, from the logo to
                the website interface, ensuring a unified and memorable
                experience for the customers.
              </p>
            </div>
          </section>

          {/* website */}
          <section className="detail-section ">
            <div className="  p-16  ">
              <h2 className="heading2 font-bold text-klein-900">
                Website Overview
              </h2>
              <div className="p mt-4 text-gray-700">
                The project aimed to create a responsive website for "Sufficient
                Grounds Coffee Shop" featuring six main pages: Home, About,
                Menu, Products, How to Brew, and Contact.
                <ul className="p-4">
                  <li className="mb-1">
                    The <span className="text-klein-900">Home</span> page serves
                    as an introduction to the brand, showcasing the shop’s key
                    offerings.
                  </li>
                  <li className="mb-1">
                    The <span className="text-klein-900">About</span> page
                    shares the story and mission behind the coffee shop.
                  </li>
                  <li className="mb-1">
                    The <span className="text-klein-900">Menu</span> page
                    provides customers with a comprehensive list of drinks and
                    options available.
                  </li>
                  <li className="mb-1">
                    The <span className="text-klein-900">Products</span> page
                    highlights retail coffee and accessories for sale.
                  </li>
                  <li className="mb-1">
                    The <span className="text-klein-900">How to Brew</span>{" "}
                    section offers customers valuable tips on making the perfect
                    brew.
                  </li>
                  <li>
                    The <span className="text-klein-900">Contact</span> page
                    enables easy customer interaction for inquiries or feedback.
                  </li>
                </ul>
                I made sure that the website was designed with user experience
                in mind, ensuring it’s easy to navigate and accessible across
                devices, providing a seamless experience for visitors.
              </div>
            </div>

            {/* when we use more than one Swiper, we need to assign a unique pagination element container to each <Swiper>， pagination.el property */}
            <div className="p-4  flex flex-col h-full ">
              <div className="w-full h-full py-8">
                <Swiper
                  modules={[Pagination]}
                  pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  spaceBetween={20}
                  slidesPerView={1}
                  className="h-full rounded-lg"
                >
                  {websiteImages.map((image, index) => (
                    <SwiperSlide
                      key={index}
                      className="flex items-center justify-center h-full"
                    >
                      <div className="h-full flex justify-center items-center bg-gray-100">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="object-contain max-w-full max-h-full"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>

          {/* Features & Functionality */}
          <h2 className="heading2 detail-subtitle">Features & Functionality</h2>
          <section className="detail-section ">
            <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
              <h3 className="heading3 detail-card-title ">Feature</h3>
              <p className="p font-bold mt-4 text-gray-700">
                Intuitive Navigation
              </p>
              <p className="p mt-2 text-gray-700">
                The website features a clear menu structure, making it easy for
                users to quickly find information across pages like Home, Menu,
                and Contact.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                Mobile Responsiveness
              </p>
              <p className="p mt-2 text-gray-700">
                The site is fully responsive, offering a seamless experience on
                mobile devices, ensuring functionality and a clean layout on all
                screen sizes.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                Easy-to-Read Content
              </p>
              <p className="p mt-2 text-gray-700">
                I used legible fonts and high-contrast colors to ensure that all
                text is easy to read, improving user accessibility.
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
                A user-friendly form with clear fields and validation, allowing
                visitors to easily send inquiries.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                How to Brew Section
              </p>
              <p className="p mt-2 text-gray-700">
                Provides customers with helpful brewing tips, offering
                educational content on how to prepare their favorite coffee.
              </p>
            </div>
          </section>

          {/* Carousel*/}
          {/* <div className="p-12">
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
          </div> */}

          {/* Code Practices & Workflow */}
          <h2 className="heading2 detail-subtitle">
            Code Practices & Development Workflow
          </h2>
          <section className="detail-section  ">
            <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
              <h3 className="heading3 detail-card-title ">
                Organization & Efficiency
              </h3>
              <p className="p font-bold mt-4 text-gray-700">CSS Optimization</p>
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
              <p className="p font-bold mt-4 text-gray-700">Data Management</p>
              <p className="p mt-2 text-gray-700">
                I saved data in a JSON file and implemented JavaScript functions
                to handle data filtering, ensuring a streamlined and dynamic
                user experience.
              </p>
            </div>
            <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
              <h3 className="heading3 detail-card-title">
                Development Workflow
              </h3>
              <p className="p font-bold mt-4 text-gray-700">Version Control</p>
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
              <p className="p font-bold mt-4 text-gray-700">Task Management</p>
              <p className="p mt-2 text-gray-700">
                Broke down the development process into manageable steps,
                staying organized and ensuring steady progress.
              </p>
            </div>
          </section>

          {/* Agile Methodology */}
          <h2 className="heading2 detail-subtitle">Agile Methodology</h2>
          <section className="detail-section  ">
            <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
              <img
                src="/img/sufficientGrounds/sufficientGroundsAgile00.jpg"
                alt="agile methodology chart"
              />
            </div>
            <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
              <h3 className="heading3 detail-card-title">
                Development Workflow
              </h3>

              <p className="p mt-2 text-gray-700">
                The project followed Agile principles to ensure iterative
                development and continuous collaboration. Weekly sprints were
                used to break down the project into manageable tasks, prioritize
                features, and maintain progress. Regular meetings facilitated
                seamless communication between the designer and developer,
                ensuring alignment with user needs and project goals. Feedback
                loops allowed for quick adjustments, resulting in a more
                user-focused and polished website.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default SufficientGround;
