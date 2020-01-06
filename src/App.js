import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './App.module.css';

import Layout from './hoc/Layout/Layout';

import LandingPage from './Pages/LandingPage/LandingPage';
import TVPage from './Pages/TVPage/TVPage';
import MoviePage from './Pages/MoviePage/MoviePage';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/tv" component={TVPage} />
            <Route path="/movie" component={MoviePage} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
