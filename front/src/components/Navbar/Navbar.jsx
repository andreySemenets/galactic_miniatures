import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  const subBar = ['Warhammer', 'Fantasy', 'Sci-Fi', 'Terrain', 'Space Marines', 'Astrates', 'Tech-Guys', 'Giga-Robots' ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {subBar.map((el) => {
            return (
              <Typography key={el} variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 14 }}>
                {el}
              </Typography>
            )
          })}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
