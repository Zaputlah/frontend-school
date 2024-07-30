import React from 'react';
import { useAuth } from '../auth/AuthContext';
import '../styles/profile.css';
import Headers from './Headers';

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <Headers role={user.role} title={user.role === 'guru' ? "Teacher Profile" : "Student Profile"} context="profile" />
      <div className='profile-page'>
        <div className='profile-header'>
          {/* Foto Avatar */}
          <div className='profile-avatar'>
            <img 
              src={user?.avatar || `https://picsum.photos/200`} 
              alt="Profile Avatar" 
            />
          </div>
          <h1>Profile Page</h1>
        </div>
        <div className='profile-info'>
          <p><strong>Username:</strong> {user?.username}</p>
          <p><strong>Role:</strong> {user?.role}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
