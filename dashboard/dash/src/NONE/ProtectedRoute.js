// src/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('user'); // Example authentication check

  return isAuthenticated ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
