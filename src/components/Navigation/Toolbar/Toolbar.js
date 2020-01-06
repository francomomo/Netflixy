import React from 'react';

import classes from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Search from '../Search/Search';
import UserProfile from '../UserProfile/UserProfile';

const Toolbar = () => {
  return (
    <div className={classes.Toolbar}>
      <Logo />
      <NavItems />
      <Search />
      <UserProfile />
    </div>
  );
};

export default Toolbar;
