import React from 'react';
import CategoryPage from '../../Components/Categories/CategoriesPage';
import image1 from '../../assets/Images/Categories/Politics/image1.jpg';
import image2 from '../../assets/Images/Categories/Politics/image2.jpeg';
import image3 from '../../assets/Images/Categories/Politics/image3.png';
import image4 from '../../assets/Images/Categories/Politics/images3.jpeg';

const PoliticsPage = () => {
  const featuredNews = {
    id: 1,
    title: "Parliament Approves New Federal Budget",
    excerpt: "Debates spark across the floor as the new budget focuses on infrastructure.",
    image: image1,
    author: "Pratiksha Dahal",
    publishedAt: "5 hours ago",
    views: "13.4K",
    category: "Budget"
  };

  const newsArticles = [
    {
      id: 2,
      title: "Opposition Criticizes Delay in Local Elections",
      excerpt: "Key leaders accuse the ruling party of strategic delay tactics.",
      image: image2,
      author: "Suraj Bhattarai",
      publishedAt: "6 hours ago",
      views: "9.9K",
      category: "Elections"
    },
    {
      id: 3,
      title: "Political Parties Sign Agreement on Electoral Reform",
      excerpt: "A joint commitment to fairer representation and reduced corruption.",
      image: image3,
      author: "Sita Neupane",
      publishedAt: "10 hours ago",
      views: "5.3K",
      category: "Reform"
    },
        {
      id: 2,
      title: "Opposition Criticizes Delay in Local Elections",
      excerpt: "Key leaders accuse the ruling party of strategic delay tactics.",
      image: image2,
      author: "Suraj Bhattarai",
      publishedAt: "6 hours ago",
      views: "9.9K",
      category: "Elections"
    },
        {
      id: 2,
      title: "Opposition Criticizes Delay in Local Elections",
      excerpt: "Key leaders accuse the ruling party of strategic delay tactics.",
      image: image2,
      author: "Suraj Bhattarai",
      publishedAt: "6 hours ago",
      views: "9.9K",
      category: "Elections"
    },
        {
      id: 2,
      title: "Opposition Criticizes Delay in Local Elections",
      excerpt: "Key leaders accuse the ruling party of strategic delay tactics.",
      image: image2,
      author: "Suraj Bhattarai",
      publishedAt: "6 hours ago",
      views: "9.9K",
      category: "Elections"
    },
      {
      id: 3,
      title: "Political Parties Sign Agreement on Electoral Reform",
      excerpt: "A joint commitment to fairer representation and reduced corruption.",
      image: image3,
      author: "Sita Neupane",
      publishedAt: "10 hours ago",
      views: "5.3K",
      category: "Reform"
    },
      {
      id: 3,
      title: "Political Parties Sign Agreement on Electoral Reform",
      excerpt: "A joint commitment to fairer representation and reduced corruption.",
      image: image3,
      author: "Sita Neupane",
      publishedAt: "10 hours ago",
      views: "5.3K",
      category: "Reform"
    },


    // Add more as needed
  ];

  return (
    <CategoryPage
      title="Politics"
      description="Parliament updates, election news, political party movements and more."
      featuredNews={featuredNews}
      newsArticles={newsArticles}
    />
  );
};

export default PoliticsPage;
