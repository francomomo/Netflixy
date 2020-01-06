import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../../store/actions';

import classes from './Search.module.css';

class Search extends Component {
  state = {
    searchItem: ''
  };

  searchItemHandler = event => {
    const newSearchItem = event.target.value;
    this.setState({ searchItem: newSearchItem });
  };

  searchShowHandler = event => {
    if (event.key === 'Enter' && this.props.searchItem !== '') {
      this.props.searchURL(this.state.searchItem);
    }
  };

  render() {
    return (
      <div className={classes.Search}>
        <input
          type="search"
          placeholder="Titles, people, genres"
          value={this.props.searchItem}
          onChange={this.searchItemHandler}
          onKeyUp={this.searchShowHandler}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchURL: searchItem =>
      dispatch({
        type: actionTypes.SEARCH_URL_CHANGED,
        show: searchItem
      })
  };
};

export default connect(null, mapDispatchToProps)(Search);
