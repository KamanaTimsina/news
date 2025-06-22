import React from 'react';
import CategoryPage from '../../Components/Categories/CategoriesPage';
import image1 from '../../assets/Images/Categories/World/image1.jpeg';
import image2 from '../../assets/Images/Categories/World/image2.png';
import fimage1 from '../../assets/Images/Categories/World/fimage1.jpg';

const WorldPage = () => {
  const featuredNews = {
    id: 1,
    title: "Global Summit 2025: Leaders Unite for Climate Action",
    excerpt: "Top leaders commit to aggressive climate targets and global cooperation.",
    image: fimage1,
    author: "Mina Joshi",
    publishedAt: "3 hours ago",
    views: "12.3K",
    category: "Summit"
  };

  const newsArticles = [
    {
      id: 2,
      title: "Elections in Europe Shift Political Landscape",
      excerpt: "New parties are emerging while traditional powers lose influence.",
      image: image1,
      author: "Sujan Adhikari",
      publishedAt: "6 hours ago",
      views: "9.7K",
      category: "Politics"
    },
    {
      id: 3,
      title: "UN Urges Peace in Rising Middle East Conflicts",
      excerpt: "Diplomatic efforts are underway to avoid escalations.",
      image: image2,
      author: "Anju Kharel",
      publishedAt: "8 hours ago",
      views: "7.1K",
      category: "Peace"
    },
    // Add more as needed
  ];

  return (
    <CategoryPage
      title="World"
      description="Breaking news and international affairs from every corner of the globe."
      featuredNews={featuredNews}
      newsArticles={newsArticles}
    />
  );
};

export default WorldPage;
