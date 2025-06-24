// src/Pages/NewsDetails/SingleNewsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Newsdetails from "../../Components/Home/NewsDetails/NewsDetail";
import breakingData from "../../Pages/NewsDetails/BreakingData"
import TrendingData from "../../Pages/NewsDetails/TrendingData";
import LatestData from "../../Pages/NewsDetails/LatestData";

const allNews = [breakingData, TrendingData, LatestData];

const SingleNewsPage = () => {
  const { id } = useParams();
  const article = allNews.find(item => String(item.id) === id);

  if (!article) return <div>News not found.</div>;

  return (
    <Newsdetails
      title={article.title}
      updatedDate={article.date || article.updatedDate}
      publishedBy={article.publishedBy || "News Desk"}
      image={article.image}
      description={article.description || "Full article content goes here."}
      commentsData={article.comments || []}
    />
  );
};

export default SingleNewsPage;
