import Header from "@/components/layout/Header";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Specialties from "./Specialties";
import SideBar from "@/components/layout/SideBar";

function Profile() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="flex  relative pt-28">
        {/* 电梯导航菜单 */}
        <div className="w-44 fixed top-40 left-2 z-10">
          <SideBar />
        </div>

        <div className="mx-auto max-w-screen-xl w-full justify-between items-center">
          <section id="section0">
            <Experience />
          </section>
          <section id="section1">
            <Education />
          </section>
          <section id="section2">
            <Skills />
          </section>
          <section id="section3">
            <Specialties />
          </section>
          <section id="section4">
            <About />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Profile;
