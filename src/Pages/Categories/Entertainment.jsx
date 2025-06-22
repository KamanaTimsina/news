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
    // Add more as needed
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
