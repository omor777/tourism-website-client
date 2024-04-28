import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <main>
      <section >
        <div>
          <div className="shadow-md ">
            <Navbar />
          </div>
        </div>
        <div>
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default Root;
