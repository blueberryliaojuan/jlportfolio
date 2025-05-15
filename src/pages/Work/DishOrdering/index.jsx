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
  id: "project02",
  name: "Dish Ordering System",
  category: "Web Development",
  tabIndex: 1,
  scope: "Front-End Project",
  skills: ["HTML", "CSS", "JS", "Bootstrap", "JS Plugin", "Adobe Illustrator"],
  description:
    "Juan’s Kitchen is a responsive restaurant website that I designed and developed to streamline the in-house dining experience. Originally created as a basic promotional site, it has since evolved into an interactive ordering system. Customers can scan a unique QR code at their table to browse the menu, view dish photos, and place orders directly from their phones. This project demonstrates my skills in responsive design, image optimization, and front-end development using Bootstrap and JavaScript plugins.",
  demo: "https://juanskitchen.juanliao.net/",
  github: "https://github.com/blueberryliaojuan/Juan-s-Kitchen",
  detailPage: "/work/DishOrdering",
  src: "/img/dishOrder/orderSystemMock00.jpg",
};

const carouselImages = [
  "/img/dishOrder/dishOrdering00.jpg",
  "/img/dishOrder/dishOrdering01.jpg",
  "/img/dishOrder/dishOrdering02.jpg",
];
const DishOrdering = () => {
  // const prevRef = useRef(null);
  // const nextRef = useRef(null);
  return (
    <>
      <Header></Header>
      <main className="flex-1 bg-gray-100 ">
        <div className="py-12">
          {/* Hero Section */}
          <section className="detail-section hero-section">
            <div className="md:w-1/2 flex justify-center">
              <img
                src={projectData.src}
                alt={projectData.name}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="detail-project-text">
              <h2 className="heading4 font-bold text-gray-700">
                {projectData.scope}
              </h2>
              <h1 className="heading2 font-happyMonkey  font-bold text-klein-900 mt-4">
                {projectData.name}
              </h1>
              {/* <p className=" mt-16">
                <span className="font-semibold ">Contributors: </span> <br />{" "}
                Juan - Web Developer, Project Manager
                <br /> Mikhaila - Graphic Designer
              </p> */}
              {/* Tag Section */}
              <p className="detail-project-description">
                {projectData.description}
              </p>
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
          <section className="detail-section">
            <div>
              <h2 className="heading2 font-bold text-klein-900">Overview</h2>
              <p className="p mt-4 text-gray-700">
                The goal of this project was to design a responsive website for
                Juan’s Kitchen that simplifies the ordering process for
                restaurant customers. The website aims to address common
                challenges, such as hesitation to order unfamiliar
                dishes—especially Chinese cuisine for Western customers—by
                providing clear descriptions, enticing visuals, and detailed
                information about each dish. By scanning a QR code on the table,
                customers can access the website to browse the menu and place
                their orders conveniently. Since most users will access the site
                on mobile devices, it was essential to create a responsive
                design. This project also highlights the use of Bootstrap for
                layout and responsiveness, as well as JavaScript plugins to
                enhance functionality and user experience.
              </p>
            </div>
            <div>
              <img src="/img/dishOrder/Juan-Mockup.jpg" alt="website mockup" />
            </div>
          </section>

          {/* Features & Functionality */}
          <h2 className="heading2 detail-subtitle">Features & Functionality</h2>
          <section className="detail-section">
            <div className="detail-section-item bg-whitish rounded-lg ">
              <h3 className="heading3 detail-card-title ">Feature</h3>
              <p className="p font-bold mt-4 text-gray-700">
                Responsive Design
              </p>
              <p className="p mt-2 text-gray-700">
                Designed to work smoothly across all screen sizes—mobile,
                tablet, and desktop—ensuring a consistent and user-friendly
                experience.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                QR Code Integration
              </p>
              <p className="p mt-2 text-gray-700">
                Each restaurant table has a unique QR code that links to the
                website and includes the table number, stored in local storage.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                Tabbed Menu Navigation
              </p>
              <p className="p mt-2 text-gray-700">
                The menu is organized into clear categories like Appetizers,
                Main Courses, and Desserts, making browsing faster and easier.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                Original Photography
              </p>
              <p className="p mt-2 text-gray-700">
                All food images are original, created and photographed by me.
                Images are optimized using the picture tag for better
                performance.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                User-Focused Navigation
              </p>
              <p className="p mt-2 text-gray-700">
                Main sections include Menu, Recommendations, About Us, Contact
                Us, and Find Us—focused on helping users make decisions quickly.
              </p>
            </div>
            <div className="detail-section-item bg-whitish rounded-lg ">
              <h3 className="heading3 detail-card-title">Function</h3>
              <p className="p font-bold mt-4 text-gray-700">Add to Cart</p>
              <p className="p mt-2 text-gray-700">
                Each dish has a “+” button that adds the item to the cart. The
                total amount updates automatically in real time.
              </p>
              <p className="p font-bold mt-4 text-gray-700">Cart Management</p>
              <p className="p mt-2 text-gray-700">
                Users can edit or remove items from the cart before placing an
                order, offering full control over the order.
              </p>
              <p className="p font-bold mt-4 text-gray-700">Table Tracking</p>
              <p className="p mt-2 text-gray-700">
                When a user scans the QR code, their table number is saved in
                local storage so the system knows where the order is coming
                from.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                Local Storage Orders
              </p>
              <p className="p mt-2 text-gray-700">
                While no backend is connected yet, all orders and data are
                temporarily stored in local storage to simulate a full ordering
                system.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                Seamless Ordering Flow
              </p>
              <p className="p mt-2 text-gray-700">
                From scanning the QR code to browsing, selecting, and placing an
                order—everything happens in a smooth, intuitive flow for the
                customer.
              </p>
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
          <h2 className="heading2 detail-subtitle">
            Code Practices & Development Workflow
          </h2>
          <section className="detail-section">
            <div className="detail-section-item bg-whitish rounded-lg ">
              <h3 className="heading3 detail-card-title ">
                Clean, Efficient, and Scalable
              </h3>
              <p className="p font-bold mt-4 text-gray-700">
                Modular CSS with Bootstrap
              </p>
              <p className="p mt-2 text-gray-700">
                Utilized Bootstrap for responsive layout and UI components, with
                custom CSS to match the brand's visual identity.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                Responsive Images
              </p>
              <p className="p mt-2 text-gray-700">
                All food images were resized in Photoshop and implemented using
                the picture tag for faster loading and device-specific
                optimization.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                Mobile-First Approach
              </p>
              <p className="p mt-2 text-gray-700">
                Designed the layout starting with mobile to ensure the best
                performance and user experience on smartphones and smaller
                screens.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                Progressive Enhancement
              </p>
              <p className="p mt-2 text-gray-700">
                Built the core functionality to work even without JavaScript,
                layering in enhancements for modern browsers.
              </p>
            </div>
            <div className="detail-section-item bg-whitish rounded-lg ">
              <h3 className="heading3 detail-card-title">
                Organized and User-Focused
              </h3>
              <p className="p font-bold mt-4 text-gray-700">
                Interactive Features with JavaScript
              </p>
              <p className="p mt-2 text-gray-700">
                Used vanilla JavaScript and JS plugins for shopping cart
                functions, dynamic tabbed menus, and calculating totals.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                Local Storage Simulation
              </p>
              <p className="p mt-2 text-gray-700">
                Stored order data and table numbers in localStorage to simulate
                a backend system and maintain session state.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                QR Code Integration
              </p>
              <p className="p mt-2 text-gray-700">
                Created QR codes for each table that store a table number
                locally, allowing the system to identify orders by table.
              </p>
              <p className="p font-bold mt-4 text-gray-700">
                Version Control with Git
              </p>
              <p className="p mt-2 text-gray-700">
                Managed code changes and iterations through Git for an organized
                and trackable development process.
              </p>
              {/* <p className="p font-bold mt-4 text-gray-700">
                  Design-to-Code Workflow
                </p>
                <p className="p mt-2 text-gray-700">
                  Started with wireframes and mockups, then built functional
                  pages with consistent styling and interactive behavior.
                </p> */}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default DishOrdering;
