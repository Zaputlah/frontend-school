import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const AdminPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user || user.role !== 'superadmin') {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminPage;
