import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [theme, setTheme] = useState("light");
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
    <div className="text-lg tracking-wider translate-x-[180px] leading-10 border shadow-xl border-text-slate-300 text-[#00040f] dark:text-slate-300 mt-5 max-w-[150px] p-3 rounded-lg hidden  bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] max-sm:block">
      <ul className="pl-2">
        <li>
          <a href="">
            <Link to={'/'}>Home</Link>
          </a>
        </li>
        <li>
          <a href="">
            <Link to={'/mybookshelf'}>Bookshelf</Link>
          </a>
        </li>
        
        <button
          className="text-xl font-semibold tracking-widest"
          onClick={handleTheme}
        >
          {theme === "dark" ? "Dark" : "Light"}
        </button>
      </ul>
    </div>
  );
};
export default Menu;
