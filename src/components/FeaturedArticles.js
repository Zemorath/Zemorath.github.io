import React from 'react';
import './FeaturedArticles.css';

const FeaturedArticles = () => {
  const articles = [
    {
      title: 'Understanding React Hooks',
      link: 'https://dev.to/zemorath/understanding-react-hooks',
      date: 'January 1, 2024',
      description: 'A deep dive into React Hooks and how to use them effectively.'
    },
    {
      title: 'Getting Started with Node.js',
      link: 'https://dev.to/zemorath/getting-started-with-nodejs',
      date: 'February 10, 2024',
      description: 'A beginner’s guide to building applications with Node.js.'
    }
  ];

  return (
    <div className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="articles-list">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <div className="article-content">
              <p className="article-date">{article.date}</p>
              <h3 className="article-title"><a href={article.link}>{article.title}</a></h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
