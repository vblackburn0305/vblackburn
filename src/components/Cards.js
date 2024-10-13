import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import pineappleImage from '../images/img-9.jpg';
import appleImage from '../images/img-2.jpg';
import pearImage from '../images/img-5.jpg';
import watermelonImage from '../images/img-4.jpg';
import lemonImage from '../images/img-8.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Popular fruits!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={pineappleImage}
              text='Find out which country grows the most pineapples'
              label='Pineapples'
              path='/pineapple-trivia'
            />
            <CardItem
              src={appleImage}
              text='Learn about apples from the New York Apple Association'
              label='Apples'
              path='https://www.applesfromny.com/about-nyaa/apple-trivia/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={pearImage}
              text='Learn which country is responsible for producing most of the worlds pears'
              label='Pears'
              path='/pear-trivia'
            />
            <CardItem
              src={watermelonImage}
              text='Find out where watermelons orginiated from'
              label='Watermelons'
              path='/watermelon-trivia'
            />
            <CardItem
              src={lemonImage}
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