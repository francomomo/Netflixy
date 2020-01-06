import React from 'react';

import classes from './ShowItem.module.css';

const ShowItem = props => {
  return (
    <div
      className={classes.ShowItem}
      style={{ backgroundImage: 'url(' + props.backdrop + ')' }}
    >
      <div className={classes.content}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.popularity}>{props.popularity}</div>
        <div className={classes.overview}>{props.overview}</div>
      </div>
    </div>
  );
};

export default ShowItem;
