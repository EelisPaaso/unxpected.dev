import React from 'react';

const Profile = ({ name, bio, imageSrc }) => {
  return (
    <div className="profile">
      <img src={imageSrc} alt={`${name}'s profile`} className="profile-img" />
      <h1 className="profile-name">{name}</h1>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default Profile;
