
import React, { useState } from "react";
import BreakingData from "./BreakingData";
import TrendingData from "./TrendingData";
import LatestData from "./LatestData";

const NewsDetails = () => {
  const [activeTab, setActiveTab] = useState("breaking");

  const renderContent = () => {
    switch (activeTab) {
      case "breaking":
        return <BreakingData />;
      case "trending":
        return <TrendingData />;
      case "latest":
        return <LatestData />;
      default:
        return <BreakingData />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("breaking")}
          className={`px-4 py-2 rounded-md text-sm font-semibold ${
            activeTab === "breaking"
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Breaking News
        </button>
        <button
          onClick={() => setActiveTab("trending")}
          className={`px-4 py-2 rounded-md text-sm font-semibold ${
            activeTab === "trending"
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Trending News
        </button>
        <button
          onClick={() => setActiveTab("latest")}
          className={`px-4 py-2 rounded-md text-sm font-semibold ${
            activeTab === "latest"
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Latest News
        </button>
      </div>

      {/* Render the selected news list */}
      {renderContent()}
    </div>
  );
};

export default NewsDetails;
