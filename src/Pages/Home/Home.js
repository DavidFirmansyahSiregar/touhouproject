import React from 'react';
import Vague from './vague.mp3'
import './home.css';

export const Home = () => {
  const audio = new Audio(Vague);
  audio.autoplay = true;
  audio.loop = true;

  return (
    <div>
    
    </div>
  );
};
