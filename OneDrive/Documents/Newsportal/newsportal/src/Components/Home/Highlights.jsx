import React, { useState } from "react";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";

import Destination from "../../assets/Images/Highlights/Destination.jpg";
import Gadgets from "../../assets/Images/Highlights/Gadgets.jpg";
import Girl from "../../assets/Images/Highlights/Girl.jpg";

import Cute from "../../assets/Images/Latest/Cute.jpg";
import Joyful from "../../assets/Images/Latest/Joyful.jpg";
import Modeling from "../../assets/Images/Latest/Modeling.jpg";

const highlights = [
  {
    category: "Politics",
    title: "Government Announces New Policies",
    images: [Girl,Destination,Modeling],
  },
  {
    category: "Technology",
    title: "AI Revolution in Full Swing",
    images: [Destination,Joyful,Cute],
  },
  {
    category: "Sports",
    title: "Team Wins Championship After 20 Years",
    images: [Gadgets],
  },
];

const posts = [
  {
    id: 1,
    title: "Classic Pieces Every Wardrobe Needs",
    date: "June 25, 2024",
    image: Cute,
  },
  {
    id: 2,
    title: "The Ultimate Guide to Capsule Wardrobes",
    date: "June 25, 2024",
    image: Joyful,
  },
  {
    id: 3,
    title: "Must-Have Pieces for Summer 2024",
    date: "June 25, 2024",
    image: Modeling,
  },
];

const Highlight = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % highlights.length);
  const prev = () => setCurrent((prev) => (prev - 1 + highlights.length) % highlights.length);
  const { category, title, images } = highlights[current];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow-sm">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <span className="border-l-4 border-red-600 pr-2 mr-2 h-5" />
              Highlights
            </h2>
            <div className="flex gap-2">
              <button onClick={prev} className="text-3xl hover:text-red-500">
                <CiSquareChevLeft />
              </button>
              <button onClick={next} className="text-3xl hover:text-red-500">
                <CiSquareChevRight />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 items-center">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`highlight-${idx}`}
                className="w-full h-50 object-cover rounded"
              />
            ))}
            <div className="sm:col-span-3 mt-3">
              <span className="text-xl text-red-500 font-semibold">{category}</span>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <span className="border-l-4 border-red-600 pr-2 mr-2 h-5" />
              Latest Posts
            </h2>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              View All &rsaquo;
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-start gap-4 bg-white p-3 rounded-lg shadow-sm"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-md font-semibold">{post.title}</h3>
                  <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                    <FaCalendarAlt className="text-gray-400" />
                    {post.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
