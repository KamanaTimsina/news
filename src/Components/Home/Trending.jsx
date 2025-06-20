import React from 'react';
import Marquee from 'react-fast-marquee';
import { SiHiveBlockchain } from "react-icons/si";

import Girl from '../../assets/Images/Trending/Girl.jpg';
import Computer from '../../assets/Images/Trending/Computer.jpg';
import Travel from '../../assets/Images/Trending/Travel.jpg';
import Gadgets from '../../assets/Images/Trending/Gadgets.jpg';
import Destination from '../../assets/Images/Trending/Destination.jpg';
import Adventures from '../../assets/Images/Trending/Adventures.jpg';
import Immersive from '../../assets/Images/Trending/Immersive.jpg';

const posts = [
  { id: 1, title: 'Classic Pieces Every Wardrobe Needs', date: 'June 25, 2024', image: Girl },
  { id: 2, title: 'The Ultimate Guide to Capsule Wardrobes', date: 'June 25, 2024', image: Computer },
  { id: 3, title: 'Must-Have Pieces for Summer 2024', date: 'June 25, 2024', image: Destination },
  { id: 4, title: 'Smart Gadgets for Daily Productivity', date: 'June 25, 2024', image: Gadgets },
  { id: 5, title: 'Affordable Adventures in 2024', date: 'June 25, 2024', image: Adventures },
  { id: 6, title: 'Immersive Travel Experiences', date: 'June 25, 2024', image: Immersive },
  { id: 7, title: 'Solo Travel Made Easy', date: 'June 25, 2024', image: Travel },
];

const Trending = () => {
  return (
    <div className="py-8 p-6 bg-gray-100 m-2 mx-auto max-w-8xl">
      <h2 className="bg-red-700 w-fit px-3 py-2 text-white text-lg flex items-center gap-2 mb-6 rounded-lg">
        <SiHiveBlockchain /> Trending Posts
      </h2>

      <Marquee pauseOnHover speed={50} gradient={false}>
        {posts.map((post) => (
          <div
            key={post.id}
            className="min-w-[200px] sm:min-w-[220px] md:min-w-[250px] lg:min-w-[300px] max-w-sm mx-3 bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img src={post.image} alt={post.title} className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-t-xl" />
            <div className="p-4">
              <h3 className="text-sm sm:text-md font-semibold mb-1">{post.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Trending;
