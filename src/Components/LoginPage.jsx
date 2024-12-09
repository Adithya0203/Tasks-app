import React from 'react';
import { Button, TextField, Grid2, Typography, Paper, Link, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login } = useAuth(); // Access login function from context
  const navigate = useNavigate();

  const signin = () => {
    let credentials = { email, password };
    axios
      .post("http://localhost:8081/api/users/login", credentials)
      .then((res) => {
        let jwt = res.data.jwt;
        let id = res.data.userId;
        console.log(id, jwt);
        localStorage.setItem("jwt", jwt);
        login(id, jwt);
        navigate('/');
      })
      .catch((e) => console.log(e));
  };

  // return (
  //   <Grid 
  //     container 
  //     justifyContent="center" 
  //     alignItems="center" 
  //     style={{ height: '100vh' }}
  //   >
  //     <Grid item xs={12} sm={6} md={4}>
  //       <Paper elevation={3} sx={{ padding: 4 }}>
  //         <Typography variant="h5" align="center" gutterBottom>
  //           Log in to your account
  //         </Typography>
  //         <TextField
  //           label="E-mail address"
  //           variant="outlined"
  //           fullWidth
  //           margin="normal"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           required
  //         />
  //         <TextField
  //           label="Password"
  //           variant="outlined"
  //           fullWidth
  //           margin="normal"
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           required
  //         />
  //         <Box mt={2}>
  //           <Button 
  //             variant="contained" 
  //             color="primary" 
  //             fullWidth 
  //             onClick={signin}
  //           >
  //             Login
  //           </Button>
  //         </Box>
  //         <Box mt={2} textAlign="center">
  //           <Typography variant="body2">
  //             New to us? <Link href="/register">Sign Up</Link>
  //           </Typography>
  //         </Box>
  //       </Paper>
  //     </Grid>
  //   </Grid>
  // );

  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        height: '100vh',
        backgroundImage: 'linear-gradient(to right, #6a11cb, #2575fc)', // Gradient background
        padding: 2,
      }}
    >
      <Grid2 xs={12} sm={8} md={4}>
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            borderRadius: '16px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#6a11cb',
              letterSpacing: '1px',
            }}
          >
            Log in to your account
          </Typography>
          <TextField
            label="E-mail address"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
              },
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
              },
            }}
          />
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={signin}
              sx={{
                borderRadius: '12px',
                padding: '0.8rem',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}
            >
              Login
            </Button>
          </Box>
          <Box mt={2} textAlign="center">
            <Typography variant="body2" sx={{ color: 'gray' }}>
              New to us?{' '}
              <Link href="/register" sx={{ textDecoration: 'none', color: '#6a11cb', fontWeight: 'bold' }}>
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Grid2>
    </Grid2>
  );
  
}

export default LoginPage;