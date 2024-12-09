import React, { createContext, useState, useContext } from 'react';
import { Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [jwt, setJwt] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

const navigate = useNavigate()

  const login = (id, jwt) => {
    setIsSignedIn(true);
    setUserId(id);
    setJwt(jwt);
    setSnackbarMessage('Logged in successfully!');
    setSnackbarOpen(true);
  };

  const logout = () => {
    setIsSignedIn(false);
    setUserId(null);
    setSnackbarMessage('Logged out successfully!');
    setSnackbarOpen(true);
    navigate("/")
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, userId, login, logout, jwt }}>
      {children}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        message={snackbarMessage}
        onClose={handleCloseSnackbar}
      />
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);