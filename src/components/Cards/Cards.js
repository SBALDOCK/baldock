import React from 'react'
import CardItems from './CardItems'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check this out</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems 
            src='images/aquarium.png'
            text='Check out my work'
            label='Adventure'
            path='/projects'
            />
            <CardItems 
            src='images/aquarium.png'
            text='Check out my work'
            label='Adventure'
            path='/projects'
            />
          </ul>
          <ul className="cards__items">
            <CardItems 
            src='images/aquarium.png'
            text='Check out my work'
            label='Adventure'
            path='/projects'
            />
            <CardItems 
            src='images/aquarium.png'
            text='Check out my work'
            label='Adventure'
            path='/projects'
            />
            <CardItems 
            src='images/aquarium.png'
            text='Check out my work'
            label='Adventure'
            path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
