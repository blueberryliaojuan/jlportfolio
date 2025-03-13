import Header from "@/components/layout/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClipboardCheck,
  faWrench,
  faCodeBranch,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
const home = () => {
  const stats = [
    {
      icon: faUser,
      value: "5 +",
      label: "Years of Experience",
    },
    {
      icon: faClipboardCheck,
      value: "10 +",
      label: "Projects Completed",
    },
    {
      icon: faWrench,
      value: "10 +",
      label: "Technologies Mastered",
    },
    {
      icon: faCodeBranch,
      value: "1000 +",
      label: "Code Commits",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-100">
        <div className="flex w-full justify-between items-center py-12">
          <div className="flex flex-col items-start justify-center  bg-gray-100 p-4 pl-60 w-7/12">
            {/* Title */}
            <h1 className="text-4xl font-bold text-klein-900 mb-4">
              Front-End Developer
            </h1>

            {/* Subtitle */}
            <div className="mb-6">
              <p className="text-5xl font-light text-stack-400 ">Hello I'm</p>
              <p className="text-6xl font-bold text-klein-900 ">Juan</p>
            </div>

            {/* Description */}
            <p className="text-lg text-stack-400 mb-8">
              Designing digital experiences, crafting visual stories.
            </p>

            {/* Button */}
            <a
              href="/path-to-your-cv.pdf"
              download
              className="flex items-center gap-2 bg-canary-300 text-klein-900 font-semibold py-2 px-6 rounded-full hover:bg-canary-400"
            >
              <FontAwesomeIcon icon={faDownload} className="w-6 h-6" />
              Download my CV
            </a>
          </div>
          <div className="flex items-center justify-center w-5/12">
            <img src="/assets/images/logo.png" alt="" className="h-24 w-24" />
          </div>
        </div>
        <div className="py-12">
          <div className="container mx-auto max-w-screen-xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-xl"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-canary-300 rounded-full mb-4">
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className="text-klein-900 text-xl"
                  />
                </div>
                <h2 className="text-3xl font-bold text-klein-900">
                  {stat.value}
                </h2>
                <p className="text-stack-400 text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
export default home;
