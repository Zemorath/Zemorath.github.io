import React from 'react';
import './PinnedRepositories.css';

const PinnedRepositories = () => {
  const repositories = [
    {
      name: 'Travium',
      link: 'https://github.com/Zemorath/Travium',
      description: 'A subscription management application.'
    },
    {
      name: 'Library Database',
      link: 'https://github.com/Zemorath/library-database',
      description: 'A comprehensive CLI library management system.'
    },
    {
        name: 'Zeer',
        link: 'https://github.com/Zemorath/Zeer',
        description: 'An open source library website.'
    }
  ];

  return (
    <>
        <h2>Pinned Repositories</h2>
        <div className="pinned-repositories">
            {repositories.map((repo, index) => (
            <div key={index} className="repository-card">
                <h3><a href={repo.link}>{repo.name}</a></h3>
                <p>{repo.description}</p>
            </div>
            ))}
        </div>
    </>
  );
};

export default PinnedRepositories;
