import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("logout successful");
      })
      .catch((error) => console.error(error));
  };
  return (
    <header className=" py-5">
      <nav className="container flex items-center justify-between">
        <h3 className="text-3xl font-bold text-primary-dark font-rancho">
          Explore<span>Echo</span>
        </h3>
        <ul className="flex items-center gap-7">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-primary-main"
                  : "text-lg font-medium relative before:w-0 before:h-0.5 before:bg-primary-main before:absolute before:-bottom-1 before:rounded hover:before:w-full before:transition-all before:duration-300"
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
                  : "text-lg font-medium relative before:w-0 before:h-0.5 before:bg-primary-main before:absolute before:-bottom-1 before:rounded hover:before:w-full before:transition-all before:duration-300"
              }
              to="/allTouristSpot"
            >
              All Tourist Spot
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-primary-main"
                  : "text-lg font-medium relative before:w-0 before:h-0.5 before:bg-primary-main before:absolute before:-bottom-1 before:rounded hover:before:w-full before:transition-all before:duration-300"
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
                  : "text-lg font-medium relative before:w-0 before:h-0.5 before:bg-primary-main before:absolute before:-bottom-1 before:rounded hover:before:w-full before:transition-all before:duration-300"
              }
              to="/myList"
            >
              My List
            </NavLink>
          </li>
        </ul>
        {user ? (
          <Link>
            <button
              onClick={handleLogout}
              className="py-2.5 px-6 rounded-md bg-primary-main text-white text-center text-lg font-semibold uppercase relative hover:bg-primary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45"
            >
              Logout
            </button>
          </Link>
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
      </nav>
    </header>
  );
};

export default Navbar;
