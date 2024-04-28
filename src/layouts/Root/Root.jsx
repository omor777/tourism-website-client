import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  const { user, logoutUser } = useAuth();

  const navigator = useNavigate();
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigator("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {/* <label htmlFor="my-drawer" className="btn btn-secondary">Hello</label> */}
      <div id="my-drawer" className="drawer-content">
        <main>
          <section>
            <div>
              <div className="shadow-md fixed top-0 w-full z-[100] px-4 md:px-0">
                <Navbar />
              </div>
            </div>
            <div className="px-4 md:px-0">
              <Outlet />
            </div>
            <div>
              <Footer />
            </div>
          </section>
        </main>
        {/* Page content here */}
      </div>
      <div className="drawer-side z-[999]">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-80 min-h-full bg-base-200 text-base-content p-0  justify-between">
          {/* Sidebar content here */}
          <ul className="flex flex-col gap-6 items-center">
            <li className="text-3xl font-bold mt-4">Journey</li>
            <li className="mt-10">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold text-primary-main" : "font-medium"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold text-primary-main" : "font-medium"
                }
                to="/allTouristSpot"
              >
                AllTouristSpots
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold text-primary-main" : "font-medium"
                }
                to="/addTouristSpot"
              >
                AddTouristSpot
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold text-primary-main" : "font-medium"
                }
                to="/myList"
              >
                MyList
              </NavLink>
            </li>
          </ul>
          {/*  */}
          <div>
            {user ? (
              <div className="flex justify-center mb-8">
                <Link>
                  <button
                    onClick={handleLogout}
                    className="py-2.5 px-6 rounded-md bg-primary-main text-white text-center  font-semibold uppercase relative hover:bg-primary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45"
                  >
                    Logout
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center justify-center mb-8 gap-4">
                <Link to="/login">
                  <button className="py-2.5 px-6 rounded-md bg-primary-main text-white text-center  font-semibold uppercase relative hover:bg-primary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="py-2.5 px-6 rounded-md bg-secondary-main text-white text-center  font-semibold uppercase relative hover:bg-secondary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Root;
