import React, { Component } from 'react';

import Aux from '../Aux/Aux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';

class Layout extends Component {
  render() {
    return (
      <Aux className={classes.Layout}>
        <Toolbar />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
