import { FaBars } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
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
    <header className="py-5 bg-white">
      <nav className="container flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold">
          Journey<span className="text-primary-main">Joy</span>
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
              AllTouristSpots
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-primary-main"
                  : "font-medium relative before:w-0 before:h-0.5 before:bg-primary-main before:absolute before:-bottom-1 before:rounded hover:before:w-full before:transition-all before:duration-300"
              }
              to="/addTouristSpot"
            >
              AddTouristSpot
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
              MyList
            </NavLink>
          </li>
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
        <div className="flex items-center gap-4 lg:hidden">
          {user && (
            <>
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                className="size-10 rounded-full border-4 cursor-pointer border-primary-main"
                src={user?.photoURL}
              />
              <Tooltip
                style={{ backgroundColor: "#3B82F6", fontWeight: 600 }}
                id="my-tooltip"
              />
            </>
          )}
          <label htmlFor="my-drawer">
            <FaBars className="text-2xl cursor-pointer" />
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
