import React, { useState, useEffect, useRef } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Logo from '../../assets/Images/Navbar/Newslogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const categoryRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setCategoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categories = [
    "Politics",
    "Province",
    "Sports",
    "Health",
    "Education",
    "Tourism",
    "More",
  ];

  return (
    <nav className="w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src={Logo} alt="News Logo" className="w-32 h-14 object-contain" />
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-2xl text-gray-600" />
            ) : (
              <FaBars className="text-2xl text-gray-600" />
            )}
          </button>
        </div>

        <ul className={`
          absolute md:static top-20 left-0 w-full md:w-auto bg-white z-20 
          flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 px-6 md:px-0 py-4 md:py-0 
          transition-all duration-300 shadow-md md:shadow-none font-semibold text-sm md:text-base lg:text-lg
          ${menuOpen ? 'block' : 'hidden md:flex'}
        `}>
          <li><a href="#" className="block hover:text-red-500">Home</a></li>

          {/* Category Dropdown */}
          <li className="relative" ref={categoryRef}>
            <button
              onClick={() => setCategoryOpen(prev => !prev)}
              className="flex items-center gap-1 hover:text-red-500"
            >
              Category <IoIosArrowDown />
            </button>

            {categoryOpen && (
              <ul className="absolute bg-white border shadow-md mt-2 w-40 rounded-md z-30 text-sm">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link to={"/contact"} className="block hover:text-red-500">Blog</Link></li>
          <li><a href="#" className="block hover:text-red-500">About Us</a></li>
          <li><Link to={"/contact"} className="block hover:text-red-500">Contact Us</Link></li>
          <li>
            <button onClick={() => setSearchOpen(!searchOpen)} className="hover:text-blue-500">
              <CiSearch className="text-2xl md:text-3xl text-gray-600" />
            </button>
          </li>
        </ul>
      </div>

      {searchOpen && (
        <div className="w-full flex justify-center py-3 bg-gray-100 shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
