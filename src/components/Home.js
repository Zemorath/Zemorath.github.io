import React from 'react';
import FeaturedArticles from './FeaturedArticles';
import PinnedRepositories from './PinnedRepositories';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="intro">
        <h1>Welcome to Trent Ward's Personal Website</h1>
        <p>Explore my projects, read my articles, and learn more about me.</p>
      </section>
      <FeaturedArticles />
      <PinnedRepositories />
    </div>
  );
};

export default Home;
