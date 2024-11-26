// src/components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';  // Import Navigate
import { auth } from '../firebase'; // Import the Firebase auth object

const ProtectedRoute = ({ children }) => {
  // Check if the user is authenticated
  if (!auth.currentUser) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the protected page
  return children;
};

export default ProtectedRoute;
