import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Correctly importing NavLink

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <div className="container mx-auto">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          {/* Logo Section */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
              className="h-24"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WEB</span>
          </a>

          {/* Button to toggle the dropdown menu on smaller screens */}
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isDropdownOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          <div
            className={`w-full md:block md:w-auto ${isDropdownOpen ? 'block' : 'hidden'}`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <NavLink
                  to="/todolist"
                  className={({ isActive }) =>
                    `text-center block py-2 px-3 text-gray-900 rounded hover:bg-none md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                      isActive ? 'active' : 'hover:underline hover:underline-offset-8 hover:decoration-4 md:hover:text-green-500'
                    }`
                  }
                  onClick={closeDropdown}
                >
                  To Do List
                </NavLink>
                <NavLink
                  to="/statecityselector"
                  className={({ isActive }) =>
                    `text-center block py-2 px-3 text-gray-900 rounded hover:bg-none md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                      isActive ? 'active' : 'hover:underline hover:underline-offset-8 hover:decoration-4 md:hover:text-green-500'
                    }`
                  }
                  onClick={closeDropdown}
                >
                  State Selector
                </NavLink>
                <NavLink
                  to="/postselector"
                  className={({ isActive }) =>
                    `text-center block py-2 px-3 text-gray-900 rounded hover:bg-none md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                      isActive ? 'active' : 'hover:underline hover:underline-offset-8 hover:decoration-4 md:hover:text-green-500'
                    }`
                  }
                  onClick={closeDropdown}
                >
                  Post Selector
                </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
