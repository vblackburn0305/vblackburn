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
    <div className='cards'>
      <h1>Popular fruits!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={mexicanImage}
              text='Find out which country grows the most pineapples'
              label='Pineapples'
              path='/pineapple-trivia'
            />
            <CardItem
              src={frenchImage}
              text='Learn about apples from the New York Apple Association'
              label='Apples'
              path='https://www.applesfromny.com/about-nyaa/apple-trivia/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={barImage}
              text='Learn which country is responsible for producing most of the worlds pears'
              label='Pears'
              path='/pear-trivia'
            />
            <CardItem
              src={indianImage}
              text='Find out where watermelons orginiated from'
              label='Watermelons'
              path='/watermelon-trivia'
            />
            <CardItem
              src={japaneseImage}
              text='Click here if you like sour fruits'
              label='Lemons'
              path='/lemon-trivia'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
