import React from 'react';
import CategoryPage from '../../Components/Categories/CategoriesPage'; // Adjust path if needed
import image1 from '../../assets/Images/Categories/Games/image1.png';
import image2 from '../../assets/Images/Categories/Games/image3.jpg';
import fimage1 from '../../assets/Images/Categories/Games/fimage1.jpeg';

const GamesPage = () => {
  const featuredNews = {
    id: 1,
    title: "GameCon 2025: Major Titles Revealed at Annual Gaming Expo",
    excerpt: "Exciting new releases and surprise reveals dominate this year’s biggest gaming convention.",
    image: fimage1,
    author: "Ravi Kumar",
    publishedAt: "2 hours ago",
    views: "11.9K",
    category: "Top Release"
  };

  const newsArticles = [
    {
      id: 2,
      title: "eSports Championship Finals Draw Record Viewership",
      excerpt: "Millions tune in to witness the intense final showdown of the Global eSports League.",
      image: image2,
      author: "Aarav Shrestha",
      publishedAt: "4 hours ago",
      views: "10.5K",
      category: "eSports"
    },
    {
      id: 3,
      title: "Top 10 Indie Games You Shouldn't Miss This Year",
      excerpt: "A roundup of hidden gems and creative titles making waves in the gaming community.",
      image: image2,
      author: "Sima Acharya",
      publishedAt: "6 hours ago",
      views: "6.8K",
      category: "Indie"
    },
    {
      id: 4,
      title: "VR Gaming Takes Center Stage with New Innovations",
      excerpt: "Immersive gameplay and realistic environments push virtual reality to new heights.",
      image: image1,
      author: "Binod Gautam",
      publishedAt: "9 hours ago",
      views: "7.3K",
      category: "VR"
    },
    {
      id: 5,
      title: "Mobile Gaming Revenues Hit New Highs in 2025",
      excerpt: "Casual gaming continues to dominate as mobile platforms lead the industry.",
      image: "https://images.unsplash.com/photo-1587202372775-e9ceba1b6b71?w=400&h=250&fit=crop",
      author: "Ritika Sharma",
      publishedAt: "12 hours ago",
      views: "5.4K",
      category: "Mobile"
    },
    {
      id: 6,
      title: "Gaming Gear Reviews: Best Accessories for Pro Players",
      excerpt: "Top-rated peripherals and hardware that elevate competitive gaming experience.",
      image: "https://images.unsplash.com/photo-1603808033192-082d2538d047?w=400&h=250&fit=crop",
      author: "Nabin Rijal",
      publishedAt: "1 day ago",
      views: "9.2K",
      category: "Hardware"
    }
  ];

  return (
    <CategoryPage
      title="Games"
      description="All the latest in video games, eSports, virtual reality, and gaming culture."
      featuredNews={featuredNews}
      newsArticles={newsArticles}
    />
  );
};

export default GamesPage;
