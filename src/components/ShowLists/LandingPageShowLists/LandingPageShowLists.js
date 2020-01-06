import React from 'react';
import { connect } from 'react-redux';

import ShowList from '../ShowList/ShowList';

import classes from './LandingPageShowLists.module.css';

const LandingPageShowLists = props => {
  return (
    <div className={classes.ShowLists}>
      {props.searchURL ? (
        <ShowList title="Search Results" url={props.searchURL} />
      ) : null}
      <ShowList
        title="Popular on Netflixy"
        url="discover/tv?api_key=64bc0f6954c0105d497c4e993697e278&sort_by=popularity.desc"
      />
      <ShowList
        title="Trending Now"
        url="trending/tv/week?api_key=64bc0f6954c0105d497c4e993697e278"
      />
      <ShowList
        title="Mystery"
        url="discover/tv?api_key=64bc0f6954c0105d497c4e993697e278&with_genres=9648"
      />
      <ShowList
        title="Comedy"
        url="discover/tv?api_key=64bc0f6954c0105d497c4e993697e278&with_genres=35"
      />
      <ShowList
        title="Documentary"
        url="discover/tv?api_key=64bc0f6954c0105d497c4e993697e278&with_genres=99"
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchURL: state.searchURL
  };
};

export default connect(mapStateToProps)(LandingPageShowLists);
