import React from 'react';
import './Pineapple.css';
import indonesianImage from '../../images/img-16.jpg'
import philippinesImage from '../../images/img-17.jpg'
import costaImage from '../../images/img-18.jpg'


function Pineapple() {
  return (
    <div className="pineapple-container">
      <h1>These Countries Grow the Most Pineapples</h1>
      <div className="country">
        <img className="indonesia" src={indonesianImage} alt="Indonesia"/>
        <p>Indonesia is one of the top producers of pineapples, especially in areas like Sumatra and Java. Its tropical climate and fertile soil provide ideal conditions for pineapple cultivation.</p>
      </div>
      <div className="country">
        <img className="philippines" src={philippinesImage} alt="Philippines"/>
        <p>The Philippines, particularly the island of Mindanao, is a global leader in pineapple production. The country exports pineapples around the world, known for their sweetness.</p>
      </div>
      <div className="country">
        <img className="costa-rica" src={costaImage} alt="Costa Rica"/>
        <p>Costa Rica is famous for producing high-quality pineapples, especially for export. Pineapple farming is a significant contributor to the country's economy.</p>
      </div>
    </div>
  );
}

export default Pineapple;
