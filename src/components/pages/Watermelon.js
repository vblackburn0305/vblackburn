import React from 'react';
import './Watermelon.css';

function Watermelon() {
  return (
    <div className="watermelon-container">
      <h1>Watermelons: A Refreshing History</h1>
      <div className="country">
        <img src="images/img-20.jpg" alt="Sudan Flag" />
        <p>Watermelons are believed to have originated in Sudan, one of the world’s oldest known regions for watermelon cultivation. These refreshing fruits have been enjoyed for thousands of years, with their journey beginning in northern Africa and spreading to the rest of the world.</p>
      </div>
      <div className="country">
        <img src="images/img-21.jpg" alt="Watermelon Field" />
        <p>Watermelons are 92% water, making them not only delicious but incredibly hydrating! In ancient times, travelers would carry watermelons as a natural source of water during long journeys across the desert.</p>
      </div>
      <div className="country">
        <img src="images/img-22.jpg" alt="Watermelon Slice" className="short-image" />
        <p>In many cultures, watermelon seeds are roasted and eaten as snacks. In fact, in places like China, roasted watermelon seeds are considered a popular treat during festivals and celebrations.</p>
      </div>
    </div>
  );
}

export default Watermelon;
