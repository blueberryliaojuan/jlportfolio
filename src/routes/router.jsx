import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
// import Work from "@/pages/Work";
import Service from "@/pages/Service";
import Profile from "@/pages/Profile";
// import Experience from "@/pages/Profile/Experience";
// import Education from "@/pages/Profile/Education";
// import Skills from "@/pages/Profile/Skills";
// import About from "@/pages/Profile/About";
import ProjectList from "@/pages/Work/ProjectList";
import SufficientGrounds from "@/pages/Work/SufficientGrounds";
import DishOrdering from "@/pages/Work/DishOrdering";
import Ines from "@/pages/Work/Ines";
import Vgbc from "@/pages/Work/Vgbc";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/work",
    element: <ProjectList />,
  },
  {
    path: "/work/SufficientGrounds",
    element: <SufficientGrounds />,
  },
  {
    path: "/work/DishOrdering",
    element: <DishOrdering />,
  },
  {
    path: "/work/InesPianoAcademy",
    element: <Ines />,
  },
  {
    path: "/work/VGBC",
    element: <Vgbc />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "*",
    element: <NotFound />, // 404 page
  },
]);

export default router;
