import React from 'react';
import './Services.css';
import './Cards.css';
import CardItem from './CardItem';
import Footer from './Footer';

function Services() {
  return (
    <>
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">Everything you need to plan your perfect trip</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-15.jpg`}
              text='Seamless flight bookings to get you anywhere in the world with ease'
              label='Flights'
              path='/services'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-20.jpeg`}
              text='Stay in hand-picked hotels and resorts tailored to your needs and taste'
              label='Hotels'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-21.jpeg`}
              text='Custom travel itineraries built to match your dreams and schedule'
              label='Custom Trips'
              path='/services'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-22.jpeg`}
              text='Luxury cruises and yacht experiences for an unforgettable ocean journey'
              label='Cruises'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Services;