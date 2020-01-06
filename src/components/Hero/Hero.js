import React from 'react';

import classes from './Hero.module.css';

import HeroButton from './HeroButton/HeroButton';

const Hero = () => {
  return (
    <div className={classes.Hero}>
      <div className={classes.content}>
        <h1>Stranger Things</h1>
        <h2>Watch Season 1 Episode 3 Now</h2>
        <p>
          An increasingly concerned Nancy looks for Barb and finds out what
          Jonathan's been up to. Joyce is convinced Will is trying to talk to
          her.
        </p>
        <div className={classes.Button}>
          <HeroButton className={classes.HeroButton}>Play</HeroButton>
          <HeroButton className={classes.HeroButton}>More Info</HeroButton>
        </div>
      </div>
      <div className={classes.overlay}></div>
    </div>
  );
};

export default Hero;
