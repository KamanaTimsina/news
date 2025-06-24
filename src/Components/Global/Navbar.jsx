import React, { useState, useEffect, useRef } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Logo from '../../assets/Images/Navbar/Newslogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]); // ⬅ Dummy data state

  const dropdownRef = useRef(null);

  // Dummy data simulation
  useEffect(() => {
    // Simulate fetch delay
    setTimeout(() => {
      setCategories([
        { id: 1, name: 'Politics', slug: 'politics' },
        { id: 2, name: 'Education', slug: 'education' },
        { id: 3, name: 'Entertainment', slug: 'entertainment' },
        { id: 4, name: 'World', slug: 'world' },
        { id: 5, name: 'Games', slug: 'games' },
      ]);
    }, 500);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-white shadow-md">
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
          absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent z-20 
          flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 px-6 md:px-0 py-4 md:py-0 
          transition-all duration-300 shadow-md md:shadow-none font-semibold text-sm md:text-base lg:text-lg
          ${menuOpen ? 'block' : 'hidden md:flex'}
        `}>
          <li><Link to="/" className="block hover:text-red-500">Home</Link></li>

          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(prev => !prev)}
              className="flex items-center gap-1 hover:text-red-500"
            >
              Categories <IoIosArrowDown className="mt-0.5" />
            </button>

            {dropdownOpen && (
              <ul className="absolute left-0 top-10 bg-white border rounded-md shadow-lg z-30 w-44 py-2 text-sm ">
                {categories.map(category => (
                  <li key={category.id}>
                    <Link
                      to={`/categories/${category.slug}`}
                      className="block hover:bg-red-700 hover:text-white px-4 py-2"
                      onClick={() => {setDropdownOpen(false); setMenuOpen(false)}}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link to="/blogs" className="block hover:text-red-500" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
          <li><Link to="/about" className="block hover:text-red-500" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" className="block hover:text-red-500" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
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
