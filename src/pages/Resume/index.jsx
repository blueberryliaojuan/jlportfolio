import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SideBar from "@/components/layout/SideBar";
import { Outlet } from "react-router-dom";

function Resume() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 bg-gray-100">
        <SideBar></SideBar>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Resume;
