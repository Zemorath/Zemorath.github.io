import React from 'react';
import './FeaturedArticles.css';

const FeaturedArticles = () => {
  const articles = [
    {
      title: 'Understanding React Hooks',
      link: 'https://dev.to/zemorath/understanding-react-hooks',
      logo: 'react-logo.png',
      description: 'A deep dive into React Hooks and how to use them effectively.'
    },
    {
      title: 'Getting Started with Node.js',
      link: 'https://dev.to/zemorath/getting-started-with-nodejs',
      logo: 'nodejs-logo.png',
      description: 'A beginner’s guide to building applications with Node.js.'
    }
  ];

  return (
    <div className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="articles-list">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <img src={`/${article.logo}`} alt={`${article.title} logo`} className="article-logo" />
            <div className="article-content">
              <h3><a href={article.link}>{article.title}</a></h3>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
