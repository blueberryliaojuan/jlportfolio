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
  id: "project04",
  name: "VGBC",
  category: "UI/UX Design & Others",
  demo: "",
  github: "",
  figma:
    "https://www.figma.com/design/8gM6LQL61OLEZai0MqE1WO/VGBC?node-id=220-604&p=f&t=EKgEJFDvIykNSZmg-0",
  src: "/img/vgbc/vgbc00.jpg",
  tabIndex: 2,
  scope: "UI/UX Design",
  skills: ["Figma", "Adobe Illustrator"],
  description:
    "A web application for a piano academy that allows users to browse courses and instructors. It includes a user-friendly interface and a responsive design.",
};

const websiteImages = [
  { src: "/img/vgbc/user-test00.jpg", alt: "User test 1" },
  { src: "/img/vgbc/user-test01.jpg", alt: "User test 2" },
];

const personaImages = [
  { src: "/img/vgbc/Persona01.png", alt: "User persona 1" },
  { src: "/img/vgbc/Persona02.jpg", alt: "User persona 2" },
];
const scenarioImages = [
  { src: "/img/vgbc/Senario01.png", alt: "User scenario 1" },
  { src: "/img/vgbc/Senario02.jpg", alt: "User scenario 2" },
];
const empathyImages = [
  { src: "/img/vgbc/empathy01.png", alt: "empathy map 1" },
  { src: "/img/vgbc/empathy02.jpg", alt: "empathy map 2" },
];
const Vgbc = () => {
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
                alt="Project Preview"
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
              {/* <p className=" mt-16">
                <span className="font-semibold ">
                  My Role: Designer and Developer— Creating a modern and
                  user-friendly design for the VGBC, developing features that
                  enhance user experience, and ensuring a seamless and
                  functional digital presence that aligns with VGBC’s mission
                  and goals.
                </span>{" "}
                <br />{" "}
              </p> */}
              <p className=" mt-16 mr-16">
                VGBC, a Chinese church in Vancouver's Dunbar area with around
                200 members, sought to create a responsive website to better
                connect with its community.
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
                  to={projectData.figma}
                  target="_blank"
                  className="btn  self-end"
                >
                  Figma
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 -rotate-45"
                  />
                </Link>
                {/* <Link
                  to={projectData.demo}
                  target="_blank"
                  className="btn  self-end"
                >
                  Live Demo
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 -rotate-45"
                  />
                </Link> */}
                {/* <Link
                  to={projectData.github}
                  target="_blank"
                  className="btn  self-end"
                >
                  Github
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 -rotate-45"
                  />
                </Link> */}
              </div>
            </div>
          </section>

          {/* Overview Section */}

          <section className="p-12 grid md:grid-cols-2 gap-8">
            <div className="  p-16  ">
              <h2 className="heading2 font-bold text-klein-900">
                Problem Statement
              </h2>
              <p className="p mt-4 text-gray-700">
                VGBC, our client, does not have a website, making it challenging
                for newcomers to access the church’s resources and essential
                information. To address this, we conducted user testing and
                gathered 19 feedback responses. The results revealed that most
                users access content on mobile devices rather than desktops,
                with the primary age group being 45–54. This insight emphasized
                the need for a mobile-friendly website that is simple,
                intuitive, and tailored to a more mature audience.
              </p>
              <p className="p font-bold mt-4 text-gray-700">User Needs</p>
              <p className="p mt-2 text-gray-700">
                <ul>
                  <li>
                    Mobile-first design to ensure seamless accessibility and
                    usability.
                  </li>
                  <li>
                    Intuitive onboarding tailored for newcomers, guiding them
                    step-by-step.
                  </li>
                  <li>
                    Streamlined access to essential resources, such as planning
                    a visit and exploring faith.
                  </li>
                </ul>
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                Business Requirements
              </p>
              <p className="p mt-2 text-gray-700">
                The website design should align with VGBC’s mission of being
                welcoming and inclusive while addressing usability issues
                identified in user surveys. There is no strict deadline for
                completing the project, allowing for thoughtful and
                user-centered development.
              </p>
              <div className="m-8">
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLSf2Uj2Y0Ud9axaN0IyctaUC3ZqeR126KWGvI5x9aUkSim5YZQ/viewform"
                  target="_blank"
                  className="btn  self-end"
                >
                  user testing 1
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 -rotate-45"
                  />
                </Link>
              </div>
              <div className="m-8">
                <Link
                  to="https://docs.google.com/forms/d/11wRS9_aB9_xROwEbnlCUPCpwyi4mla3ZKi-6TFrcYbI/edit"
                  target="_blank"
                  className="btn  self-end"
                >
                  user testing 2
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 -rotate-45"
                  />
                </Link>
              </div>
            </div>

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

          {/* UI/UX */}
          <section className="p-12">
            <h2 className="heading2 detail-subtitle">Process Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-16  flex flex-col h-full">
                <h3 className="heading3 text-klein-900 ">User Persona</h3>

                <div className="w-full h-full">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="h-full"
                  >
                    {personaImages.map((image, index) => (
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
                <h3 className="heading3 text-klein-900 ">User Scenario</h3>
                <div className="w-full h-full">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="h-full"
                  >
                    {scenarioImages.map((image, index) => (
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
              <div className="p-16  flex flex-col h-full">
                <h3 className="heading3 text-klein-900 ">Empathy Map</h3>
                <div className="w-full h-full">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="h-full"
                  >
                    {empathyImages.map((image, index) => (
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
                <h3 className="heading3 text-klein-900 ">Journey Map</h3>
                <div className="w-full h-full">
                  <img src="/img/vgbc/journeyMap.jpg" alt="Journey map" />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-16  flex flex-col h-full">
                <h3 className="heading3 text-klein-900 ">User Flow</h3>
                <div className="w-full h-full">
                  <img src="/img/vgbc/userFlow.png" alt="Journey map" />
                </div>
              </div>
              <div className="p-16  flex flex-col h-full">
                <h3 className="heading3 text-klein-900 ">User Feedback</h3>
                <div className="w-full h-full">
                  <div className="m-8">
                    <Link
                      to="https://www.figma.com/proto/8gM6LQL61OLEZai0MqE1WO/VGBC?node-id=231-559&p=f&t=TGLCxFjsdwVqEQCx-1&scaling=scale-down&content-scaling=fixed&page-id=220%3A604&starting-point-node-id=231%3A559"
                      target="_blank"
                      className="btn  self-end"
                    >
                      Prototype
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 -rotate-45"
                      />
                    </Link>
                  </div>
                  {/* <p className="p font-bold mt-4 text-gray-700">Strategy</p> */}
                  <p className="p mt-2 text-gray-700">
                    After sharing the high-fidelity prototype for testing, I
                    received 7 valuable pieces of feedback. Users appreciated
                    the detailed sections, such as the sermons, video content,
                    and calendar, and felt that the app was clear and easy to
                    navigate. They were able to find the information they needed
                    quickly, which was a positive response. However, they
                    suggested a few improvements:
                  </p>
                  <p className="p mt-2 text-gray-700">
                    <ul>
                      <li>
                        Sermon Access: Users would like the sermons to be
                        featured on the home page for quicker access.
                      </li>
                      <li>
                        Forms Organization: The contact and feedback forms could
                        be more organized for better user experience.
                      </li>
                      <li>
                        Video Section: Including testimonials within the video
                        section would be a helpful addition.
                      </li>
                      <li>
                        Content Updates: Users want to see more frequent updates
                        to the images and videos, ensuring that content stays
                        fresh and relevant.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Vgbc;
