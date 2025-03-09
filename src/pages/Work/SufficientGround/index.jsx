import React from "react";
import Header from "@/components/layout/Header";
const SufficientGround = () => {
  return (
    <>
      <Header></Header>
      <main className="flex-1 font-sans bg-gray-50 text-gray-900">
        {/* Header Section */}
        <header className="bg-white shadow-md py-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">Front-End Project</h1>
              <h2 className="text-xl text-blue-600">Coffee Shop Website</h2>
              <p className="mt-2 text-gray-600">
                Contributors: Juan - Web Developer, Project Manager; Mihaila -
                Graphic Designer
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-yellow-300 px-4 py-2 rounded-lg text-gray-900 font-medium mr-2">
                Live Demo
              </button>
              <button className="bg-gray-900 px-4 py-2 rounded-lg text-white font-medium">
                Github
              </button>
            </div>
          </div>
        </header>

        {/* Overview Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Overview</h3>
            <p className="max-w-3xl mx-auto text-gray-700">
              The project aimed to create a responsive website for a coffee
              shop, consisting of six key pages: Home, About, Menu, Products,
              How to Brew, and Contact. Each page introduces the brand and
              highlights key offerings, with a focus on user experience and
              responsiveness. The design emphasizes consistency, accessibility,
              and ease of use.
            </p>
          </div>
        </section>

        {/* Features & Functionality Section */}
        <section className="py-12">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              Features & Functionality
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Feature</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Intuitive Navigation</li>
                  <li>Mobile Responsiveness</li>
                  <li>Easy-to-Read Content</li>
                  <li>Consistent Branding</li>
                </ul>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Function</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Menu Display</li>
                  <li>Contact Form</li>
                  <li>How to Brew Section</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Code Practices Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8">
              Code Practices & Development Workflow
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">
                  Organization & Efficiency
                </h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>CSS Optimization</li>
                  <li>Reusable Functions</li>
                  <li>Data Management</li>
                </ul>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">
                  Development Workflow
                </h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Version Control</li>
                  <li>Debugging and Testing</li>
                  <li>Task Management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Agile Methodology Section */}
        <section className="py-12">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Agile Methodology</h3>
            <p className="max-w-3xl mx-auto text-gray-700">
              The project followed Agile principles to ensure iterative
              development and continuous collaboration. Weekly sprints were used
              to break down the project into manageable tasks, prioritize
              features, and maintain progress. Regular meetings fostered
              seamless communication between the designer and developer,
              ensuring alignment with user needs and project goals. Feedback
              loops allowed for quick adjustments, resulting in a more
              user-focused and polished website.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default SufficientGround;
