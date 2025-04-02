import React from "react";
import Header from "@/components/layout/Header";

const projectData = {};
const SufficientGround = () => {
  return (
    <>
      <Header></Header>
      <main className="flex-1 bg-gray-100 min-h-screen  ">
        <div className=" py-12 ">
          {/* Hero Section */}
          <section className=" p-12 flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/laptop-mockup.png"
                alt="Project Preview"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left p-6">
              <h3 className="text-lg font-bold text-gray-700">
                Front-End Project
              </h3>
              <h1 className="text-4xl font-bold text-blue-600">
                Coffee Shop Website
              </h1>
              <p className="text-gray-500 mt-2">
                Contributors: <span className="font-semibold">Juan</span> - Web
                Developer, Project Manager
                <br /> Mikhaïla - Graphic Designer
              </p>
              <div className="flex gap-2 mt-4">
                <span className="border-2 border-blue-600 text-blue-600 px-4 py-1 rounded-full">
                  HTML
                </span>
                <span className="border-2 border-blue-600 text-blue-600 px-4 py-1 rounded-full">
                  CSS
                </span>
                <span className="border-2 border-blue-600 text-blue-600 px-4 py-1 rounded-full">
                  Vanilla JS
                </span>
                <span className="border-2 border-blue-600 text-blue-600 px-4 py-1 rounded-full">
                  AGILE
                </span>
              </div>
              <div className="mt-6 flex gap-4">
                <button className="bg-yellow-300 text-blue-600 font-bold px-6 py-2 rounded-xl shadow-md">
                  Live Demo
                </button>
                <button className="bg-yellow-300 text-blue-600 font-bold px-6 py-2 rounded-xl shadow-md">
                  Github
                </button>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="max-w-5xl mx-auto my-12 p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold text-blue-600">Overview</h2>
            <p className="mt-4 text-gray-700">
              The project aimed to create a responsive website for a coffee
              shop, consisting of six key pages: Home, About, Menu, Products,
              How to Brew, and Contact. Each page was designed with user
              experience in mind, ensuring easy navigation and accessibility
              across devices.
            </p>
          </section>

          {/* Features & Functionality */}
          <section className="max-w-5xl mx-auto my-12 p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold text-blue-600">
              Features & Functionality
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="text-blue-600 font-bold">
                  Intuitive Navigation
                </h3>
                <p>
                  The website features a clear menu structure for easy
                  navigation.
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="text-blue-600 font-bold">
                  Mobile Responsiveness
                </h3>
                <p>The site is fully responsive for all devices.</p>
              </div>
            </div>
          </section>

          {/* Code Practices & Workflow */}
          <section className="max-w-5xl mx-auto my-12 p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold text-blue-600">
              Code Practices & Development Workflow
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="text-blue-600 font-bold">CSS Optimization</h3>
                <p>Used CSS variables for consistent styling.</p>
              </div>
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="text-blue-600 font-bold">Version Control</h3>
                <p>Tracked changes using Git and GitHub.</p>
              </div>
            </div>
          </section>

          {/* Agile Methodology */}
          <section className="max-w-5xl mx-auto my-12 p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold text-blue-600">
              Agile Methodology
            </h2>
            <p className="mt-4 text-gray-700">
              The project followed Agile principles, ensuring iterative
              development and collaboration.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default SufficientGround;
