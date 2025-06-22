import React from "react";
import Destination from "../../assets/Images/Blog/Destination.jpg";

const contentItems = [
  {
    image: Destination,
    title: "Discover Hidden Waterfalls",
    text: `A detailed guide to scenic hidden waterfalls in your region. From tucked-away trails to lush
    jungle escapes, this post explores some of the best kept secrets of nature. Whether you're looking
    for a peaceful weekend getaway or an adventure-packed excursion, we've got the waterfalls for you.`,
    date: "June 15, 2025",
    category: "Travel",
  },
  {
    image: Destination,
    title: "Healthy Eating on a Budget",
    text: `Eating healthy doesn’t have to be expensive. Learn how to plan meals, shop smart, and get
    the most nutritional value from affordable foods. We cover everything from batch cooking to local
    markets and easy recipes that save both time and money.`,
    date: "June 14, 2025",
    category: "Lifestyle",
  },

];

const latestPosts = [
  {
    image: Destination,
    text: "Top Yoga Retreats to Visit in 2025",
  },
  {
    image: Destination,
    text: "Why Forest Walks Are Scientifically Proven to Help",
  },
];

const Blogpage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      <div className="md:w-2/3 w-full space-y-6">
        {contentItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-white rounded shadow-md overflow-hidden"
          >
            <div className="sm:w-1/3 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="sm:w-2/3 w-full p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-black mb-3 line-clamp-4 sm:line-clamp-none">
                  {item.text}
                </p>
                <a
                  href="#"
                  className="bg-red-600 text-white p-2 rounded-lg  text-sm font-semibold hover:underline"
                >
                  Read More 
                </a>
              </div>
              <div className="mt-4 text-sm text-black flex flex-wrap gap-8">
                <span className="text-red-600 font-medium">{item.category}</span>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:w-1/3 w-full space-y-4">
        <h3 className="text-xl font-bold border-l-4 border-red-500 pl-4 mb-2">
          Latest Posts
        </h3>
        {latestPosts.map((post, index) => (
          <div
            key={index}
            className="flex bg-gray-50 rounded shadow-md overflow-hidden"
          >
            <div className="w-1/3">
              <img
                src={post.image}
                alt={post.text}
                className="w-full h-30 object-cover"
              />
            </div>
            <div className="w-2/3 p-3 flex items-center">
              <p className="text-sm text-black">{post.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogpage;
