import Header from "@/components/layout/Header";
import SideBar from "@/components/layout/SideBar";
import { Outlet } from "react-router-dom";
import TabSlider from "@/components/common/TabSlider";

function Resume() {
  const tabs = ["Experience", "Education", "Skills", "About"];
  const paths = [
    "/resume/Experience",
    "/resume/Education",
    "/resume/Skills",
    "/resume/About",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="block lg:hidden  ">
        <TabSlider tabs={tabs} paths={paths} />
      </div>

      <div className="lg:flex lg:flex-1 bg-gray-100">
        <div className="hidden lg:block ">
          <SideBar></SideBar>
        </div>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Resume;
