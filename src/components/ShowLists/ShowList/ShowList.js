import React, { Component } from 'react';

import axios from 'axios';

import ShowItem from './ShowItem/ShowItem';

import classes from './ShowList.module.css';

class ShowList extends Component {
  state = {
    shows: [],
    fetched: false
  };

  loadShows() {
    console.log('Loading ' + this.props.url);
    const URL = 'https://api.themoviedb.org/3/' + this.props.url;
    axios
      .get(URL)
      .then(response => {
        console.log('Fetched');
        console.log(response.data.results.slice(0, 5));
        this.setState({
          shows: response.data.results.slice(0, 5),
          fetched: true
        });

        console.log('state set');
      })
      .catch(error => console.log('There is an error'));
  }

  loadShowsNext(nextProps) {
    console.log('Loading ' + nextProps.url);
    const URL = 'https://api.themoviedb.org/3/' + nextProps.url;
    axios
      .get(URL)
      .then(response => {
        console.log('Fetched');
        console.log(response.data.results.slice(0, 5));
        this.setState({
          shows: response.data.results.slice(0, 5),
          fetched: true
        });

        console.log('state set');
      })
      .catch(error => console.log('There is an error'));
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.url !== this.props.url && nextProps.url !== '');
    console.log(nextProps.url);
    if (nextProps.url !== this.props.url && nextProps.url !== '') {
      this.setState({ fetched: false });
      this.loadShowsNext(nextProps);
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    if (this.props.url !== '') {
      this.loadShows();
    }
  }

  render() {
    console.log('rendering...');
    console.log(this.state.shows);
    let transformedShows = <p>Loading...</p>;
    if (this.state.fetched) {
      if (this.state.shows) {
        transformedShows = this.state.shows.map(show => {
          let name = '';
          let backDrop =
            'http://image.tmdb.org/t/p/original' + show.backdrop_path;
          if (!show.name) {
            name = show.original_title;
          } else {
            name = show.name;
          }
          return (
            <ShowItem
              key={show.id}
              title={name}
              popularity={show.vote_average}
              overview={show.overview}
              backdrop={backDrop}
            />
          );
        });
      }
    } else {
      transformedShows = <h1>Fetching...</h1>;
    }

    return (
      <div className={classes.ShowList}>
        <h2>{this.props.title}</h2>
        <div className={classes.Shows}>{transformedShows}</div>
      </div>
    );
  }
}

export default ShowList;
