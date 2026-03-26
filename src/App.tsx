import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import GuidesPage from "./pages/GuidesPage";
import ResourcesPage from "./pages/ResourcesPage";
import RoutesPage from "./pages/RoutesPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/global.css";
import Layout from "./Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: LandingPage },
        { path: "guides", Component: GuidesPage },
        { path: "resources", Component: ResourcesPage },
        { path: "routes", Component: RoutesPage },
        { path: "about-us", Component: AboutPage },
        { path: "*", Component: NotFoundPage },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
