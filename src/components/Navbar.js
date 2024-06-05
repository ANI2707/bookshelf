import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");

  const location = useLocation();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <section className="p-5 mx-20 mt-5  max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px] ">
        <div className="flex items-center justify-center gap-20 capitalize ">
          <div className="">
            <a
              href=""
              className="font-semibold text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl"
            >
              <Link to={"/"}>{"BooksDoor"}</Link>
            </a>
          </div>
          <div className="text-[20px] translate-x-[80px] max-sm:hidden flex justify-between  gap-12 text-[#00040f] dark:text-[#e1e1e1] ">
            {location.pathname !== "/mybookshelf" && (
              <a
                href=""
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Link to={"/mybookshelf"}>My Bookshelf</Link>
              </a>
            )}

            <button onClick={handleTheme}>
              {theme === "dark" ? (
                <HiMoon className="-translate-y-1 text-2xl" />
              ) : (
                <HiSun className="-translate-y-1 text-2xl" />
              )}
            </button>
          </div>

          <button onClick={() => setNav(!nav)}>
            <CgMenuRightAlt className="hidden max-sm:block text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
          </button>
        </div>
        {nav && <Menu />}
      </section>
    </>
  );
};
export default Navbar;
