import { Link } from "react-router-dom";
import AnimatedTitle from "@/components/common/AnimatedTitle.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    id: 1,
    title: "Web Development",
    items: [
      "Proficient in HTML, CSS, JavaScript, Vue and React",
      "Experience building responsive, scalable web applications",
      "Skilled in debugging, API integrations, and performance optimization",
      "Proficient in building backends using Node.js, with experience in backend tools and databases such as MySQL",
      "Experience with SEO optimization",
    ],
  },
  {
    id: 2,
    title: "UI/UX Design and Others",
    items: [
      "Proficient in Figma, Adobe",
      "Expertise in wireframing, prototyping, and user research",
      "Experience with branding design",
      "Skills in video and graphic animation using After Effects",
    ],
  },
];

const Specialties = () => {
  return (
    <div className="mt-24">
      <AnimatedTitle title="Specialties" />
      <section className=" bg-gray-100">
        <div className="container text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-8 lg:m-16">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-whitish rounded-2xl p-8 lg:p-16 text-left flex flex-col "
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="roundIcon  bg-canary-300 text-klein-900 font-bold">
                    {service.id < 10 ? `0${service.id}` : service.id}
                  </div>
                  <h3 className="text-2xl font-bold text-klein-900">
                    {service.title}
                  </h3>
                </div>
                <ul className="flex-1 space-y-3 text-stack-400 mb-4">
                  {service.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-base"
                    >
                      <span className="text-canary-300 text-xl">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Specialties;
