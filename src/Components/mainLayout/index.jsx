import { Navbar } from "../NavBar";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className={`main-layout `}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
