import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Popular fruits!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Find out which country grows the most pineapples'
              label='Pineapples'
              path='/pinaple-trivia'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Learn about apples from the folks at Apple Holler'
              label='Apples'
              path='/apple-trivia'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-5.jpg'
              text='Learn which country is responsible for producing most of the worlds pears'
              label='Pears'
              path='/pear-trivia'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Find out where watermelons orginiated from'
              label='Watermelons'
              path='/watermelon-trivia'
            />
            <CardItem
              src='images/img-8.jpg'
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