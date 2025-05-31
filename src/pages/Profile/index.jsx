import Header from "@/components/layout/Header";

import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Specialties from "./Specialties";

function Profile() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <div className="block lg:hidden  ">
        <TabSlider tabs={tabs} paths={paths} />
      </div> */}

      <main className="flex flex-1  bg-gray-100">
        <div className="mx-auto max-w-screen-xl  w-full justify-between items-center ">
          <Experience />
          <Education />
          <Skills />
          <Specialties />
          <About />
        </div>
      </main>
    </div>
  );
}

export default Profile;
