import React from 'react'
import heroImage from '../images/hero-image.jpg'

export default function Hero() {
  return (
    <div className="hero">
      <img 
        className="hero_image" 
        src={ heroImage }
        alt="People Conference"
      />
      <div className="hero_description">
        <h1>Badge's Conf.</h1>
        <span>
          lets you create a template of the people who assist to your event
        </span>
      </div>
    </div>
  )
}
