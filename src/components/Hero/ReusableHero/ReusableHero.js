import React, { Component } from 'react';
import axios from 'axois';

import classes from './ReusableHero.module.css';

import HeroButton from './HeroButton/HeroButton';

export class ReusableHero extends Component {
  state = {
    title: '',
    voteAverage: '',
    overview: ''
  };

  componentDidMount() {
    const URL = 'https://api.themoviedb.org/3/';
    if (this.props.type === 'movie') {
      URL = URL + 'tv/top_rated?api_key=64bc0f6954c0105d497c4e993697e278';
    } else {
      URL = URL + 'movie/top_rated?api_key=64bc0f6954c0105d497c4e993697e278';
    }
  }

  render() {
    return (
      <div className={classes.ReusableHero}>
        <div className={classes.content}>
          <h1>{props.title}</h1>
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
  }
}

export default ReusableHero;
