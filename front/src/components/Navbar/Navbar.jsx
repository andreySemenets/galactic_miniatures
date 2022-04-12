import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar, Box, Toolbar,
  IconButton, Typography, Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import $api from '../../http';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const subBar = ['Warhammer', 'Fantasy', 'Sci-Fi', 'Terrain', 'Space Marines', 'Astrates', 'Tech-Guys', 'Giga-Robots' ]

  const logout = () => {
    $api.post('/auth/logout').then((res) => {
      console.log(res.data);
      localStorage.removeItem('token');
      dispatch({ type: 'SET_USER', payload: {} });
      navigate('/auth/login');
    });
  };
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
