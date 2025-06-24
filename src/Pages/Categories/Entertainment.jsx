import React from 'react';
import CategoryPage from '../../Components/Categories/CategoriesPage';
import image1 from '../../assets/Images/Categories/image1.jpg';
import image2 from '../../assets/Images/Categories/Entertainment/image2.jpeg';
import image3 from '../../assets/Images/Categories/Entertainment/image3.jpeg';


const EntertainmentPage = () => {
  const featuredNews = {
    id: 1,
    title: "Nepalese Film 'Himalayan Dream' Wins at Cannes",
    excerpt: "The movie received a standing ovation and critical acclaim at the film festival.",
    image: image1,
    author: "Kabita Rana",
    publishedAt: "2 hours ago",
    views: "18.6K",
    category: "Award"
  };

  const newsArticles = [
    {
      id: 2,
      title: "Top 5 Must-Watch Nepali Dramas This Month",
      excerpt: "A curated list of trending shows across major platforms.",
      image: image2,
      author: "Nischal Sharma",
      publishedAt: "4 hours ago",
      views: "10.1K",
      category: "Drama"
    },
    {
      id: 3,
      title: "Music Industry Sees Surge in Indie Artists",
      excerpt: "Independent musicians are getting global recognition.",
      image: image3,
      author: "Sunita Regmi",
      publishedAt: "7 hours ago",
      views: "8.9K",
      category: "Music"
    },
    {
      id: 4,
      title: "New Web Series Explores Kathmandu's Underground Culture",
      excerpt: "A gritty portrayal of urban youth, streaming now.",
      image: image1,
      author: "Rajan Khadka",
      publishedAt: "1 day ago",
      views: "6.2K",
      category: "Web Series"
    },
    {
      id: 5,
      title: "Bollywood Stars Arrive in Nepal for Film Shoot",
      excerpt: "Tourism and film industry celebrate international collaboration.",
      image: image2,
      author: "Rekha Shrestha",
      publishedAt: "1 day ago",
      views: "12.5K",
      category: "Cinema"
    },
    {
      id: 6,
      title: "Nepali Artist's Music Video Hits 1M Views in 24 Hours",
      excerpt: "The track is a viral hit across TikTok and YouTube.",
      image: image3,
      author: "Anup Baral",
      publishedAt: "16 hours ago",
      views: "22.3K",
      category: "Viral"
    },
    {
      id: 7,
      title: "Review: 'Mountain Echoes' Delivers Stunning Visuals",
      excerpt: "A breathtaking cinematic experience with a powerful message.",
      image: image1,
      author: "Shristi Karki",
      publishedAt: "3 days ago",
      views: "5.8K",
      category: "Review"
    },
    {
      id: 8,
      title: "Comedians Take Over Streaming Charts with New Special",
      excerpt: "A fresh wave of Nepali stand-up comedy is trending.",
      image: image2,
      author: "Dipak Poudel",
      publishedAt: "5 hours ago",
      views: "9.4K",
      category: "Comedy"
    }
  ];

  return (
    <CategoryPage
      title="Entertainment"
      description="Movie releases, celebrity news, music trends, and more from the world of showbiz."
      featuredNews={featuredNews}
      newsArticles={newsArticles}
    />
  );
};

export default EntertainmentPage;
