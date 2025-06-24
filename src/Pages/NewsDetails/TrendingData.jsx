// src/Pages/NewsDetails/TrendingData.jsx

import React from 'react';
import Newsdetails from '../../Components/Home/NewsDetails/NewsDetail'; // adjust this path as needed

const trendingNews = [
  {
    id: 1,
    title: "Global Markets Rally as Tech Stocks Soar",
    updatedDate: "2025-06-23T14:30:00Z",
    publishedBy: "Reuters",
    image: "https://via.placeholder.com/600x400?text=Tech+Stocks",
    description: "Tech giants led a strong rally across global markets today, with NASDAQ posting its biggest single-day gain in over a year."
  },
  {
    id: 2,
    title: "Severe Heatwave Sweeps Across Europe",
    updatedDate: "2025-06-22T09:15:00Z",
    publishedBy: "BBC News",
    image: "https://via.placeholder.com/600x400?text=Heatwave+Europe",
    description: "Europe faces record-breaking temperatures as a severe heatwave grips the continent, prompting health warnings and emergency measures."
  },
  {
    id: 3,
    title: "AI Advancements Reshape Healthcare Industry",
    updatedDate: "2025-06-24T11:00:00Z",
    publishedBy: "The Verge",
    image: "https://via.placeholder.com/600x400?text=AI+Healthcare",
    description: "Artificial intelligence continues to transform healthcare, with new breakthroughs in diagnostics, treatment planning, and robotic surgery."
  },
  {
    id: 4,
    title: "NASA Unveils Plan for Lunar Habitat by 2030",
    updatedDate: "2025-06-21T17:45:00Z",
    publishedBy: "CNN",
    image: "https://via.placeholder.com/600x400?text=NASA+Lunar+Base",
    description: "NASA has revealed its ambitious plans to establish a sustainable lunar habitat by 2030, marking a new era of space exploration."
  },
  {
    id: 5,
    title: "New Study Links Urban Green Spaces to Mental Health",
    updatedDate: "2025-06-20T08:00:00Z",
    publishedBy: "National Geographic",
    image: "https://via.placeholder.com/600x400?text=Green+Spaces",
    description: "A new study shows that people living near urban green spaces experience significantly lower levels of stress and anxiety."
  }
];

const TrendingData = () => {
  return (
    <div className="p-6 space-y-8">
      {trendingNews.map((news) => (
        <Newsdetails
          key={news.id}
          title={news.title}
          updatedDate={news.updatedDate}
          publishedBy={news.publishedBy}
          image={news.image}
          description={news.description}
          commentsData={[]}
        />
      ))}
    </div>
  );
};

export default TrendingData;
