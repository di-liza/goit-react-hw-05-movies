import React from 'react';

import { HeroStyled } from './Hero.styled';

function Hero() {
  return (
    <HeroStyled>
      <h1 className="hero-title">Welcome to our movie site.</h1>
      <p className="hero-description">
        Millions of movies, TV shows and people to discover. Explore now.
      </p>
    </HeroStyled>
  );
}

export default Hero;
