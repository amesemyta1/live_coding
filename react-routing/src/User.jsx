import React from 'react';

const User = props => {
  return (
    <div className="user">
      <img
        alt="User Avatar"
        src="https://avatars.githubusercontent.com/u/9919?v="
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">Github</span>
        <span className="user__location">USA</span>
      </div>
    </div>
  );
};

export default User;
