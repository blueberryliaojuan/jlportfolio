import AnimatedTitle from "@/components/common/AnimatedTitle.jsx";

const skills = [
  { name: "HTML", image: "/img/skills/Html.png" },
  { name: "CSS", image: "/img/skills/Css.png" },
  { name: "JavaScript", image: "/img/skills/JS.svg" },
  { name: "TypeScript", image: "/img/skills/Ts.png" },
  { name: "Vue.js", image: "/img/skills/Vue.png" },
  { name: "React", image: "/img/skills/React.png" },
  { name: "Node.js", image: "/img/skills/Node.png" },
  { name: "Sass", image: "/img/skills/Sass.png" },
  { name: "Tailwind", image: "/img/skills/Tailwind.png" },
  { name: "Bootstrap", image: "/img/skills/Bootstrap.png" },
  { name: "MySQL", image: "/img/skills/SQL.png" },
  { name: "Postman", image: "/img/skills/Postman.png" },
  { name: "GitHub", image: "/img/skills/Git.png" },
  { name: "Figma", image: "/img/skills/Figma.png" },
  { name: "Adobe Illustrator", image: "/img/skills/AI.png" },
  { name: "Adobe Photoshop", image: "/img/skills/PS.png" },
  { name: "Sketch", image: "/img/skills/Sketch.png" },
];

function Skills() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-12">
        <AnimatedTitle title="Core Skills" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-12  justify-center items-center p-4 lg:p-20 bg-whitish mt-8 rounded-lg">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-24 h-24 object-contain"
              />
              <p className="mt-2 text-md font-semibold text-gray-700">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Skills;
