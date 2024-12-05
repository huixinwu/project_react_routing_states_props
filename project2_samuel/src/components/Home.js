import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Controller from './images/home/Controller.jpg';
import NIN_NYC from './images/home/NIN-NYC.jpg';
import Comic_NYC from './images/home/NYC-ComicCon.jpg';

function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="main-container">
      <h1 className="main-title">Welcome</h1>
      <p className="main-description">
      Hello! I'm delighted you've dropped by. 
      This page is a small project featuring a gallery of images that reflect my interests. 
      To begin exploring, simply click on one of the cards below or use the navigation bar at the top. 
      Enjoy your journey!
      </p>
      <div className="card-container">
        <Card
          onClick={() => handleNavigate('/favorite-games')}
          title="Favorite Games"
          description="A gallery of my favorite games."
          image={Controller}
        />
        <Card
          onClick={() => handleNavigate('/nintendo-nyc')}
          title="Nintendo NYC"
          description="A gallery of my trip to Ninteno NYC"
          image={NIN_NYC}
        />
        <Card
          onClick={() => handleNavigate('/nyc-comiccon')}
          title="NYC Comic Con"
          description="A gallery of my time at NYC Comic Con"
          image={Comic_NYC}
        />
      </div>
    </div>
  );
}

export default Home;
