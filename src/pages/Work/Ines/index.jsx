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
  src: "/img/ines/InesMockup01.jpg",
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
const socialMediaImages = [
  {
    src: "/img/ines/InesMockup03.jpg",
    alt: "social media for Ines Piano Academy",
  },
  {
    src: "/img/ines/Street_Poster_Mockup02.jpg",
    alt: "street poster for Ines Piano Academy branding",
  },
  {
    src: "/img/ines/Street_Poster_Mockup03.jpg",
    alt: "street poster for Ines Piano Academy branding",
  },
  {
    src: "/img/ines/banners.jpg",
    alt: "banners for Ines Piano Academy",
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
                className="rounded-lg "
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
                <h3 className="heading5 detail-card-title ">Scenario</h3>

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
                <h3 className="heading5 detail-card-title">
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
                  <ul>
                    <li>No established branding or logo</li>
                    <li>No official website</li>
                    <li>
                      No email marketing or SEO presence Minimal social media
                      activity
                    </li>
                  </ul>
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
                  <img
                    src="/img/ines/InesMockup00.jpg"
                    alt="responsive website design"
                  />
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
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-16  flex flex-col h-full">
                <h3 className="heading3 text-klein-900 ">
                  Goal 3: Grow Social Media Presence
                </h3>

                <p className="p font-bold mt-4 text-gray-700">Strategy</p>
                <p className="p mt-2 text-gray-700">
                  Engage Chinese-speaking clients through WeChat and Xiaohongshu
                  with tailored content and promotions.
                </p>
                <p className="p font-bold mt-4 text-gray-700">Tactics</p>
                <p className="p mt-2 text-gray-700">
                  Create and set up Xiaohongshu and WeChat official accounts.
                </p>
                <p className="p mt-2 text-gray-700">
                  Post 2–3 times per week: student showcases, instructor tips,
                  upcoming events.
                </p>
                <p className="p mt-2 text-gray-700">
                  Design eye-catching banners and posters featuring QR codes
                  linked to social media and the website. These will highlight
                  key promotions, events, and announcements to boost visual
                  appeal and audience engagement.
                </p>
                <p className="p mt-2 text-gray-700">
                  Use hashtags like #温哥华钢琴, #PianoLessonsVancouver,
                  #RCM备考,#RCMPrep, #InesPianoAcademy.
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
                    {socialMediaImages.map((image, index) => (
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
          </section>

          {/* Features & Functionality */}
          <section className="p-12">
            <h2 className="heading2 detail-subtitle">
              Website Features & Functionality
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
                <h3 className="heading3 detail-card-title ">Feature</h3>
                <p className="p font-bold mt-4 text-gray-700">
                  Responsive Design
                </p>
                <p className="p mt-2 text-gray-700">
                  <ul>
                    <li>
                      Seamless viewing across devices, including desktops,
                      tablets, and smartphones.
                    </li>
                    <li>
                      Adapts layouts and elements dynamically for optimal user
                      experience.
                    </li>
                  </ul>
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Modern Visual Identity
                </p>
                <p className="p mt-2 text-gray-700">
                  <ul>
                    <li>
                      Custom logo, colors, and typography reflecting Ines Piano
                      Academy's branding.
                    </li>
                    <li>
                      Elegant and professional design elements for visual
                      appeal.
                    </li>
                  </ul>
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Comprehensive Program Information
                </p>
                <p className="p mt-2 text-gray-700">
                  Information on workshops, concert opportunities, and
                  examination preparation.
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Student Showcase
                </p>
                <p className="p mt-2 text-gray-700">
                  Gallery section featuring student performances, achievements,
                  and testimonials.
                </p>
              </div>
              <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
                <h3 className="heading3 detail-card-title">Function</h3>
                <p className="p font-bold mt-4 text-gray-700">
                  Multi-Language Support
                </p>
                <p className="p mt-2 text-gray-700">
                  Language switch feature for accessibility in English and
                  Chinese.
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  SEO Optimization
                </p>
                <p className="p mt-2 text-gray-700">
                  Metadata, keywords, and structured content to improve search
                  engine visibility.
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Social Media Integration
                </p>
                <p className="p mt-2 text-gray-700">
                  <ul>
                    <li>
                      Links to social media platforms for enhanced engagement
                      and reach.
                    </li>
                    <li>
                      Banner ads with WeChat and website QR codes for effortless
                      connectivity.
                    </li>
                  </ul>
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Performance Analytics
                </p>
                <p className="p mt-2 text-gray-700">
                  <ul>
                    <li>
                      Integration with Google Analytics and Google Search
                      Console.
                    </li>
                    <li>
                      Tracks traffic, user behavior, and conversion metrics to
                      guide improvements.
                    </li>
                  </ul>
                </p>
              </div>
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
                  Responsive Development
                </p>
                <p className="p mt-2 text-gray-700">
                  <ul>
                    <li>
                      Used Tailwind CSS for consistent, mobile-first responsive
                      designs.
                    </li>
                    <li>
                      Employed flexbox and grid layouts for precise element
                      alignment and structure.
                    </li>
                  </ul>
                </p>
                <p className="p font-bold mt-4 text-gray-700">Clean Code</p>
                <p className="p mt-2 text-gray-700">
                  <ul>
                    <li>
                      Organized JavaScript functions clearly for better
                      readability.
                    </li>
                    <li>
                      Followed consistent naming conventions for variables and
                      classes to maintain clarity.
                    </li>
                  </ul>
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Performance Optimization
                </p>
                <p className="p mt-2 text-gray-700">
                  <ul>
                    <li>
                      Utilized lazy loading for images to improve page load
                      performance.
                    </li>
                    <li>
                      Minimized the use of redundant CSS and JS to enhance
                      efficiency.
                    </li>
                  </ul>
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Version Control
                </p>
                <p className="p mt-2 text-gray-700">
                  <ul>
                    <li>
                      Used Git for tracking code changes with clear, descriptive
                      commit messages.
                    </li>
                    <li>
                      Managed branches effectively for testing new features
                      before merging.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="p-16 bg-whitish rounded-lg flex flex-col h-full">
                <h3 className="heading3 detail-card-title">
                  Development Workflow
                </h3>
                <p className="p font-bold mt-4 text-gray-700">
                  Planning & Design
                </p>
                <p className="p mt-2 text-gray-700">
                  <ul>
                    <li>
                      Started with wireframes to outline the website's layout
                      and functionality.
                    </li>
                    <li>
                      Designed a clear roadmap for development tasks to maintain
                      focus and efficiency.
                    </li>
                  </ul>
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Iterative Development
                </p>
                <p className="p mt-2 text-gray-700">
                  <ul>
                    <li>
                      Followed an incremental approach, building and testing one
                      feature at a time.
                    </li>
                    <li>
                      Reviewed and refined code after each stage to maintain
                      quality and consistency.
                    </li>
                  </ul>
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Testing & Debugging
                </p>
                <p className="p mt-2 text-gray-700">
                  <ul>
                    <li>
                      Conducted manual testing across different browsers and
                      devices for compatibility.
                    </li>
                    <li>
                      Used browser developer tools for debugging layout and
                      JavaScript issues.
                    </li>
                  </ul>
                </p>
                <p className="p font-bold mt-4 text-gray-700">
                  Deployment & Feedback
                </p>
                <p className="p mt-2 text-gray-700">
                  <ul>
                    <li>
                      Deployed the website on a secure and reliable hosting
                      platform.
                    </li>
                    <li>
                      Collected user feedback post-launch to guide future
                      improvements.
                    </li>
                  </ul>
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
