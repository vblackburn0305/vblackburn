import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="videos/video-2.mp4" autoPlay loop muted />
      <h1>Fruits</h1>
      <div className="hero-btns">
        <Button 
          className="btns" 
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          to="https://youtu.be/3Qnpjt5KzYQ?si=CiQPtdSg14yLjtm4"
        >
          Watch Fruit Documentary <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
