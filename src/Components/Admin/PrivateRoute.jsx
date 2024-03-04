import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, user, isAdmin, ...rest }) => {
  // Check if user is authenticated and has admin privileges
  const isAuthenticated = user !== null;
  const isAdminUser = isAuthenticated && isAdmin;

  return (
    <Route
      {...rest}
      element={
        isAuthenticated && isAdminUser ? (
          <Element />
        ) : (
          <Navigate to="/AddProduct" replace />
        )
      }
    />
  );
};

export default PrivateRoute;
