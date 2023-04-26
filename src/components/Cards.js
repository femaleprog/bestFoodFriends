import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these organizations !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Together we can make sure that everyone has access to nutritious food'
              label='Food'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Be the change you want to see in the world and make a positive impact."'
              label='Need'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text="Your unused food could be the source of someone else's nourishment. Donate now"
              label='Help'
              path='/services'
            />
            <CardItem
              src='images/img-13.jpg'
              text="Donate your food and make a difference in someone's life today"
              label='Charity'
              path='/products'
            />
            <CardItem
              src='images/img-14.jpg'
              text=' You can help alleviate hunger and provide hope to those in need'
              label='Donation'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
