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

const projectData = {
  id: "project03",
  name: "Ines Piano Academy",
  category: "Software Development",
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
    "This project involved designing the digital presence of Ines Piano Academy, a piano school in Vancouver with over 10 years of experience. The work included designing a cohesive brand identity, creating a modern, responsive website,  and implementing SEO strategies to increase online visibility. The website features a bilingual language switch, student showcase, and detailed program descriptions to attract and engage a diverse audience.",
  demo: "https://inesacademy.juanliao.net/",
  github: "https://github.com/blueberryliaojuan/INES",
  src: "/img/ines/InesMockup00.jpg",
};

const carouselImages = [
  "/img/ines/color.jpg",
  "/img/ines/typo.jpg",
  "/img/ines/logoMockup1.jpg",
  "/img/ines/logoMockup2.jpg",
  "/img/ines/logoMockup3.jpg",
  "/img/ines/logoMockup4.jpg",
  "/img/ines/logoMockup5.jpg",
  "/img/ines/logoMockup6.jpg",
];

const brandingImages = [
  {
    src: "/img/ines/color.jpg",
    alt: "Color palette for Ines Piano Academy branding",
  },
  {
    src: "/img/ines/typo.jpg",
    alt: "Typography design for Ines Piano Academy branding",
  },
  {
    src: "/img/ines/logoMockup1.jpg",
    alt: "Logo mockup 1 for Ines Piano Academy",
  },
  {
    src: "/img/ines/logoMockup2.jpg",
    alt: "Logo mockup 2 for Ines Piano Academy",
  },
  {
    src: "/img/ines/logoMockup3.jpg",
    alt: "Logo mockup 3 for Ines Piano Academy",
  },
  {
    src: "/img/ines/logoMockup4.jpg",
    alt: "Logo mockup 4 for Ines Piano Academy",
  },
  {
    src: "/img/ines/logoMockup5.jpg",
    alt: "Logo mockup 5 for Ines Piano Academy",
  },
  {
    src: "/img/ines/logoMockup6.jpg",
    alt: "Logo mockup 6 for Ines Piano Academy",
  },
];

const Ines = () => {
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
                src={projectData.src}
                alt={projectData.name}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left p-12">
              <h2 className="heading4 font-bold text-gray-700">
                {projectData.scope}
              </h2>
              <h1 className="heading2 font-happyMonkey  font-bold text-klein-900 mt-4">
                {projectData.name}
              </h1>
              <p className=" mt-16 pr-24">
                {projectData.description}
                {/* <span className="font-semibold ">Contributors: </span> <br />{" "}
                Juan - Web Developer, Project Manager
                <br /> Mikhaila - Graphic Designer */}
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

          <section className="p-12">
            <h2 className="heading2 detail-subtitle">Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
                <h3 className="heading3 detail-card-title ">Scenario</h3>

                <p className="p mt-2 text-gray-700">
                  Ines Piano Academy is a piano school based in Vancouver,
                  Canada, founded by Ines, a passionate instructor with over 20
                  years of teaching experience. The academy has been operating
                  for more than a decade and offers personalized lessons for
                  students of all ages and skill levels. While the school has
                  established a strong reputation through word-of-mouth and
                  local presence, its digital presence was limited, with no
                  dedicated website or consistent online marketing.
                </p>
              </div>
              <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
                <h3 className="heading3 detail-card-title">
                  Client Position Summary
                </h3>
                <p className="p font-bold mt-4 text-gray-700">
                  Services Offered
                </p>
                <p className="p mt-2 text-gray-700">
                  Piano lessons (Beginner, Intermediate, Advanced), RCM exam
                  preparation, summer workshops, student concerts.
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Pricing Strategy
                </p>
                <p className="p mt-2 text-gray-700">
                  Competitive pricing with personalized lesson plans, based on
                  lesson length and skill level. Workshop pricing is offered in
                  bundled packages.
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Competitive Environment
                </p>
                <p className="p mt-2 text-gray-700">
                  Some others schools offer group and private lessons with
                  varying levels of digital marketing, online presence, and
                  workshop events
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Current Digital Presence:
                </p>
                <p className="p mt-2 text-gray-700">
                  No established branding or logo No official website No Google
                  Business profile No email marketing or SEO presence Minimal
                  social media activity
                </p>
              </div>
            </div>
          </section>

          {/* Marketing  Objectives */}
          <section className="p-12">
            <h2 className="heading2 detail-subtitle">Marketing Objectives</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-16  flex flex-col h-full">
                <h3 className="heading3 text-klein-900 ">
                  Goal 1: Establish Consistent Branding
                </h3>

                <p className="p font-bold mt-4 text-gray-700">Strategy</p>
                <p className="p mt-2 text-gray-700">Develop Visual Identity</p>
                <p className="p font-bold mt-4 text-gray-700">Tactics</p>
                <p className="p mt-2 text-gray-700">
                  Design a logo using Adobe Illustrator.
                </p>
                <p className="p mt-2 text-gray-700">
                  Create business cards and basic brand guidelines (fonts,
                  colors, logo usage).
                </p>
                <p className="p mt-2 text-gray-700">
                  Apply branding consistently across website and printed
                  materials.
                </p>
              </div>
              <div className="p-4  flex flex-col h-full">
                <div className="w-full h-full">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="h-full"
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
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-4  flex flex-col h-full">
                <div className="w-full h-full">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="h-full"
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

              <div className="p-16  flex flex-col h-full">
                <h3 className="heading3 text-klein-900 ">
                  Goal 2: Establish a Strong Digital Presence
                </h3>
                <p className="p font-bold mt-4 text-gray-700">Strategy</p>
                <p className="p mt-2 text-gray-700">
                  Build a Professional and Responsive Website
                </p>
                <p className="p font-bold mt-4 text-gray-700">Tactics</p>
                <p className="p mt-2 text-gray-700">
                  Include key sections: Mission, About, Student Showcase,
                  Contact
                </p>
                <p className="p mt-2 text-gray-700">
                  Add language switch (English/Chinese) to accommodate the
                  primary audience.
                </p>
                <p className="p mt-2 text-gray-700">
                  Write engaging, SEO-optimized content
                </p>
                <p className="p mt-2 text-gray-700">
                  Implement contact and trial lesson forms with email capture.
                </p>
                <p className="p mt-2 text-gray-700">
                  Integrate Google Analytics for visitor tracking and behavior
                  analysis.
                </p>
              </div>
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
                  cSectionode.
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
        </div>
      </main>
    </>
  );
};

export default Ines;
