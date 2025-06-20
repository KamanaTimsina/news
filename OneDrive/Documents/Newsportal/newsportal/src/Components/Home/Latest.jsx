import React from "react";
import Cute  from "../../assets/Images/Latest/Cute.jpg";
import Joyful from "../../assets/Images/Latest/Joyful.jpg";
import Modeling from "../../assets/Images/Latest/Modeling.jpg";
import { FaCalendarAlt } from "react-icons/fa";

const posts = [
  { id: 1, title: "Classic Pieces Every Wardrobe Needs", date: "June 25, 2024", image: Cute },
  { id: 2, title: "The Ultimate Guide to Capsule Wardrobes", date: "June 25, 2024", image: Joyful },
  { id: 3, title: "Must-Have Pieces for Summer 2024", date: "June 25, 2024", image: Modeling },
];

const Latest = () => {
  return (
    <div className="bg-[#f5f6ff] p-6 mx-auto max-w-8xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center">
          <span className="border-l-4 border-red-600 pr-2 mr-2 h-5" />
          Latest Posts
        </h2>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          View All &rsaquo;
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="flex items-start gap-4 bg-white p-3 rounded-lg shadow-md">
            <img src={post.image} alt={post.title} className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 object-cover rounded-md" />
            <div>
              <h3 className="text-md sm:text-lg font-semibold leading-snug">{post.title}</h3>
              <div className="text-sm sm:text-md text-gray-500 flex items-center gap-2 mt-2">
                <FaCalendarAlt className="text-gray-400" />
                {post.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
