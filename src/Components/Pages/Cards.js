import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-1.jpg`}
              text='Explore the stunning Italian coastline, with charming villages and sparkling waters'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-2.jpg`}
              text='Travel the Islands of Bali on a private cruise, enjoying beautiful beaches and sunsets'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-3.jpg`}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Relaxing'
              path='/services'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-4.jpg`}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-08.jpg`}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;