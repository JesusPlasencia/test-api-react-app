import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, [])

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      'theme',
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
    setDarkMode(!darkMode);
  };

  return (
    <nav className="mx-auto flex max-w-screen-2xl items-center justify-between p-6 lg:px-8">
      {/* Left Side */}
      <div className="flex items-center gap-10">
        <NavLink
          to="/"
          className="flex items-center space-x-2 text-xl hover:text-gray-200"
        >
          <span>Movies</span>
        </NavLink>
        <NavLink
          to="/shows"
          className="flex items-center space-x-2 text-xl hover:text-gray-200"
        >
          <span>Shows</span>
        </NavLink>
        <NavLink
          to="/tv"
          className="flex items-center space-x-2 text-xl hover:text-gray-200"
        >
          <span>Tv</span>
        </NavLink>
      </div>
      <div className="flex items-center gap-6">
        {/* Search Icon (without input field) */}
        <button className="flex items-center justify-center w-10 h-10 bg-gray-900 dark:bg-indigo-500 text-white rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 3a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM15 15l4.5 4.5" />
          </svg>
        </button>
        <button
          onClick={toggleDarkMode}
          className="ml-auto flex items-center justify-center w-10 h-10 bg-gray-900 dark:bg-indigo-500 text-white dark:text-black rounded-full"
        >
          {darkMode ? (
            // Moon icon for dark mode
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path d="M21.64 13.13a1 1 0 0 0-1.15-.27A7 7 0 0 1 13.13 3.5a1 1 0 0 0-.27-1.15 1 1 0 0 0-1.09-.19A9 9 0 1 0 22 14.22a1 1 0 0 0-.36-1.09z" />
            </svg>
          ) : (
            // Sun icon for light mode
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;