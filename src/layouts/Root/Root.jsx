import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <main>
      <div >
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default Root;
