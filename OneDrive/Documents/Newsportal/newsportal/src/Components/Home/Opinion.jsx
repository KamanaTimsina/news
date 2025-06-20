import React from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";
import Travel from '../../assets/Images/Opinion/Travel.jpg';
import Computer from '../../assets/Images/Opinion/Computer.jpg';
import Gadgets from '../../assets/Images/Opinion/Gadgets.jpg';
import Immersive from '../../assets/Images/Opinion/Immersive.jpg';

const articles = [
  {
    id: 1,
    text: "The power of social media is it forces necessary changes",
    category: "Tafi Mhaka",
    image: Travel,
  },
  {
    id: 2,
    text: "Wardrobes are a reflection of personality and style",
    category: "Wardrobes",
    image: Gadgets,
  },
  {
    id: 3,
    text: "Technology in 2024: What’s next in computing?",
    category: "2024",
    image: Computer,
  },
  {
    id: 4,
    text: "Immersive media is changing how we learn and engage",
    category: "Immersive",
    image: Immersive,
  },
];

function Opinion() {
  return (
    <div className='m-5 p-5'>
      <div className='text-xl font-semibold border-l-4 border-red-500 pl-4 mb-6'>
        Your Opinion
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="relative rounded overflow-hidden  flex">
            <img
              src={article.image}
              
              className="w-40 h-32 object-cover"
            />
           <div>
               <h2 className="font-semibold text-lg leading-snug flex items-start gap-2 py-3 px-2">
                  {article.text}
                </h2>
                    <span className="flex text-lg px-2  rounded text-gray-400">
                  <RiDoubleQuotesL className="text-lg " />
                  {article.category}
                </span>
           </div>
           
            
            
              </div>
         
        ))}
      </div>
    </div>
  );
}

export default Opinion;
