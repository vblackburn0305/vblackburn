import React from 'react';
import './Favorite.css';
import imageMango from '../../images/img-11.jpg';
import imageWatermelon from '../../images/img-13.jpg';

function Favorite() {
  return (
    <div className="favorite-container">
      <h1>My Favorite Fruits</h1>
      <img className="mango" src={imageMango} alt="Mango"/>
      <img className="watermelon" src={imageWatermelon} />
    </div>
  );
}

export default Favorite;
