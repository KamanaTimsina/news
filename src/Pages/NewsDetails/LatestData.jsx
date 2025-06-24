// src/Pages/NewsDetails/LatestData.jsx

import React from 'react';
import Newsdetails from '../../Components/Home/NewsDetails/NewsDetail';

const latestNews = [
  {
    id: 1,
    title: "Electric Vehicles Sales Hit All-Time High",
    updatedDate: "2025-06-24T09:00:00Z",
    publishedBy: "Bloomberg",
    image: "https://via.placeholder.com/600x400?text=EV+Sales",
    description: `Global electric vehicle sales surged in the second quarter of 2025, 
    driven by new incentives and increasing fuel prices.`
  },
  {
    id: 2,
    title: "Cyberattack Targets Major Financial Institutions",
    updatedDate: "2025-06-23T20:15:00Z",
    publishedBy: "Forbes",
    image: "https://via.placeholder.com/600x400?text=Cyberattack",
    description: `Several financial institutions reported disruptions following a large-scale cyberattack, 
    with investigations underway by cybersecurity experts.`
  },
  {
    id: 3,
    title: "Nepal Hosts Regional Climate Summit",
    updatedDate: "2025-06-22T13:45:00Z",
    publishedBy: "Republica",
    image: "https://via.placeholder.com/600x400?text=Climate+Summit",
    description: `Leaders from South Asia gathered in Kathmandu to discuss regional climate initiatives 
    and sustainable development strategies.`
  }
];

const LatestData = () => {
  return (
    <div className="p-6 space-y-8">
      {latestNews.map((news) => (
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

export default LatestData;
