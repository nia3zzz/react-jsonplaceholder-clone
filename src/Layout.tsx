import Footer from "./components/Footer";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
