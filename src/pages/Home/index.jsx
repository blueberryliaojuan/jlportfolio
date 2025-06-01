import Header from "@/components/layout/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClipboardCheck,
  faWrench,
  faCodeBranch,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

// import avatar from "@/assets/img/photo.jpg"; //
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
    <div className="flex flex-col min-h-screen pt-28">
      <Header />
      <main className="flex flex-1 flex-col bg-gray-100">
        <div className="flex-1 mx-auto max-w-screen-xl flex flex-col-reverse md:flex-row w-full justify-between items-center ">
          <div className="flex flex-col items-start justify-center  bg-gray-100  w-7/12 m-0 lg:m-24">
            {/* Title */}
            <h1 className=" heading2 text-klein-900 mb-4">Web Developer</h1>

            {/* Subtitle */}
            <div className="mb-6">
              <p className="heading1 font-happyMonkey text-stack-400 ">
                Hello I'm
              </p>
              <p className="heading1 font-happyMonkey text-klein-900 mb-4">
                Juan
              </p>
            </div>

            {/* Description */}
            <h4 className="heading4 text-stack-400  mt-0 lg:mt-16">
              Designing digital experiences, crafting visual stories.
            </h4>

            {/* Button */}
            <a
              href="/assets/cv.pdf"
              download
              className="flex items-center btn mt-4 lg:mt-8"
            >
              <FontAwesomeIcon icon={faDownload} className="w-6 h-6 " />
              Download my CV
            </a>
          </div>
          <div className="flex items-center justify-center w-5/12 m-16 md:m-24">
            <img
              className="h-40 w-40 md:w-48 md:h-48 lg:h-60 lg:w-60 xl:h-88 xl:w-88 rounded-full object-cover "
              src="/img/photo.jpg"
              alt="portrait"
            />
          </div>
        </div>
        <div className="py-12 px-8 sm:px-12 xl:px-0">
          <div className="container mx-auto max-w-screen-xl grid grid-cols-2 lg:grid-cols-4 gap-6 ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-xl"
              >
                <div className="roundIcon  bg-canary-300 text-klein-900 mb-4">
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className="text-klein-900 text-2xl"
                  />
                </div>
                <h2 className="heading3 text-klein-900">{stat.value}</h2>
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
