import React, { useState } from 'react';
import { Button, Box, Drawer, IconButton, InputBase, AppBar, Toolbar, Typography, Avatar, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, CarRental as CarIcon, GroupAdd as GroupAddIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Profile = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  // Handle menu item click to navigate
  const handleMenuClick = (key) => {
    switch (key) {
      case '1':
        navigate('tasks');
        break;
      case '2':
        navigate('friends');
        break;
      default:
        break;
    }
  };

  // return (
  //   <Box sx={{ display: 'flex' }}>
  //     {/* Sidebar */}
  //     <Drawer
  //       sx={{
  //         width: 240,
  //         flexShrink: 0,
  //         '& .MuiDrawer-paper': {
  //           width: 240,
  //           boxSizing: 'border-box',
  //         },
  //       }}
  //       variant="persistent"
  //       anchor="left"
  //       open={drawerOpen}
  //     >
  //       <Box sx={{ textAlign: 'center', padding: 2 }}>
  //         <Typography variant="h6" sx={{ color: 'white' }}>
  //           Car Rental
  //         </Typography>
  //       </Box>
  //       <List>
  //         <ListItem button onClick={() => handleMenuClick('1')}>
  //           <CarIcon />
  //           <ListItemText primary="Tasks" />
  //         </ListItem>
  //         <ListItem button onClick={() => handleMenuClick('2')}>
  //           <GroupAddIcon />
  //           <ListItemText primary="Friends" />
  //         </ListItem>
  //       </List>
  //     </Drawer>

  //     {/* Main Layout */}
  //     <Box
  //       sx={{
  //         flexGrow: 1,
  //         display: 'flex',
  //         flexDirection: 'column',
  //       }}
  //     >
  //       {/* Header */}
  //       <AppBar position="sticky" sx={{ backgroundColor: '#1976d2' }}>
  //         <Toolbar>
  //           {/* Toggle Sidebar Button */}
  //           <IconButton
  //             color="inherit"
  //             edge="start"
  //             onClick={() => setDrawerOpen(!drawerOpen)}
  //             sx={{ mr: 2 }}
  //           >
  //             <MenuIcon />
  //           </IconButton>

  //           {/* Search Input */}
  //           <Box sx={{ flexGrow: 1 }}>
  //             <InputBase
  //               sx={{
  //                 color: 'white',
  //                 backgroundColor: 'rgba(255, 255, 255, 0.15)',
  //                 borderRadius: '4px',
  //                 width: '400px',
  //                 padding: '5px 10px',
  //               }}
  //               placeholder="Search"
  //               startAdornment={<SearchIcon sx={{ color: 'white', marginRight: 1 }} />}
  //             />
  //           </Box>

  //           {/* Avatar */}
  //           <Avatar sx={{ ml: 2 }}>A</Avatar>
  //         </Toolbar>
  //       </AppBar>

  //       {/* Content Section */}
  //       <Box
  //         sx={{
  //           flexGrow: 1,
  //           marginTop: 8,
  //           marginLeft: 2,
  //           marginRight: 2,
  //           padding: 2,
  //           backgroundColor: '#f5f5f5',
  //           borderRadius: 2,
  //         }}
  //       >
  //         {/* Placeholder Content */}
  //         <div>
  //           <Outlet />
  //         </div>
  //       </Box>
  //     </Box>
  //   </Box>
  // );

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Content Section */}
        <Box
          sx={{
            flexGrow: 1,
            padding: 4,
            backgroundColor: '#ffffff',
            borderRadius: 2,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Placeholder Content */}
          <div>
            <Outlet />
          </div>
        </Box>
      </Box>
    </Box>
  );
  
};

export default Profile;