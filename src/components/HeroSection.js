import React from 'react';
import './HeroSection.css';
import imgHome from '../images/img-home.webp';

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={imgHome} alt="Restaurant" className="hero-image" />
      <h1>Top Restaurants in Charlottesville</h1>
      <p>
        Charlottesville is known for its plethera of resaurants. So choosing which one to go to can be a challenge. I've created this list to help other Cvillians explore the best resaurants in Charlottesville! In this ranking I have tried to choose a restaurant from different categories. This means only one restaurant from the French cateogry will be on this list. The categories I've chosen from to create this list are: Mexican food, French food, Bar food, Indian food, and Japanese food. My critera for grading the resaurants are taste and price.      </p>
    </div>
  );
}

export default HeroSection;
