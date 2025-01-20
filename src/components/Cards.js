import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import mexicanImage from '../images/Mexican.webp';
import frenchImage from '../images/French.jpg';
import indianImage from '../images/Indian.jpg';
import barImage from '../images/Bar.jpg';
import japaneseImage from '../images/Japanese.jpg';

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">

          <ul className="cards__items">
            <li>
              <CardItem
                src={mexicanImage}
                label="Mexican: Tacos Gomez"
                path="https://tacosgomez.square.site/"
              />
              <p className="example-text">Tacos Gomez is located near Pantops shopping center. They offer classic Mexican food choices such as tacos and tortas for a great price. They have won Charlottesville's best food truck award for four years, supporting the claim that they are the best Mexican spot in town. One of my personal favorites is the flautas.</p>
            </li>

            <li>
              <CardItem
                src={frenchImage}
                label="French"
                path="https://www.fleurierestaurant.com/"
              />
              <p className="example-text">Fleurie is an upscale fine dining establishment located in Downtown Charlottesville. They offer modern French cuisine with a la carte & tasting menus.</p>
            </li>
          </ul>

          <ul className="cards__items">
            <li>
              <CardItem
                src={barImage}
                label="Bar: Miller's Downtown"
                path="https://millersdowntown.com/"
              />
              <p className="example-text">Miller's Downtown has been serving Charlottesville for over 30 years. Their live music supports many of the musicans and bands coming out of Charlottesville, notably the Dave Matthew's Band. The food and the unique atmosphere create a truly Charlottesville one of a kind experience.</p>
            </li>

            <li>
              <CardItem
                src={indianImage}
                label="Indian: Maharaja"
                path="https://www.maharaja-indian-restaurant.com/"
              />
              <p className="example-text">
              Maharaja, meaning "The Great King," serves authentic, aromatic Indian cuisine crafted with premium ingredients. From savory curries to fresh-baked naan, each dish showcases the vibrant flavors of India.</p>
            </li>

            <li>
              <CardItem
                src={japaneseImage}
                label="Japanese: Ten Sushi"
                path="https://ten-sushi.com/"
              />
              <p className="example-text">
              Since 2006, Ten has offered an elevated dining experience, blending traditional and original Japanese cuisine with premium ingredients. Guests enjoy exquisite sushi, an extensive sake collection, and handcrafted Asian-inspired cocktails for a truly memorable culinary adventure</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
