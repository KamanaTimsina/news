import React from "react";
import Adventures from '../../assets/Images/Article/Adventures.jpg'
import Girl from '../../assets/Images/Article/Girl.jpg'
import Destination from '../../assets/Images/Article/Destination.jpg'
import Travel from '../../assets/Images/Article/Travel.jpg'
import Immersive from '../../assets/Images/Article/Immersive.jpg'


const articles = [
  {
    id: 1,
    title: "Classic Pieces Every Wardrobe Needs",
    date: "June 25, 2024",
    category: "Fashion",
    image: Girl,  
    large: true,
  },
  {
    id: 2,
    title: "Tips for Affordable Adventures",
    date: "June 25, 2024",
    image: Adventures,
  },
  {
    id: 3,
    title: "The Ultimate Guide to the Best New Tech",
    date: "June 25, 2024",
    image: Destination,
  },
  {
    id: 4,
    title: "The Ultimate Guide to Capsule Wardrobes",
    date: "June 25, 2024",
    image: Immersive,
  },
  {
    id: 5,
    title: "The Hottest Tech Trends and Devices",
    date: "June 25, 2024",
    image: Travel,
  },
];

const ArticleCard = ({ article }) => {
  return (
    <div
      className={`relative rounded-md overflow-hidden ${
        article.large ? "h-[500px]" : "h-[240px]"
      }`}
    >
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-end p-4">
        <div className="text-white space-y-1">
          {article.category && (
            <span className="bg-indigo-800 text-xs font-semibold px-2 py-1 rounded">
              {article.category}
            </span>
          )}
          <p className="text-">{article.date}</p>
          <h2 className="font-semibold text-lg leading-snug">{article.title}</h2>
        </div>
      </div>
    </div>
  );
};

const HeroNewsGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6">
      <div className="col-span-1 lg:col-span-1">
        <ArticleCard article={articles[0]} />
      </div>

      <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-4">
        {articles.slice(1, 5).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default HeroNewsGrid;
