import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <div className="cards__item">
      <Link className="cards__item__link" to={props.path}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img src={props.src} alt={props.label} className="cards__item__img" />
        </figure>
      </Link>
    </div>
  );
}

export default CardItem;
