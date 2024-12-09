import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Container } from '@mui/material';
import React from 'react';

const Home = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/register");
  };

// return (
//   <Box
//     sx={{
//       position: 'relative',
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('./vite.svg')`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       overflow: 'hidden',
//     }}
//   >
//     <Container
//       sx={{
//         position: 'relative',
//         textAlign: 'center',
//         color: 'white',
//         padding: '2rem',
//         backdropFilter: 'blur(5px)',
//         backgroundColor: 'rgba(0, 0, 0, 0.4)',
//         borderRadius: '16px',
//         boxShadow: '0px 4px 20px rgba(0,0,0,0.5)',
//       }}
//     >
//       <Typography
//         variant="h3"
//         sx={{
//           mb: 2,
//           fontWeight: 'bold',
//           letterSpacing: '1px',
//           textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
//         }}
//       >
//         Welcome to Task Manager
//       </Typography>
//       <Typography
//         variant="h6"
//         sx={{
//           mb: 4,
//           lineHeight: '1.6',
//           maxWidth: '600px',
//           margin: '0 auto',
//           textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
//         }}
//       >
//         Manage your tasks effectively with our app. Add, view, update, and delete tasks, and track your progress with ease.
//       </Typography>
//       <Button
//         variant="contained"
//         size="large"
//         sx={{
//           backgroundColor: '#ff5722',
//           color: '#fff',
//           fontSize: '1.2rem',
//           fontWeight: 'bold',
//           padding: '0.8rem 2rem',
//           borderRadius: '24px',
//           transition: 'all 0.3s ease-in-out',
//           '&:hover': {
//             backgroundColor: '#e64a19',
//             transform: 'scale(1.05)',
//           },
//         }}
//         onClick={handleOnClick}
//       >
//         Get Started
//       </Button>
//     </Container>
//   </Box>
// );
return (
  <Box
    sx={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('./home_img_2.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden',
    }}
  >
    <Container
      sx={{
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        padding: '2rem',
        backdropFilter: 'blur(1px)',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '16px',
        boxShadow: '0px 4px 20px rgba(0,0,0,0.5)',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 2,
          fontWeight: 'bold',
          letterSpacing: '1px',
          textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
        }}
      >
        Welcome to Task Manager
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mb: 4,
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto',
          textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
        }}
      >
        Manage your tasks effectively with our app. Add, view, update, and delete tasks, and track your progress with ease.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: '#ff5722',
          color: '#fff',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          padding: '0.8rem 2rem',
          borderRadius: '24px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: '#e64a19',
            transform: 'scale(1.05)',
          },
        }}
        onClick={handleOnClick}
      >
        Get Started
      </Button>
    </Container>
  </Box>
);


};

export default Home;