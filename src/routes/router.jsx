import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Work from "@/pages/Work";
import Service from "@/pages/Service";
import Resume from "@/pages/Resume";
import Experience from "@/pages/Resume/Experience";
import Education from "@/pages/Resume/Education";
import Skills from "@/pages/Resume/Skills";
import About from "@/pages/Resume/About";
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
    path: "",
    element: <Resume />,
    children: [
      { path: "/resume/experience", element: <Experience /> },
      { path: "/resume/education", element: <Education /> },
      { path: "/resume/skills", element: <Skills /> },
      { path: "/resume/about", element: <About /> },
    ],
  },
  {
    path: "/work",
    element: <Work />,
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
