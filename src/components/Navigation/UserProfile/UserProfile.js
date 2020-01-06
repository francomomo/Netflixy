import React from 'react';

import classes from './UserProfile.module.css';
import UserProfileImage from '../../../assets/UserProfileImage.jpg';

const UserProfile = () => {
  return (
    <div className={classes.UserProfile}>
      <div>Ka Chun Mo</div>
      <div>
        <img src={UserProfileImage} alt="User" />
      </div>
    </div>
  );
};

export default UserProfile;
