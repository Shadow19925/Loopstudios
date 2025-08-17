import { Outlet } from "react-router";
import NavBar from "../navBar/navBar"; // Adjust the import path as necessary
import Footer from "../footer/Footer";

export default function AppLayout() {
  return (
    <div>
      <NavBar />

      <div className="app-layout-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
