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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {user.email
            ? (
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'green' }}>
                  Welcome
                  {' '}
                  {user.email}
                </Typography>
                <Button color="inherit" onClick={logout}>Log Out</Button>
              </>
            )
            : <Button color="inherit" onClick={() => navigate('/auth/login')}>Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
