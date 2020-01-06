import React from 'react';

import classes from './HeroButton.module.css';

const HeroButton = props => {
  return <button className={classes.HeroButton}>{props.children}</button>;
};

export default HeroButton;
