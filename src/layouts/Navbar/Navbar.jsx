import { useEffect, useState } from "react";
import { FaBars, FaMoon } from "react-icons/fa6";
import { MdWbSunny } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useAuth from "../../hooks/useAuth";
import { getThemeFromLs, setThemeToLs } from "../../utils/theme";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const { user, logoutUser } = useAuth();

  const navigator = useNavigate();
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigator("/login");
      })
      .catch((error) => console.error(error));
  };

  const handleTheme = (e) => {
    const theme = getThemeFromLs();
    if (theme === "light") {
      setThemeToLs("dark");
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (theme === "dark") {
      setTheme("light");
      setThemeToLs("light");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      setThemeToLs("dark");
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };

  useEffect(() => {
    setTheme(getThemeFromLs());

    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [theme]);

  return (
    <header className="py-5 bg-base-100">
      <nav className="container flex items-center justify-between">
        <Link to="/" className="text-xl md:text-3xl font-bold">
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
              AllTouristsSpot
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
              AddTouristsSpot
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

        <div className="flex items-center gap-5 ">
          {/* theme control */}
          <div className="-mb-1">
            <button onClick={handleTheme}>
              {theme === "light" ? (
                <FaMoon className="text-3xl" />
              ) : theme === "dark" ? (
                <MdWbSunny className="text-3xl" />
              ) : (
                <FaMoon className="text-3xl" />
              )}
            </button>
          </div>
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
