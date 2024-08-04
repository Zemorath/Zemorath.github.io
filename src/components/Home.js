import React from 'react';
import FeaturedArticles from './FeaturedArticles';
import PinnedRepositories from './PinnedRepositories';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Trent Ward's Personal Website</h1>
      <FeaturedArticles />
      <PinnedRepositories />
    </div>
  );
};

export default Home;
