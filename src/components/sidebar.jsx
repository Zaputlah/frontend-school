import React from 'react';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
