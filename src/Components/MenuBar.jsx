import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box, Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';

const MenuBar = () => {
  const { isSignedIn, logout } = useAuth();
  const [activeItem, setActiveItem] = React.useState('home');
  const navigate = useNavigate();

  const handleItemClick = (name) => {
    setActiveItem(name); // Update the active item
  };

  // return (
  //   <AppBar 
  //   // position="sticky"
  //   sx={{ backgroundColor: '#1976d2' }}
  //   >
  //     <Toolbar>
  //       {/* Logo Section */}
  //       <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
  //         <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
  //           TaskManager
  //         </Typography>
  //       </Box>

  //       {/* Menu Items */}
  //       <Box sx={{ display: 'flex' }}>
  //         <Button
  //           color="inherit"
  //           component={Link}
  //           to="/"
  //           onClick={() => handleItemClick('home')}
  //           sx={{ textDecoration: activeItem === 'home' ? 'underline' : 'none' }}
  //         >
  //           Home
  //         </Button>

  //         {!isSignedIn ? (
  //           <>
  //             <Button
  //               color="inherit"
  //               component={Link}
  //               to="/login"
  //               onClick={() => handleItemClick('login')}
  //               sx={{ textDecoration: activeItem === 'login' ? 'underline' : 'none' }}
  //             >
  //               Login
  //             </Button>
  //             <Button
  //               variant="contained"
  //               color="primary"
  //               component={Link}
  //               to="/register"
  //               onClick={() => handleItemClick('register')}
  //               sx={{ textDecoration: activeItem === 'register' ? 'underline' : 'none' }}
  //             >
  //               Register
  //             </Button>
  //           </>
  //         ) : (
  //           <>
  //             <Button
  //               color="inherit"
  //               component={Link}
  //               to="/profile"
  //               onClick={() => handleItemClick('profile')}
  //               sx={{ textDecoration: activeItem === 'profile' ? 'underline' : 'none' }}
  //             >
  //               Profile
  //             </Button>
  //             <Button
  //               color="inherit"
  //               onClick={() => {
  //                 logout();
  //                 setActiveItem('logout'); // Optional: Update activeItem to logout
  //               }}
  //               sx={{ textDecoration: activeItem === 'logout' ? 'underline' : 'none' }}
  //             >
  //               Logout
  //             </Button>
  //           </>
  //         )}
  //       </Box>
  //     </Toolbar>
  //   </AppBar>
  // );

  return (
  <AppBar
  position='sticky'
    sx={{ backgroundColor: '#1976d2', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
  >
    <Toolbar>
      {/* Logo Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            letterSpacing: '1px',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
          }}
        >
          TaskPro
        </Typography>
      </Box>

      {/* Menu Items */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          color="inherit"
          component={Link}
          to="/"
          onClick={() => handleItemClick('home')}
          sx={{
            textDecoration: activeItem === 'home' ? 'underline' : 'none',
            fontWeight: activeItem === 'home' ? 'bold' : 'normal',
            color: activeItem === 'home' ? '#ffd54f' : '#ffffff',
            '&:hover': { color: '#ffd54f' },
          }}
        >
          Home
        </Button>

        {!isSignedIn ? (
          <>
            <Button
              color="inherit"
              component={Link}
              to="/login"
              onClick={() => handleItemClick('login')}
              sx={{
                textDecoration: activeItem === 'login' ? 'underline' : 'none',
                fontWeight: activeItem === 'login' ? 'bold' : 'normal',
                color: activeItem === 'login' ? '#ffd54f' : '#ffffff',
                '&:hover': { color: '#ffd54f' },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/register"
              onClick={() => handleItemClick('register')}
              sx={{
                textDecoration: activeItem === 'register' ? 'underline' : 'none',
                fontWeight: 'bold',
                color: '#ffffff',
                borderRadius: '20px',
                padding: '0.5rem 1.5rem',
                '&:hover': {
                  backgroundColor: '#ffd54f',
                  color: '#1976d2',
                },
              }}
            >
              Register
            </Button>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              component={Link}
              to="/profile"
              onClick={() => handleItemClick('profile')}
              sx={{
                textDecoration: activeItem === 'profile' ? 'underline' : 'none',
                fontWeight: activeItem === 'profile' ? 'bold' : 'normal',
                color: activeItem === 'profile' ? '#ffd54f' : '#ffffff',
                '&:hover': { color: '#ffd54f' },
              }}
            >
              Profile
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                logout();
                setActiveItem('logout'); // Optional: Update activeItem to logout
              }}
              sx={{
                textDecoration: activeItem === 'logout' ? 'underline' : 'none',
                fontWeight: activeItem === 'logout' ? 'bold' : 'normal',
                color: activeItem === 'logout' ? '#ffd54f' : '#ffffff',
                '&:hover': { color: '#ffd54f' },
              }}
            >
              Logout
            </Button>
            <Avatar
              sx={{
                ml: 2,
                backgroundColor: '#ffd54f',
                color: '#1976d2',
                fontWeight: 'bold',
              }}
            >
              <Person2SharpIcon />
            </Avatar>
          </>
        )}
      </Box>
    </Toolbar>
  </AppBar>
);
};

export default MenuBar;