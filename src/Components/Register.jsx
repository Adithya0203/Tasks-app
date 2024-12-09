import React, { useState } from 'react';
import { Button, TextField, Grid2, Typography, Box, Alert, Link, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const signup = () => {
    let user = { username, email, password };

    axios
      .post("http://localhost:8081/api/users/signup", user)
      .then(() => {
        setSuccessMessage('Registration successful! Redirecting...');
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after success
        }, 3000);
      })
      .catch((e) => {
        setError('An error occurred while registering. Please try again.');
        console.error("Registration error:", e);
      });
  };

  const handleSubmit = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Clear previous error and success messages
    setError('');
    setSuccessMessage('');

    // Validation logic
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Proceed with signup
    signup();
  };

  // return (
  //   <Grid2 container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
  //     <Grid2 size={{md:6}}>
  //       <Typography variant="h5" color="primary" align="center" gutterBottom>
  //         Create a new account
  //       </Typography>
  //       <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
  //         <TextField
  //           label="Username"
  //           variant="outlined"
  //           value={username}
  //           onChange={(e) => setUsername(e.target.value)}
  //           required
  //         />
  //         <TextField
  //           label="E-mail address"
  //           variant="outlined"
  //           type="email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           required
  //         />
  //         <TextField
  //           label="Password"
  //           variant="outlined"
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           required
  //         />
  //         <TextField
  //           label="Confirm Password"
  //           variant="outlined"
  //           type="password"
  //           value={confirmPassword}
  //           onChange={(e) => setConfirmPassword(e.target.value)}
  //           required
  //         />
  //         <Button variant="contained" color="primary" type="submit" fullWidth>
  //           Sign Up
  //         </Button>
  //       </Box>

  //       {/* Display error message if any */}
  //       {error && <Alert severity="error" sx={{ marginTop: 2 }}>{error}</Alert>}

  //       {/* Display success message */}
  //       {successMessage && <Alert severity="success" sx={{ marginTop: 2 }}>{successMessage}</Alert>}

  //       <Box sx={{ marginTop: 2, textAlign: 'center' }}>
  //         <Typography variant="body2">
  //           Already have an account? <Link href="/login">Log in</Link>
  //         </Typography>
  //       </Box>
  //     </Grid2>
  //   </Grid2>
  // );
  return(
<Grid2
  container
  justifyContent="center"
  alignItems="center"
  style={{ height: '100vh', backgroundColor: '#f0f4f8' }}
>
  <Grid2 xs={12} md={6}>
    <Paper
      elevation={4}
      sx={{
        padding: 4,
        borderRadius: 2,
        backgroundColor: '#ffffff',
        maxWidth: 500,
        margin: 'auto',
      }}
    >
      <Typography
        variant="h5"
        color="secondary"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          letterSpacing: '1px',
          textTransform: 'capitalize',
        }}
      >
        Create your account
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          marginTop: 2,
        }}
      >
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="E-mail Address"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          fullWidth
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          fullWidth
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            padding: '10px 0',
            borderRadius: '30px',
            '&:hover': {
              backgroundColor: '#ff7043',
            },
          }}
        >
          Sign Up
        </Button>
      </Box>

      {/* Error and Success Messages */}
      {error && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          {error}
        </Alert>
      )}
      {successMessage && (
        <Alert severity="success" sx={{ marginTop: 2 }}>
          {successMessage}
        </Alert>
      )}

      <Box sx={{ marginTop: 2, textAlign: 'center' }}>
        <Typography variant="body2">
          Already have an account?{' '}
          <Link
            href="/login"
            sx={{
              color: '#1976d2',
              textDecoration: 'none',
              fontWeight: 'bold',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Log In
          </Link>
        </Typography>
      </Box>
    </Paper>
  </Grid2>
</Grid2>
)
}

export default Register;