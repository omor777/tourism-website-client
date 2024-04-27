import { Link, NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  console.log(user);

  const navigator = useNavigate();
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigator("/login");
      })
      .catch((error) => console.error(error));
  };
  return (
    <header className=" py-5 shadow-nav">
      <nav className="container flex items-center justify-between">
        <Link
          to="/"
          className="bg-gradient-to-r from-blue-500 to-rose-500 bg-clip-text text-transparent font-bold text-3xl"
        >
          JourneyJo
        </Link>
        <ul className="hidden lg:flex items-center gap-7">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-primary-main"
                  : "font-medium relative before:w-0 before:h-0.5 before:bg-primary-main before:absolute before:-bottom-1 before:rounded hover:before:w-full before:transition-all before:duration-300"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-primary-main"
                  : "font-medium relative before:w-0 before:h-0.5 before:bg-primary-main before:absolute before:-bottom-1 before:rounded hover:before:w-full before:transition-all before:duration-300"
              }
              to="/allTouristSpot"
            >
              All Tourist Spot
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-primary-main"
                      : "font-medium relative before:w-0 before:h-0.5 before:bg-primary-main before:absolute before:-bottom-1 before:rounded hover:before:w-full before:transition-all before:duration-300"
                  }
                  to="/addTouristSpot"
                >
                  Add Tourist Spot
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-primary-main"
                      : "font-medium relative before:w-0 before:h-0.5 before:bg-primary-main before:absolute before:-bottom-1 before:rounded hover:before:w-full before:transition-all before:duration-300"
                  }
                  to="/myList"
                >
                  My List
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <div className="hidden lg:block">
          {user ? (
            <div className="flex items-center gap-5">
              <div>
                <img
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  className="size-12 rounded-full border-4 cursor-pointer border-primary-main"
                  src={user?.photoURL}
                />
                <Tooltip
                  style={{ backgroundColor: "#3B82F6", fontWeight: 600 }}
                  id="my-tooltip"
                />
              </div>
              <Link>
                <button
                  onClick={handleLogout}
                  className="py-2.5 px-6 rounded-md bg-primary-main text-white text-center text-lg font-semibold uppercase relative hover:bg-primary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45"
                >
                  Logout
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <button className="py-2.5 px-6 rounded-md bg-primary-main text-white text-center text-lg font-semibold uppercase relative hover:bg-primary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="py-2.5 px-6 rounded-md bg-secondary-main text-white text-center text-lg font-semibold uppercase relative hover:bg-secondary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
