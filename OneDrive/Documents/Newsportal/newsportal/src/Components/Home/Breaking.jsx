import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { FaDotCircle } from "react-icons/fa";

import Girl from '../../assets/Images/Breaking/Girl.jpg';
import Gadgets from '../../assets/Images/Breaking/Gadgets.jpg';
import Travel from '../../assets/Images/Breaking/Travel.jpg';
import Immersive from '../../assets/Images/Breaking/Immersive.jpg';
import Destination from '../../assets/Images/Breaking/Destination.jpg';
import Computer from '../../assets/Images/Breaking/Computer.jpg';
import Adventures from '../../assets/Images/Breaking/Adventures.jpg';

import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

function Breaking() {
  const [showDot, setShowDot] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => 
      
     3000);
    return () => clearTimeout(timer);
  }, []);

  const articles = [
    { id: 1, title: 'Essential Gadgets for the Modern Professional', date: 'June 25, 2024', image: Gadgets },
    { id: 2, title: 'Classic Pieces Every Wardrobe Needs', date: 'June 25, 2024', image: Girl },
    { id: 3, title: 'Discovering the world on your own', date: 'June 25, 2024', image: Travel },
    { id: 4, title: 'Tips for affordable adventures', date: 'June 25, 2024', image: Adventures },
    { id: 5, title: 'Family destination for 2024', date: 'June 25, 2024', image: Destination },
    { id: 6, title: 'Immersive Experiences: What to Expect', date: 'June 25, 2024', image: Immersive },
    { id: 7, title: 'Work Smart: Tech for Remote Success', date: 'June 25, 2024', image: Computer }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const ArticleCard = ({ article }) => (
    <div className="p-2 " onClick={handleClick}>
      <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col sm:flex-row  items-start gap-4 p-4 h-full cursor-pointer">
        <img src={article.image} alt={article.title} className="w-full sm:w-32 h-32 object-cover rounded" />
        <div>
          <p className="text-gray-500 text-sm flex items-center mb-1">
            <span className="mr-2">🗓</span> {article.date}
          </p>
          <h2 className="font-semibold text-base">{article.title}</h2>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-5 m-9 bg-gray-100  mx-auto ">
      <div className="bg-red-700 w-fit px-3 py-2 text-white text-lg flex items-center gap-2 mb-6 rounded-lg ">
        {showDot && <FaDotCircle className="animate-pulse" />}
        Breaking News
      </div>

      <Slider ref={sliderRef} {...settings}>
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </Slider>
    </div>
  );
}

export default Breaking;
