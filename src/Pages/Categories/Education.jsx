import React from 'react';
import CategoryPage from '../../Components/Categories/CategoriesPage'; 
import image1 from '../../assets/Images/Categories/Education/image1.jpeg';
import image2 from '../../assets/Images/Categories/Education/image2.jpg';
import image3 from '../../assets/Images/Categories/Education/image3.jpeg';

const EducationPage = () => {
  const featuredNews = {
    id: 1,
    title: "NEB 2081 Results Published: Record Pass Rate",
    excerpt: "This year's results show an impressive leap in pass percentages across Nepal.",
    image: image1,
    author: "Ramesh Paudel",
    publishedAt: "1 hour ago",
    views: "15.2K",
    category: "Results"
  };

  const newsArticles = [
    {
      id: 2,
      title: "New Curriculum Brings Coding to Primary Schools",
      excerpt: "Education ministry introduces tech literacy from grade 4 onward.",
      image: image2,
      author: "Sharmila Karki",
      publishedAt: "3 hours ago",
      views: "8.4K",
      category: "Curriculum"
    },
    {
      id: 3,
      title: "TU to Launch More Online Programs in 2025",
      excerpt: "Digital expansion continues across major universities in Nepal.",
      image: image3,
      author: "Dipak Bhatta",
      publishedAt: "5 hours ago",
      views: "6.2K",
      category: "Online Learning"
    },
       {
      id: 3,
      title: "TU to Launch More Online Programs in 2025",
      excerpt: "Digital expansion continues across major universities in Nepal.",
      image: image3,
      author: "Dipak Bhatta",
      publishedAt: "5 hours ago",
      views: "6.2K",
      category: "Online Learning"
    },
       {
      id: 3,
      title: "TU to Launch More Online Programs in 2025",
      excerpt: "Digital expansion continues across major universities in Nepal.",
      image: image3,
      author: "Dipak Bhatta",
      publishedAt: "5 hours ago",
      views: "6.2K",
      category: "Online Learning"
    },
       {
      id: 3,
      title: "TU to Launch More Online Programs in 2025",
      excerpt: "Digital expansion continues across major universities in Nepal.",
      image: image3,
      author: "Dipak Bhatta",
      publishedAt: "5 hours ago",
      views: "6.2K",
      category: "Online Learning"
    },
       {
      id: 2,
      title: "New Curriculum Brings Coding to Primary Schools",
      excerpt: "Education ministry introduces tech literacy from grade 4 onward.",
      image: image2,
      author: "Sharmila Karki",
      publishedAt: "3 hours ago",
      views: "8.4K",
      category: "Curriculum"
    },
       {
      id: 2,
      title: "New Curriculum Brings Coding to Primary Schools",
      excerpt: "Education ministry introduces tech literacy from grade 4 onward.",
      image: image2,
      author: "Sharmila Karki",
      publishedAt: "3 hours ago",
      views: "8.4K",
      category: "Curriculum"
    },
       {
      id: 2,
      title: "New Curriculum Brings Coding to Primary Schools",
      excerpt: "Education ministry introduces tech literacy from grade 4 onward.",
      image: image2,
      author: "Sharmila Karki",
      publishedAt: "3 hours ago",
      views: "8.4K",
      category: "Curriculum"
    },
    // Add more as needed
  ];

  return (
    <CategoryPage
      title="Education"
      description="News and updates from schools, colleges, universities, and education policies."
      featuredNews={featuredNews}
      newsArticles={newsArticles}
    />
  );
};

export default EducationPage;
