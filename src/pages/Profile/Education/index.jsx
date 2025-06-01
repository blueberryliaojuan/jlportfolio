import AnimatedTitle from "@/components/common/AnimatedTitle.jsx";
function Education() {
  const academicDetails = [
    {
      date: "2024.05-2025.12",
      title: "New Media Design and Web Development",
      institution: "BCIT (Vancouver, BC)",
    },
    {
      date: "2019.09-2020.06",
      title: "Front-End Development",
      institution: "GuoXinAn Information Industry Base (Chengdu, China)",
    },
    {
      date: "1998.09-2001.06",
      title: "Computer Application and Maintenance",
      institution:
        "University of Shanghai for Science and Technology (Shanghai, China)",
    },
  ];

  return (
    <div className="bg-gray-100 mt-24 mb-24">
      <div className="container mx-auto">
        <AnimatedTitle title="Education" />
        <div className="space-y-6 mt-8">
          {academicDetails.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg  w-3/5">
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h3 className="text-lg font-semibold text-blue-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Education;
