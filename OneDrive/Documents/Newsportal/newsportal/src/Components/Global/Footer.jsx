import React from 'react';
import Girl from '../../assets/Images/Footer/Girl.jpg';
import Destination from '../../assets/Images/Footer/Destination.jpg';
import Adventures from '../../assets/Images/Footer/Adventures.jpg';
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const articles = [
  { id: 1, text: "Classic Pieces Every Wardrobe Needs", title: "Fashion", category: "Needs", image: Girl, large: true },
  { id: 2, text: "Tips for Affordable Adventures", title: "Fashion", category: "Wardrobes", image: Adventures },
  { id: 3, text: "The Ultimate Guide to the Best New Tech", title: "Fashion", category: "2024", image: Destination },
];

function Footer() {
  return (
    <div className="bg-black text-white py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
        
        <div className="flex flex-col">
          <h1 className="text-xl border-l-4 border-red-500 pl-4 mb-4">About Us</h1>
          <p className="text-base max-w-md">
            Blaze Themes' collection of professional WordPress themes bring your ideas to life. Designed with improved UI & UX and additional advanced features to manage your WordPress website with ease.
          </p>
          <div className="flex gap-4 mt-5 text-3xl">
            <ImFacebook2 className="text-blue-400" />
            <FaInstagram className="text-sky-500" />
            <FaSquareXTwitter className="text-red-400" />
          </div>
        </div>

        <div>
          <h1 className="text-xl border-l-4 border-red-500 pl-4 mb-4">Our Picks</h1>
          {articles.map((article) => (
            <div key={article.id} className="flex items-center gap-4 bg-gray-800 p-3 rounded-md mb-4">
              <img src={article.image} alt={article.title} className="w-24 h-24 object-cover rounded-md" />
              <div>
                <h2 className="text-sm font-bold">{article.text}</h2>
                <p className="text-xs text-gray-400">{article.category}</p>
                <p className="text-md text-gray-300">{article.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-xl border-l-4 border-red-500 pl-4 mb-4">Most Popular</h1>
          {articles.map((article) => (
            <div key={article.id} className="flex items-center gap-4 bg-gray-800 p-3 rounded-md mb-4">
              <img src={article.image} alt={article.title} className="w-24 h-24 object-cover rounded-md" />
              <div>
                <h2 className="text-sm font-bold">{article.text}</h2>
                <p className="text-xs text-gray-400">{article.category}</p>
                <p className="text-md text-gray-300">{article.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-gray-500 mt-10">&copy; 2025 Youth IT. All rights reserved.</p>
    </div>
  );
}

export default Footer;
