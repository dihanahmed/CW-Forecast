import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>CW-Forecast</h1>
      <p>A website for research on weather and climate for scholars with environment Concerns</p>
    </div>
  );
}

export default HeroSection;
