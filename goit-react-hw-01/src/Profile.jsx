import React from 'react';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <div>
        <img
          src={image || 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'}
          alt="User avatar"
        />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
