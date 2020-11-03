import React from 'react'
import './Hero.css';
import '../../App.css';
import { Button } from '../Button/Button'

function Hero() {
  return (
    <div className='hero-container'>
      <h1>Hi. My name is Steve</h1> 
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          Reach Out
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          Watch Trailer <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default Hero
