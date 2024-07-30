// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const ProtectedRoute = ({ role, children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  // Izinkan akses jika pengguna memiliki peran yang diperlukan
  if (role.includes(user.role)) {
    return children;
  }

  // Alihkan ke login jika pengguna tidak memiliki peran yang diperlukan
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
