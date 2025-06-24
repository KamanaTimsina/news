import React, { useState } from "react";
import {
  Clock,
  User,
  Eye,
  Share2,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import Gadgets from "../../assets/Images/ads/Gadgets.jpg";
import gif1 from "../../assets/Images/Categories/Ads/lev01.gif";
import gif2 from "../../assets/Images/Categories/Ads/SidharthaBank.gif"; 
import gif3 from "../../assets/Images/Categories/Ads/subisu.gif";
import gif4 from "../../assets/Images/Categories/Ads/khalti.gif";

const CategoryPage = ({ title, description, featuredNews, newsArticles }) => {
  const [showAllArticles, setShowAllArticles] = useState(false);

  // Ads tagged as 'sidebar' or 'inline'
  const ads = [
    { src: Gadgets, type: "sidebar" },
    { src: gif1, type: "inline" },
    { src: gif2, type: "inline" },
    { src: gif3, type: "inline" },
    { src: gif4, type: "inline" },
  ];

  const sidebarAds = ads.filter((ad) => ad.type === "sidebar");
  const inlineAds = ads.filter((ad) => ad.type === "inline");

  const initialArticles = newsArticles.slice(0, 2);
  const remainingArticles = newsArticles.slice(4);
  const allArticles = showAllArticles ? newsArticles : initialArticles;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white p-2 md:p-6 text-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-center">
          <h1 className="text-4xl md:text-5xl text-red-700 font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto">{description}</p>
        </div>
      </div>

      {/* Ad right under header */}
      {inlineAds.length > 0 && (
        <div className="max-w-8xl mt-2  mx-auto px-4 sm:px-6 lg:px-24 mb-8">
          <img
            src={inlineAds[0].src}
            alt="Header Ad"
            className="w-full h-40 md:h-50 object-cover rounded-md shadow-md"
          />
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-3">
            {/* Featured Story */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 text-red-500 mr-2" />
                Featured Story
              </h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredNews.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-red-600 cursor-pointer transition-colors">
                    {featuredNews.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{featuredNews.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredNews.publishedAt}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredNews.views}</span>
                      </div>
                      <button className="flex items-center gap-1 hover:text-red-700 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
               {/* Ad after featured story */}
            {inlineAds[1] && (
              <div className="mb-8">
                <img
                  src={inlineAds[1].src}
                  alt="Ad After Featured"
                  className="w-full h-40 md:h-40 object-cover rounded-md shadow-md"
                />
              </div>
            )}

            {/* News Articles with Inline Ads */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {allArticles.map((article, index) => (
                <React.Fragment key={article.id}>
                  <ArticleCard article={article} />

                  {/* Show vertical ad every 4 articles */}
                  {(index + 1) % 4 === 0 &&
                    inlineAds[Math.floor(index / 4) + 2] && (
                      <div className="col-span-2">
                        <img
                          src={inlineAds[Math.floor(index / 4) + 2].src}
                          alt="Inline Ad"
                          className="w-full max-h-[400px] object-cover rounded-md shadow-lg"
                        />
                      </div>
                    )}
                </React.Fragment>
              ))}
            </div>

            {/* Load More */}
            {!showAllArticles && newsArticles.length > 2 && (
              <div className="text-center pb-8 mt-8">
                <button
                  onClick={() => setShowAllArticles(true)}
                  className="bg-red-700 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  Load More Articles
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Sidebar Ads */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl border-l-4 border-red-500 pl-4 font-bold mb-4">
                  Advertisements
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {sidebarAds.map((ad, index) => (
                    <img
                      key={index}
                      src={ad.src}
                      alt={`Sidebar Ad ${index + 1}`}
                      className="w-full h-96 object-cover rounded-md opacity-90"
                    />
                  ))}
                </div>
              </div>

              {/* Subscribe Widget */}
              <div className="bg-gradient-to-br from-red-700 to-red-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Join {title} Digest</h3>
                <p className="text-red-100 text-sm mb-4">
                  Weekly highlights, reviews, and updates sent to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-red-600 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Article Card Component
const ArticleCard = ({ article }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
    <div className="relative">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-3 left-3">
        <span className="bg-red-700 text-white px-2 py-1 rounded text-xs font-medium">
          {article.category}
        </span>
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-700 cursor-pointer transition-colors line-clamp-2">
        {article.title}
      </h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {article.excerpt}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {article.author}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.publishedAt}
          </span>
        </div>
        <span className="flex items-center gap-1">
          <Eye className="w-3 h-3" />
          {article.views}
        </span>
      </div>
    </div>
  </div>
);

export default CategoryPage;
