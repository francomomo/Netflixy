import React from 'react';

import NavItem from './NavItem/NavItem';

import classes from './NavItems.module.css';

const NavItems = () => (
  <ul className={classes.NavItems}>
    <NavItem link="/" exact>
      Home
    </NavItem>
    <NavItem link="/tv" exact>
      TV Shows
    </NavItem>
    <NavItem link="/movie" exact>
      Movies
    </NavItem>
    <NavItem link="/" exact>
      Latest
    </NavItem>
    <NavItem link="/" exact>
      My List
    </NavItem>
  </ul>
);

export default NavItems;
