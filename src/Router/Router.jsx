import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Services />,
        loader: ()=> fetch('/service.json')
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/Blog',
        element: <Blog />
      },
    ]
  },

])