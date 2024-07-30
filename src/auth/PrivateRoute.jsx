// src/auth/PrivateRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user } = useAuth();
  const hasAccess = user && user.role === rest.role; // Adjust role checking as needed

  return (
    <Route
      {...rest}
      element={hasAccess ? Component : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
