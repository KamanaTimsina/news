

import React from 'react';
import Newsdetails from '../../Components/Home/NewsDetails/NewsDetail';
import Girl from '../../assets/Images/Breaking/Girl.jpg';
import Gadgets from '../../assets/Images/Breaking/Gadgets.jpg';
import Travel from '../../assets/Images/Breaking/Travel.jpg';
// import Immersive from '../assets/Images/Breaking/Immersive.jpg';
// import Destination from '../assets/Images/Breaking/Destination.jpg';
// import Computer from '../assets/Images/Breaking/Computer.jpg';
// import Adventures from '../assets/Images/Breaking/Adventures.jpg';

const breakingNews = [
  {
    id: 1,
    title: "Essential Gadgets for the Modern Professional",
    updatedDate: "2025-06-24T12:00:00Z",
    publishedBy: "News Desk",
    image: Gadgets,
    description: `The Koshi Province government has presented a budget of 35 billion 87 million 99 million for the upcoming fiscal year 2082/83.
    Minister for Economic Affairs and Planning Ram Bahadur Magar presented the estimate on Sunday. 
    18 billion 67 million 33 million has been allocated for current expenditure and 17 billion 10 million for capital expenditure.`
  },
  {
    id: 2,
    title: "Classic Pieces Every Wardrobe Needs",
    updatedDate: "2025-06-23T10:15:00Z",
    publishedBy: "Himalayan Times",
    image: Girl,
    description: `Authorities have issued flood warnings for the Terai region as heavy monsoon rains continue. 
    Citizens are advised to stay alert and follow official guidelines to ensure safety.`
  },
  {
    id: 3,
    title: "Discovering the world on your own",
    updatedDate: "2025-06-22T18:30:00Z",
    publishedBy: "Nepal News",
    image: Travel,
    description: `In a national address, the Prime Minister emphasized the importance of local hydropower development and energy exports to neighboring countries.`
  }
];

const BreakingData = () => {
  return (
    <div className="p-6 space-y-8">
      {breakingNews.map((news) => (
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

export default BreakingData;
